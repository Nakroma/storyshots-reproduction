# Reproduction Repository
Stack: NX, Nuxt.js

## Steps taken to get to this repo
```
npx create-nx-workspace@@latest // Created empty workspace

// Created nuxt app
yarn add @nx-plus/nuxt -D
nx g @nx-plus/nuxt:app my-app

// Added Storybook for Vue
npx -p @storybook/cli sb init

// After that, move ./.storybook and ./stories to ./apps/my-app (.storybook is renamed to docs)

// Added storyshots and adjusted configs
yarn add @storybook/addon-storyshots -D

// Added css mock
```
