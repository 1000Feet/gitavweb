# Gitav Web

Sito ufficiale di Gitav Group — villaggi, camping, resort e agriturismo in Maremma Toscana.

Homepage con card cliccabili e landing page dedicate per ogni struttura:

- `/ilgabbiano` — Gitavillage Il Gabbiano (Orbetello)
- `/argentario` — Gitavillage Argentario (Porto Santo Stefano)
- `/california` — Gitavillage California (Albinia)
- `/clubdegliamici` — Gitavillage Club degli Amici (Fonteblanda)
- `/lecannelle` — Gitavillage Le Cannelle (Talamone)
- `/lemarze` — Gitavillage Le Marze (Marina di Grosseto)
- `/osaresort` — Osa Resort (Albinia)
- `/talamone` — Gitavillage Talamone (Fonteblanda)

## Stack

- [Vite](https://vitejs.dev/) 5 + React 18 + TypeScript
- [Tailwind CSS](https://tailwindcss.com/) 3
- [React Router](https://reactrouter.com/) 6
- Compatibile con [Lovable.dev](https://lovable.dev)

Typography: Cormorant Garamond (serif) + DM Sans (sans).

## Sviluppo

```bash
npm install
npm run dev
```

Il dev server gira su `http://localhost:8080`.

## Build

```bash
npm run build
```

L'output finisce in `dist/`.

## Struttura contenuti

Ogni struttura è definita in `src/data/hotels.ts` con contenuti bilingue IT/EN
(tagline, descrizione, highlight, servizi, orari, benefit, regole, contatti, PDF).

Foto e PDF vivono in `public/hotels/<slug>/pics/` e `public/hotels/<slug>/pdfs/`
e sono referenziate con path assoluti stile `/hotels/<slug>/...`.

## Responsive

Tutto il sito è progettato per funzionare su mobile e desktop in egual misura.
