# Portfolio développeur

## Contexte

- Portfolio one-page pour montrer mes compétences et viser des postes fullstack.
- Niveau : débutant en React / TypeScript. Je veux coder moi-même : guide-moi, explique, laisse-moi écrire les parties clés.
- Réponds en français.

## Stack

- Vite + React + TypeScript
- Tailwind CSS
- Backend : fonction serverless Vercel (`/api/contact`) + Resend pour l'envoi d'emails
- Déploiement : Vercel

## Plan

1. [x] Setup Vite + React + TS (projet créé, `npm install` fait)
2. [x] Installer Tailwind (v4 + plugin @tailwindcss/vite, `@import "tailwindcss"` dans src/index.css)
3. [x] Structure : layout façon Spotify (Sidebar, PlayerBar), sections Hero, À propos, Compétences (filtres), Projets (carrousel + fiche détaillée, données dans src/data/projects.ts). Contact = squelette
4. [x] Style + responsive : Hero façon page d'artiste, mini-lecteur mobile au-dessus des onglets, section active surlignée (`useActiveSection`), animations au scroll (`Reveal`), Prettier (`npm run format`)
5. [x] Formulaire de contact : front + API `api/contact.ts` (Resend), validation partagée dans `src/lib/contact.ts`. Dev local : `npx vercel dev` → http://localhost:3000 (pas `npm run dev`, sinon pas d'/api)
6. [x] Déploiement Vercel : déploiement continu depuis `main` (chaque push = mise en prod), site sur https://bryan-chaine.vercel.app ; README réécrit
7. [ ] ← PROCHAINE ÉTAPE (bonus) : repos GitHub dynamiques via l'API GitHub, vraies images de projets, animations avancées (Framer Motion)
