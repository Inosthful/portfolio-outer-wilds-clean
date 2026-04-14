# 02 — Outils à installer

Avant de configurer la CI/CD, il faut installer les outils localement pour pouvoir les utiliser dans les workflows GitHub Actions.

---

## 1. ESLint + plugin Vue

ESLint analyse le code statiquement pour détecter les erreurs et imposer des conventions.

### Installation

```bash
npm install --save-dev eslint @eslint/js eslint-plugin-vue
```

### Configuration (`eslint.config.js` à la racine)

```js
import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'

export default [
  js.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  {
    rules: {
      'no-unused-vars': 'warn',
      'vue/no-unused-vars': 'warn',
      'vue/multi-word-component-names': 'off', // désactivé car composants single-word (SolarSystem, Modal...)
    }
  }
]
```

> `vue/multi-word-component-names` est désactivé car le projet utilise des noms comme `Modal`, `Tutorial`, `StarField` — valides dans ce contexte.

### Script à ajouter dans `package.json`

```json
"scripts": {
  "lint": "eslint src --ext .js,.ts,.vue"
}
```

---

## 2. TypeScript + vue-tsc

`vue-tsc` est le type-checker pour les Single File Components Vue avec TypeScript. Il vérifie les types sans compiler.

### Installation

```bash
npm install --save-dev typescript vue-tsc
```

### Configuration (`tsconfig.json` à la racine)

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "strict": true,
    "jsx": "preserve",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "skipLibCheck": true,
    "noEmit": true
  },
  "include": ["src/**/*.ts", "src/**/*.vue"],
  "exclude": ["node_modules", "dist"]
}
```

> `noEmit: true` signifie que vue-tsc vérifie les types sans produire de fichiers. C'est ce qu'on veut pour la CI.

### Script à ajouter dans `package.json`

```json
"scripts": {
  "typecheck": "vue-tsc --noEmit"
}
```

---

## 3. Vitest

Vitest est le framework de test natif pour les projets Vite. Il partage la même config que Vite, donc zéro configuration supplémentaire nécessaire.

### Installation

```bash
npm install --save-dev vitest @vue/test-utils jsdom
```

### Configuration — ajouter dans `vite.config.js`

```js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  base: '/portfolio-outer-wilds-clean/',
  plugins: [vue()],
  // ... reste de la config existante ...

  // Ajout pour Vitest
  test: {
    environment: 'jsdom',
    globals: true,
  },
})
```

### Script à ajouter dans `package.json`

```json
"scripts": {
  "test": "vitest run",
  "test:watch": "vitest"
}
```

> `vitest run` exécute les tests une seule fois (pour la CI). `vitest` seul lance le mode watch (pour le dev).

---

## Exemple de test à créer (`src/data/PlanetsData.test.ts`)

```ts
import { describe, it, expect } from 'vitest'
import { planetsData } from './PlanetsData'

describe('PlanetsData', () => {
  it('contient au moins une planète', () => {
    expect(planetsData.length).toBeGreaterThan(0)
  })

  it('chaque planète a un nom et une distance', () => {
    for (const planet of planetsData) {
      expect(planet.name).toBeDefined()
      expect(typeof planet.name).toBe('string')
    }
  })
})
```

---

## Récapitulatif des scripts `package.json` après installation

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "lint": "eslint src --ext .js,.ts,.vue",
  "typecheck": "vue-tsc --noEmit",
  "test": "vitest run",
  "test:watch": "vitest"
}
```
