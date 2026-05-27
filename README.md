# I Wrote You Like A Love Letter — Premium Cinematic Website

A premium cinematic website for a poetry book. Built with Next.js, TailwindCSS, and Framer Motion.

## Emotional Experience

This website is designed to feel like:
- Opening a private diary at midnight
- Sitting near a rainy window
- Rereading unsaid feelings
- Emotional intimacy and longing

## Tech Stack

- **Next.js 14** — React framework with App Router
- **TailwindCSS** — Utility-first styling
- **Framer Motion** — Animations and scroll-driven effects
- **Lenis** — Smooth scroll with inertia
- **GSAP** — ScrollTrigger for pinned sections (optional enhancement)

## Project Structure

```
app/
├── sections/                    # Page sections (scenes)
│   ├── HeroSection.tsx
│   ├── QuoteStripSection.tsx
│   ├── AboutSection.tsx
│   ├── ShowcaseSection.tsx
│   ├── PoetrySection.tsx
│   ├── AuthorSection.tsx
│   ├── ReaderSection.tsx
│   ├── CTASection.tsx
│   ├── FooterSection.tsx
│   └── transitions/           # Cinematic transitions between scenes
│       ├── HeroToQuoteTransition.tsx
│       ├── QuoteToAboutTransition.tsx
│       ├── AboutToShowcaseTransition.tsx
│       ├── ShowcaseToPoetryTransition.tsx
│       ├── PoetryToAuthorTransition.tsx
│       ├── AuthorToReaderTransition.tsx
│       ├── ReaderToCTATransition.tsx
│       └── CTAToFooterTransition.tsx
├── components/                  # Reusable components
│   ├── GrainOverlay.tsx
│   ├── FloatingParticles.tsx
│   ├── RainOverlay.tsx
│   ├── Vignette.tsx
│   ├── AnimatedText.tsx
│   └── FadeIn.tsx
├── hooks/                       # Custom React hooks
│   ├── useScrollProgress.ts
│   └── useInView.ts
├── lib/                         # Utilities
│   └── utils.ts
├── globals.css                  # Global styles + animations
├── layout.tsx                   # Root layout
└── page.tsx                     # Main homepage

public/
└── images/                      # Your uploaded images (see IMAGE_MAPPING.md)
```

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Add Your Images

See `IMAGE_MAPPING.md` for the complete mapping of your uploaded images to the website sections.

Convert your PNG images to JPG (quality 85-90) for better performance, or update the paths in component files to use `.png`.

Place images in `public/images/`.

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 4. Build for Production

```bash
npm run build
```

## Design System

### Colors

| Token | Hex | Usage |
|-------|-----|-------|
| Midnight | `#0B1028` | Primary background |
| Midnight Deep | `#090D22` | Darker sections |
| Midnight Darker | `#060918` | Deepest darkness |
| Moonlit | `#233A75` | Secondary blue |
| Paper | `#F4F1EA` | Primary text |
| Amber | `#E59A5C` | Warm accent, CTAs |
| Amber Light | `#F0B07A` | Hover states |
| Rose Dusty | `#D97A87` | Emotional accent |
| Rain | `#596A92` | Muted text, footer links |

### Typography

- **Headlines:** Cormorant Garamond (serif) — elegant, editorial
- **Body:** Inter (sans-serif) — clean, readable

### Motion Principles

- Slow fade-ups (0.6s - 1.5s)
- Subtle parallax (0.5x - 1.2x)
- Gentle scale transforms (1.0 → 1.02)
- Opacity transitions over blur
- No bouncing, no spinning, no aggressive motion

## Homepage Flow

| Scene | Section | Emotional State |
|-------|---------|-----------------|
| 1 | Hero | Anticipation, silence |
| T1 | Fade to Black | Breath |
| 2 | Quote Strip | Intimacy, vulnerability |
| T2 | Page Turn | Shift to memory |
| 3 | About | Origin, tenderness |
| T3 | Rain Intensifies | Escalation |
| 4 | Showcase | Immersion, sensory memory |
| T4 | Grid Blur + Ink | Close to text |
| 5 | Poetry Fragments | Core experience |
| T5 | Silhouette | Humanization |
| 6 | Author Note | Connection, humanity |
| T6 | Horizontal Split | Expand to collective |
| 7 | Reader Emotions | Validation, shared experience |
| T7 | Warm Gradient Bloom | Invitation |
| 8 | CTA / Buy | Warmth, offer |
| T8 | Cool to Dark | Letting go |
| 9 | Footer | Afterglow |

## Performance Notes

- Images are lazy-loaded except hero
- Grain overlay is CSS-based (no canvas)
- Particles are limited to 15-20 max
- Animations respect `prefers-reduced-motion`
- Static export for optimal deployment

## Customization

### Changing Poems

Edit the `poems` array in `app/sections/PoetrySection.tsx`.

### Changing Quotes

Edit the `quotes` array in `app/sections/QuoteStripSection.tsx` and `readerQuotes` in `app/sections/ReaderSection.tsx`.

### Changing Colors

Update the Tailwind config in `tailwind.config.ts` and CSS variables in `app/globals.css`.

## License

Private project. All rights reserved.
