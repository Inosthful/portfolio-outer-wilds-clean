# Chaîne de déploiement — portfolio-outer-wilds-clean

## Vue d'ensemble

Ce document décrit la chaîne complète, du code sur ta machine jusqu'au site accessible en ligne.

```
Ta machine
    │
    │  git push
    ▼
GitHub (dépôt distant)
    │
    │  GitHub Actions se déclenche
    ▼
Runner CI/CD (serveur Ubuntu temporaire)
    │
    │  build Vite → dist/
    ▼
Branche gh-pages du dépôt
    │
    │  GitHub Pages sert les fichiers
    ▼
Site en ligne
https://inosthful.github.io/portfolio-outer-wilds-clean/
```

---

## Étape 1 — Développement local

Tu travailles sur ta machine avec :

```bash
npm run dev
```

Vite lance un serveur local avec hot reload. Rien n'est envoyé nulle part, tout reste sur ta machine.

**Ce qui compte ici** : le fichier `vite.config.js` définit `base: '/portfolio-outer-wilds-clean/'`. C'est le sous-chemin de l'URL finale sur GitHub Pages. Sans ça, les assets (modèles .glb, images) ne se chargent pas en production.

---

## Étape 2 — Push vers GitHub

```bash
git push origin main
```

Ton code est envoyé sur le dépôt GitHub. C'est ce push qui déclenche automatiquement tout le reste.

---

## Étape 3 — GitHub Actions (automatique)

GitHub détecte le push et exécute le fichier `.github/workflows/deploy.yml` sur un serveur Ubuntu temporaire que GitHub met à disposition gratuitement.

Ce serveur :
- n'existe que le temps du workflow (~2-3 min)
- clone ton dépôt
- installe Node.js et les dépendances
- exécute `npm run build`
- publie le résultat

**Aujourd'hui**, le workflow fait uniquement : install → build → deploy. Il n'y a aucune vérification de qualité avant le déploiement (voir `cicd/01-analyse.md` pour l'amélioration possible).

---

## Étape 4 — Build Vite

```bash
npm run build
```

Vite compile tout le projet et produit un dossier `dist/` contenant :

```
dist/
├── index.html          ← point d'entrée
├── assets/
│   ├── index-[hash].js ← tout le JS compilé et minifié
│   └── index-[hash].css← tout le CSS compilé
├── earth.glb           ← modèles 3D copiés depuis public/
├── jupiter.glb
├── ...
└── images/             ← images copiées depuis public/
```

Le hash dans les noms de fichiers (`index-abc123.js`) permet au navigateur de savoir qu'un fichier a changé et de ne pas utiliser une version en cache.

---

## Étape 5 — Publication sur gh-pages

L'action `peaceiris/actions-gh-pages` prend le contenu de `dist/` et le pousse sur une branche spéciale du dépôt appelée `gh-pages`.

Cette branche contient uniquement les fichiers compilés — pas le code source. Elle est écrasée à chaque déploiement.

---

## Étape 6 — GitHub Pages sert le site

GitHub Pages surveille la branche `gh-pages`. Dès qu'elle est mise à jour, le contenu est accessible à l'URL :

```
https://inosthful.github.io/portfolio-outer-wilds-clean/
```

Le délai entre le push sur `gh-pages` et la mise à jour visible sur l'URL est généralement de **30 secondes à 2 minutes**.

---

## Résumé des fichiers clés

| Fichier | Rôle dans la chaîne |
|---------|---------------------|
| `vite.config.js` | Définit `base` pour que les URLs soient correctes sur GitHub Pages |
| `.github/workflows/deploy.yml` | Décrit les étapes exécutées par GitHub Actions |
| `package.json` → script `build` | Commande que GitHub Actions exécute pour compiler |
| `dist/` | Résultat du build, ce qui est déployé (ne pas committer) |
| branche `gh-pages` | Ce que GitHub Pages sert au navigateur |

---

## Ce qui peut faire échouer un déploiement

| Problème | Cause probable |
|----------|---------------|
| Site inaccessible | `base` mal configuré dans `vite.config.js` |
| Modèles 3D (.glb) qui ne chargent pas | Chemin relatif incorrect dans le code Vue |
| Workflow GitHub Actions rouge | Erreur à l'install ou au build — voir les logs dans l'onglet Actions du dépôt |
| Ancienne version toujours affichée | Cache navigateur — forcer avec Ctrl+Shift+R |
| Déploiement qui ne se déclenche pas | Push fait sur une autre branche que `main` |

---

## Pour améliorer cette chaîne

Voir le dossier `docs/cicd/` pour une description complète des améliorations possibles :
ajouter du lint, du typecheck, des tests, et séparer la CI du déploiement.
