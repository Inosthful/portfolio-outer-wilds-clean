# 03 — Pipeline détaillée

## Architecture générale

La pipeline est découpée en **deux workflows** séparés :

| Fichier | Déclencheur | Rôle |
|---------|-------------|------|
| `ci.yml` | Tout push, toute PR | Vérifications qualité (lint, types, tests, build) |
| `deploy.yml` | Push sur `main` uniquement | Déploiement sur GitHub Pages |

Cette séparation est importante : la CI tourne sur toutes les branches, le déploiement uniquement quand le code est validé sur `main`.

---

## Workflow CI (`ci.yml`)

### Déclencheur

```yaml
on:
  push:
    branches: ['**']   # toutes les branches
  pull_request:
    branches: [main]   # toute PR vers main
```

Cela signifie que si quelqu'un ouvre une Pull Request vers `main`, la CI s'exécute automatiquement. GitHub affiche le résultat directement sur la PR.

---

### Job 1 : quality

Ce job regroupe les vérifications qui n'ont pas besoin de produire un artefact.

#### Étape 1 — Checkout

```yaml
- uses: actions/checkout@v4
```

GitHub Actions travaille dans un environnement vide. Cette étape clone le dépôt dans l'environnement d'exécution. Sans elle, il n'y a aucun fichier.

#### Étape 2 — Setup Node.js avec cache

```yaml
- uses: actions/setup-node@v4
  with:
    node-version: 20
    cache: 'npm'
```

Le paramètre `cache: 'npm'` est crucial. Il utilise le hash du `package-lock.json` pour savoir si les dépendances ont changé. Si elles n'ont pas changé depuis le dernier run, `node_modules` est restauré depuis le cache GitHub — le `npm ci` qui suit devient ~10x plus rapide.

> On utilise `npm ci` (et non `npm install`) car il est plus strict et plus rapide en CI : il installe exactement ce qui est dans `package-lock.json` sans le modifier.

#### Étape 3 — Install

```yaml
- run: npm ci
```

#### Étape 4 — Lint

```yaml
- name: Lint
  run: npm run lint
```

ESLint analyse tous les fichiers `.js`, `.ts` et `.vue` dans `src/`. Si une règle est violée, le job échoue et le déploiement est bloqué.

**Ce que ça détecte** : imports inutilisés, variables non déclarées, mauvais usage des props Vue, syntaxe invalide dans les templates.

#### Étape 5 — TypeCheck

```yaml
- name: TypeCheck
  run: npm run typecheck
```

`vue-tsc --noEmit` vérifie les types dans tous les fichiers `.vue` et `.ts`. Le build Vite ne fait **pas** cette vérification — il transpile sans valider. Cette étape est donc indispensable.

**Ce que ça détecte** : props mal typées, appels de fonctions avec de mauvais arguments, accès à des propriétés inexistantes sur un objet.

#### Étape 6 — Tests

```yaml
- name: Tests
  run: npm run test
```

`vitest run` exécute tous les fichiers `*.test.ts` et `*.spec.ts` une seule fois. Si un test échoue, le job s'arrête.

---

### Job 2 : build

Ce job dépend du job `quality` via `needs: quality`.

```yaml
build:
  needs: quality
  runs-on: ubuntu-latest
```

Si `quality` échoue, `build` ne démarre pas. Ça économise du temps et des ressources.

#### Étape — Vite build

```yaml
- run: npm run build
```

Vite compile le projet et produit le dossier `dist/`. Cette étape valide que le build de production fonctionne (les erreurs de build et les erreurs de type sont différentes).

#### Upload de l'artefact

```yaml
- uses: actions/upload-artifact@v4
  with:
    name: dist
    path: dist/
    retention-days: 1
```

Le dossier `dist/` est sauvegardé comme artefact GitHub Actions. Le workflow `deploy.yml` peut ensuite le télécharger sans avoir à rebuilder.

---

## Workflow CD (`deploy.yml`)

### Déclencheur

```yaml
on:
  workflow_run:
    workflows: ['CI']
    types: [completed]
    branches: [main]
```

Ce workflow se déclenche **après** la CI, uniquement si elle a réussi sur `main`. C'est le mécanisme qui lie CI et CD : impossible de déployer si la CI n'est pas verte.

### Job : deploy

```yaml
if: ${{ github.event.workflow_run.conclusion == 'success' }}
```

Même si le workflow_run est complété, on vérifie qu'il s'est bien terminé en succès (pas en échec ou annulation).

#### Téléchargement de l'artefact

```yaml
- uses: actions/download-artifact@v4
  with:
    name: dist
    path: dist/
    github-token: ${{ secrets.GITHUB_TOKEN }}
    run-id: ${{ github.event.workflow_run.id }}
```

On récupère le `dist/` construit par la CI plutôt que de rebuilder — cohérence garantie entre ce qui a été testé et ce qui est déployé.

#### Déploiement GitHub Pages

```yaml
- uses: peaceiris/actions-gh-pages@v3
  with:
    github_token: ${{ secrets.GITHUB_TOKEN }}
    publish_dir: ./dist
```

Pousse le contenu de `dist/` sur la branche `gh-pages`. GitHub Pages sert automatiquement cette branche.

---

## Résumé du flux complet

```
Developer pushes code
        │
        ├─ Sur n'importe quelle branche
        │         ▼
        │   [CI] quality job
        │     - lint (ESLint)
        │     - typecheck (vue-tsc)
        │     - test (vitest)
        │         │ succès
        │         ▼
        │   [CI] build job
        │     - npm run build
        │     - upload artifact dist/
        │
        └─ Si branche = main ET CI réussie
                  ▼
            [CD] deploy job
              - download artifact dist/
              - push vers gh-pages
              - GitHub Pages sert le site
```

---

## Durée estimée par étape

| Étape | Durée sans cache | Durée avec cache |
|-------|-----------------|-----------------|
| checkout | ~5s | ~5s |
| setup-node + npm ci | ~90s | ~15s |
| lint | ~10s | ~10s |
| typecheck | ~15s | ~15s |
| tests | ~10s | ~10s |
| build | ~30s | ~30s |
| deploy | ~20s | ~20s |
| **Total** | **~3 min** | **~1m45s** |
