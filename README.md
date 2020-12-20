# Reproduction Repositoryy
Stack: NX, Nuxt.js

## Total Reproduction Steps from Scratch

```
npx create-nx-workspace@@latest // empty workspace

// Create nuxt app
yarn add @nx-plus/nuxt -D
nx g @nx-plus/nuxt:app my-app

// Add Storybook for Vue
npx -p @storybook/cli sb init

// After that, move ./.storybook and ./stories to ./apps/my-app (.storybook is renamed to docs)

// Add storyshots
yarn add @storybook/addon-storyshots -D
```
