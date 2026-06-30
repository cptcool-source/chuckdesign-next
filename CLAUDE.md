# chuck design — Next.js

## Stack — Path B (Next.js + npm)
- Next.js 16.2.9 App Router — JavaScript (not TypeScript)
- Tailwind v4 via `@import "tailwindcss"` in `app/globals.css` — no tailwind.config.js
- GSAP 3.13+ — always `gsap.registerPlugin()` inside `useEffect`, never at module level
- Phosphor Icons via `@phosphor-icons/react` npm package (React components, not CDN)
- Fonts: Outfit (300–800) + Geist Mono (400–500) via `next/font/google`
- Formspree endpoint: `https://formspree.io/f/mdaraoaw`
- Deploy: Vercel

## Commands
```
npm run dev    # localhost:3000
npm run build
vercel         # production deploy
```

## Architecture
```
app/
  layout.js         fonts, metadata, JSON-LD, viewport (themeColor, colorScheme)
  page.js           RSC — pure server component, composes all sections
  globals.css       full design system — DO NOT convert to Tailwind utilities
  portfolio/
    page.js         'use client' — carousel + lightbox, standalone experience
    layout.js       portfolio-specific metadata
    portfolio.css   scoped pf- styles
components/
  Nav.jsx           'use client' — scroll state, mobile drawer, active link
  Hero.jsx          'use client' — GSAP ScrollTrigger scroll-pinned chapter reveal
  RevealInit.jsx    'use client' — mounts useReveal hook for RSC page
  FilmSlate.jsx     server component — static marquee
  Services.jsx      'use client' — 3D card tilt via mousemove
  Process.jsx       'use client' — IntersectionObserver rail fill + step activation
  Work.jsx          'use client' — drag scroll rail, lightbox state
  About.jsx         'use client' — Phosphor icons (createContext at module eval)
  Contact.jsx       'use client' — controlled form, Formspree fetch
  Footer.jsx        'use client' — Phosphor social icons, social links
  Lightbox.jsx      'use client' — open/close, zoom on wheel/click
  PortfolioFloatBtn.jsx  client — Next.js Link to /portfolio
hooks/
  useReveal.js      IntersectionObserver for .reveal-up → .visible class
public/images/      all site images
```

## Design System
Source of truth: `app/globals.css`. Keep all existing CSS intact.

**Tokens** (in `:root`):
- `--bg: #FAFAF8`, `--surface: #F2F0ED`, `--surface-raised: #ECEAE6`
- `--accent: #E05C3A` (coral), `--accent-light: #F07A5A`, `--accent-dark: #B84928`
- `--text: #111111`, `--text-muted: #6B6965`, `--text-faint: #BBBAB6`
- `--max-w: 1160px`, `--gutter: clamp(20px,5vw,60px)`, `--radius: 14px`

**Typography** (Outfit variable weight):
- 800 = display/hero/section titles
- 300 = contrast midlines, italic accent
- 500/400 = body copy

## Rules
- `'use client'` required on any component using hooks, event listeners, or animations
- Any component importing `@phosphor-icons/react` must be `'use client'` (createContext at module eval)
- Scroll reveals: add `reveal-up` class + optional `style={{ '--delay': 'Xms' }}`; RevealInit.jsx mounts the observer from page.js (RSC)
- Card colors: set `--card-color: #hex` inline style on the card element
- GSAP: register plugins inside `useEffect`; use `gsap.matchMedia()` for desktop/mobile/reduced-motion splits
- Hero scroll-pin: `pin: true, scrub: 1.2, end: '+=210%'` — chapters at timeline positions 0.5/2.5/3.8/5.2, exit at 6.5
- Nav: transparent dark glass at top (`rgba(0,0,0,0.5)`), crossfades to `rgba(242,240,237,0.94)` on scroll
- The CSS grain texture on `body::after` and the hero dark background are intentional — do not remove
- Portfolio lives at `/portfolio` (internal route) — PortfolioFloatBtn and Work.jsx both link there

## Brand
- Business: chuck design · North Port FL 34291 · charles@chuckdesign.com
- Voice: direct, short sentences, no buzzwords ("leverage", "synergy", "solutions")
- Target: local SW Florida small businesses — restaurants, trades, health, professional services
