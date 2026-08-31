# Jewelry Randomizer

Click a button, get a random piece of jewelry to wear. Check any combination of
tag toggles (Professional, Halloween, Christmas, ...) to restrict picks to
pieces matching all checked tags. "No jewelry today" is always a possible
result, regardless of which tags are checked.

## Editing the jewelry list

Edit `src/jewelry.js`. Each piece needs an `id`, `name`, and a `tags` array
(use `[]` for an untagged, everyday piece):

```js
{ id: 17, name: 'Silver bar necklace', tags: ['professional'] },
```

To add a new tag toggle, add it to the `TAGS` list at the top of the same
file, then tag pieces with its `key`:

```js
export const TAGS = [
  { key: 'professional', label: 'Professional' },
  { key: 'halloween', label: 'Halloween' },
  { key: 'christmas', label: 'Christmas' },
  { key: 'vacation', label: 'Vacation' },
]
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
