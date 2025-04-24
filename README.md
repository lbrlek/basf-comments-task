## BASF Frontend Task – Threaded Comments App

This project is a solution to the BASF frontend task involving a threaded comment system built with Vue 3 and Nuxt 3.

It uses `example.json` as the data source and allows users to view, reply to, and add comments.  
The layout and interactions follow the provided Figma design.

---

## 🔧 Technologies and tools used

- **Nuxt 3** (Vue 3 + Vite + Composition API)
- **TypeScript**
- **Pinia** – for state management
- **Vitest** – for unit testing
- **ESLint v8** – configured for Vue 3 + TypeScript + Prettier
- **Prettier** – for automatic code formatting
- **Custom composables** – e.g. `useCurrentUser`
- **Static JSON mock backend** – via `/public/data/example.json`

---

## Getting started

```bash
npm install
npm run dev
```

## To run tests

```bash
npm run test
```
## To lint and format

```bash
npm run lint
npm run lint:fix
```