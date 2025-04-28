## BASF Frontend Task – Threaded Comments App

This project is a solution to the BASF frontend task involving a threaded comment system built with Vue 3 and Nuxt 3.

It uses `example.json` as the data source and allows users to view, reply to, and add comments.  
The layout and interactions follow the provided Figma design.

---


## Features

- View and reply to threaded comments
- Nested (recursive) comment structure
- Modal input for replies
- Avatar fallback handling (color circle if no picture)
- Responsive layout matching Figma
- Unit tests for core components (`CommentItem`, `CommentList`)
- Testing covers both rendering and user interactions

---

## Technologies and tools used

- **Nuxt 3** (Vue 3 + Vite + Composition API)
- **TypeScript**
- **Pinia** – for state management
- **Vitest** – for unit testing
- **@vue/test-utils** – for testing Vue components
- **Happy DOM** – for virtual DOM testing environment
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