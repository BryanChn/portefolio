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
4. [ ] Style + responsive (à faire après le formulaire et le déploiement)
5. [ ] ← PROCHAINE ÉTAPE : Formulaire de contact : front (validation, états chargement/succès/erreur) puis API serverless
6. [ ] Déploiement Vercel + repo GitHub propre
7. [ ] Bonus : repos GitHub dynamiques via l'API GitHub, animations (Framer Motion)
