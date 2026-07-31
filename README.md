# Quebeta — MERN Website

> Strategy. Technology. Growth.

## Project Structure

```
quebeta/
├── frontend/                  ← React + Vite + Tailwind CSS
│   ├── src/
│   │   ├── assets/            ← logo.svg, hero.svg
│   │   ├── components/        ← Navbar, Footer, ScrollProgress, ScrollToTop
│   │   ├── sections/          ← Hero, About, Services, WhyChooseUs,
│   │   │                         TechStack, Industries, Partnership,
│   │   │                         CEOMessage, Clients, CTA
│   │   ├── data/              ← services.js, industries.js, techStack.js
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css          ← Tailwind + global CSS vars + keyframes only
│   ├── index.html
│   ├── vite.config.js
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   └── package.json
│
├── backend/                   ← Express + MongoDB
│   ├── config/db.js           ← MongoDB connection
│   ├── controllers/contactController.js
│   ├── models/Contact.js
│   ├── routes/contact.js
│   ├── server.js
│   ├── .env.example           ← Copy to .env and fill in
│   └── package.json
│
├── package.json               ← Root scripts (dev, build, install:all)
└── .gitignore
```

## Quick Start

```bash
# 1. Install all dependencies
npm run install:all

# 2. Set up backend env
cp backend/.env.example backend/.env
# Edit backend/.env with your MONGO_URI, SMTP settings, etc.

# 3. Run both frontend & backend in parallel
npm run dev
```

- Frontend: http://localhost:5173
- Backend API: http://localhost:5000

## Individual Commands

```bash
npm run dev:frontend   # frontend only
npm run dev:backend    # backend only
npm run build          # build frontend for production
npm start              # start backend in production
```

## CSS Architecture

All styling uses **Tailwind CSS utility classes** directly in JSX.  
No separate `.css` files per component — everything is colocated.

Global `index.css` contains only:
- `@tailwind` directives
- CSS custom properties (`--brand-primary`, `--gradient-primary`, etc.)
- Reusable `@layer components` classes used across multiple files:
  `.gradient-text`, `.section`, `.section-header`, `.section-eyebrow`,
  `.section-title`, `.section-subtitle`, `.btn`, `.btn-primary`, etc.
- Custom keyframe animations (`float`, `pulse-glow`, `marquee-*`, etc.)

## Brand Colors

| Token            | Value     |
|------------------|-----------|
| Brand Primary    | `#0078BF` |
| Brand Secondary  | `#1CBBEE` |
| Brand Accent     | `#00D4FF` |
| Brand Dark       | `#0A1929` |
