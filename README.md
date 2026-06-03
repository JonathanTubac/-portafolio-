# Jonathan Tubac — Portfolio

Personal portfolio built as a premium interactive SPA. Live at **[jtubac.dev](https://jtubac.dev)**.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v3 |
| Animations | Framer Motion v12 |
| Smooth Scroll | Lenis v1 |
| Font | Geist (Sans + Mono) |

## Features

- **Dark / Light mode** — toggle with persistent preference via `next-themes`
- **EN / ES i18n** — full English and Spanish translation across all sections
- **Canvas animation** — interactive network graph in the hero, theme-aware
- **Smooth scroll** — Lenis-powered with anchor-link fix for mid-scroll navigation
- **Sections** — Hero, Experience & Education, Projects, Stack, Certifications, Impact, Contact

## Running Locally

```bash
git clone https://github.com/JonathanTubac/portafolio
cd portafolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Project Structure

```
app/                  # Next.js App Router
components/
  canvas/             # NetworkCanvas hero animation
  navigation/         # Navbar
  providers/          # ThemeProvider, LanguageProvider, SmoothScrollProvider
  sections/           # One file per page section
  ui/                 # Reusable components (MagneticButton, ThemeToggle, etc.)
lib/
  i18n.ts             # EN/ES translation dictionaries
  utils.ts            # Utility helpers
public/               # Static assets and project screenshots
```

## License

MIT
