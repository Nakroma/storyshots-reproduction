# Reproduction Repositoryy
Stack: NX, Nuxt.js

## Reproduction Steps

```
npx create-nx-workspace@@latest // empty workspace

// Create nuxt app
yarn add @nx-plus/nuxt -D
nx g @nx-plus/nuxt:app my-app

// Add Storybook for Vue
npx -p @storybook/cli sb init
```
