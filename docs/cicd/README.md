# CI/CD — Documentation complète

## Vue d'ensemble

Ce dossier documente la mise en place d'une pipeline CI/CD complète pour le projet `portfolio-outer-wilds-clean`.

Le projet est un système solaire 3D interactif construit avec **Vue 3 + Three.js + Vite + Tailwind CSS**, déployé sur **GitHub Pages**.

---

## Structure du dossier

```
docs/cicd/
├── README.md                    ← ce fichier
├── 01-analyse.md                ← analyse du projet et besoins identifiés
├── 02-outils.md                 ← outils à installer avant de configurer la CI/CD
├── 03-pipeline.md               ← description détaillée de chaque étape
├── 04-branch-protection.md      ← protection des branches GitHub
└── workflows/
    ├── ci.yml                   ← workflow CI (vérifications qualité)
    └── deploy.yml               ← workflow CD (déploiement GitHub Pages)
```

---

## Qu'est-ce que CI/CD ?

**CI (Continuous Integration)** = chaque fois qu'on pousse du code, des vérifications automatiques s'exécutent : lint, typage, tests, build.

**CD (Continuous Deployment)** = si la CI passe, le code est automatiquement déployé en production.

L'objectif est de détecter les erreurs tôt, d'éviter les déploiements cassés, et de ne jamais mettre en production du code non vérifié.

---

## Ordre de lecture recommandé

1. [01 — Analyse du projet](./01-analyse.md)
2. [02 — Outils à installer](./02-outils.md)
3. [03 — Pipeline détaillée](./03-pipeline.md)
4. [04 — Protection des branches](./04-branch-protection.md)
5. [Workflow CI](./workflows/ci.yml)
6. [Workflow CD](./workflows/deploy.yml)
