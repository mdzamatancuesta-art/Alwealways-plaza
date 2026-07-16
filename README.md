# Alwealways Plaza

An interactive shopping-plaza directory web app. Browse the plaza's shops,
dining, and services — search by name or category, filter by category, and see
which stores are **open right now** based on their hours.

Built with **React + TypeScript + Vite**.

## Features

- 🔎 **Search** across store names, categories, and descriptions
- 🏷️ **Category filter** chips (Fashion, Dining, Electronics, Grocery, Health &
  Beauty, Entertainment, Services, Home)
- 🟢 **Live open/closed status** computed from each store's hours (including a
  "Open now only" toggle)
- 🏬 **Store cards** with floor/unit location, hours, and a click-to-call phone
  link
- 🌗 **Light & dark mode** (follows the system theme) and a responsive layout

## Getting started

```bash
npm install      # install dependencies
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # type-check and build for production (outputs to dist/)
npm run preview  # preview the production build locally
```

## Project structure

```
src/
├── App.tsx                 # Page shell, search/filter state, layout
├── components/
│   └── StoreCard.tsx       # Individual store card
├── data/
│   └── stores.ts           # Store directory data + category metadata
├── lib/
│   └── hours.ts            # Open/closed logic and time formatting
└── index.css               # Theme tokens and styles
```

## Adding or editing stores

Store data lives in [`src/data/stores.ts`](src/data/stores.ts). Add an entry to
the `STORES` array with a unique `id`, a `category` from the `Category` type, a
`floor`/`unit`, hours in 24-hour `"HH:MM"` format, and an optional `phone`. The
directory, filters, counts, and open/closed status update automatically.
