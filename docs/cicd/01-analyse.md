# 01 — Analyse du projet

## Ce qui existe déjà

### Workflow GitHub Actions existant (`.github/workflows/deploy.yml`)

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm install -g npm@latest
      - run: rm -rf node_modules package-lock.json && npm cache clean --force
      - run: npm install
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

**Ce qu'il fait** : checkout → install → build → deploy sur `gh-pages`.

**Ce qu'il ne fait pas** :
- Aucune vérification de qualité (lint, types, tests)
- Supprime et réinstalle `node_modules` à chaque run (très lent, ~2-3 min)
- Pas de cache npm
- Pas de séparation CI / CD (tout dans un seul job)
- Se déclenche uniquement sur `main` en push direct (risqué)

---

## Stack technique identifiée

| Techno | Version | Rôle |
|--------|---------|------|
| Vue 3 | ^3.5.13 | Framework UI |
| Three.js | ^0.176.0 | Rendu 3D |
| Vite | ^6.3.5 | Bundler / dev server |
| Tailwind CSS | ^3.4.17 | CSS utilitaire |
| stats.js | ^0.17.0 | Monitoring perf |

---

## Ce qui manque pour une CI/CD sérieuse

### 1. Aucun outil de lint
Il n'y a pas de `ESLint` configuré. Sans lint, des erreurs de syntaxe, des variables inutilisées ou des imports manquants peuvent passer inaperçus.

**Action** : installer et configurer ESLint avec le plugin Vue.

### 2. Aucune vérification de types TypeScript
Il y a du `.ts` dans le projet (`src/data/PlanetsData.ts`) mais pas de `tsconfig.json`. Le build Vite ignore les erreurs de type — il transpile sans vérifier.

**Action** : ajouter `vue-tsc` pour un vrai type-checking.

### 3. Aucun test
Pas de `vitest`, pas de tests unitaires ou de composants. Impossible de vérifier les régressions automatiquement.

**Action** : installer Vitest et écrire au minimum quelques tests sur la logique métier (données des planètes, calculs d'orbites).

### 4. Pas de cache npm dans la CI
À chaque run, le workflow supprime `node_modules` et réinstalle tout. C'est inutilement lent.

**Action** : utiliser le cache natif de `actions/setup-node`.

### 5. Pas de protection de branche
Rien n'empêche de pusher directement sur `main` sans que les vérifications passent.

**Action** : activer les branch protection rules sur GitHub (voir `04-branch-protection.md`).

---

## Schéma de la pipeline cible

```
Push sur une branche
        │
        ▼
┌───────────────────┐
│   Job: quality    │  ← lint + typecheck + tests
└────────┬──────────┘
         │ succès seulement
         ▼
┌───────────────────┐
│    Job: build     │  ← vite build
└────────┬──────────┘
         │ succès seulement
         ▼
┌───────────────────┐
│   Job: deploy     │  ← uniquement si branche = main
└───────────────────┘
```
