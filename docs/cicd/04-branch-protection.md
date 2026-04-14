# 04 — Protection des branches

## Pourquoi protéger `main` ?

Sans protection de branche, n'importe qui peut pusher directement sur `main` — et déclencher un déploiement sans que la CI ait été exécutée. La protection de branche force le passage par une Pull Request et le succès de la CI avant tout merge.

---

## Configuration sur GitHub

### Où configurer

`Settings` → `Branches` → `Add branch ruleset` (ou `Add classic branch protection rule`)

### Paramètres recommandés pour `main`

| Paramètre | Valeur | Pourquoi |
|-----------|--------|----------|
| Require a pull request before merging | activé | Interdit le push direct sur main |
| Require status checks to pass | activé | La CI doit être verte avant merge |
| Status checks requis | `quality`, `build` | Les deux jobs du workflow `ci.yml` |
| Require branches to be up to date | activé | La PR doit être à jour avec main avant merge |
| Do not allow bypassing the above settings | activé | Même les admins respectent les règles |

---

## Rulesets vs Classic protection

GitHub propose deux systèmes :

**Branch protection rules (classic)** — Le système historique. Fonctionne bien, mais les admins peuvent les bypasser par défaut.

**Rulesets** — Le nouveau système (recommandé). Plus flexible, permet de cibler plusieurs branches avec des patterns, et interdit le bypass par les admins si configuré ainsi.

Pour un projet solo ou petit, les classic rules suffisent. Pour une équipe, préférer les rulesets.

---

## Flux de travail avec protection active

```
1. Créer une branche feature
   git checkout -b feature/ma-feature

2. Développer et committer
   git add .
   git commit -m "feat: ma feature"

3. Pusher la branche
   git push origin feature/ma-feature

4. Ouvrir une Pull Request vers main sur GitHub
   → La CI se déclenche automatiquement

5. Si CI verte → merge possible
   Si CI rouge → merge bloqué, corriger d'abord

6. Après merge sur main
   → Le workflow deploy.yml se déclenche automatiquement
   → Le site est mis à jour
```

---

## Configuration des secrets GitHub

Le workflow de déploiement utilise `secrets.GITHUB_TOKEN`. Ce token est automatiquement fourni par GitHub Actions — aucune configuration manuelle nécessaire.

Si tu voulais déployer sur un hébergeur externe (Vercel, Netlify, un VPS), il faudrait ajouter des secrets manuellement :

`Settings` → `Secrets and variables` → `Actions` → `New repository secret`

Exemple pour un déploiement sur un serveur SSH :
- `SSH_PRIVATE_KEY` : clé privée SSH
- `SSH_HOST` : adresse du serveur
- `SSH_USER` : utilisateur SSH

---

## Environnements GitHub

Pour les projets plus avancés, GitHub propose les **Environments** (`Settings` → `Environments`). Ils permettent de définir des environnements (`staging`, `production`) avec :

- Des secrets spécifiques à l'environnement
- Des reviewers requis avant déploiement (approbation manuelle)
- Des délais de protection

Pour ce projet (déploiement GitHub Pages), un seul environnement `production` suffirait si on voulait une validation manuelle avant chaque déploiement en prod.
