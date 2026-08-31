# Jewelry Randomizer

Click a button, get a random piece of jewelry to wear. Toggle "Professional only"
to restrict picks to pieces tagged as professional.

## Editing the jewelry list

Edit `src/jewelry.js`. Each piece needs an `id`, `name`, and `professional`
boolean:

```js
{ id: 11, name: 'Silver bar necklace', professional: true },
```

## Local development

```
npm install
npm run dev
```

## Deploying

Push to GitHub, then import the repo into [Vercel](https://vercel.com/new).
Vercel auto-detects Vite; no config needed (build command `npm run build`,
output directory `dist`).
