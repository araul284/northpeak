# NorthPeak Digital

Marketing site for **NorthPeak Digital** — "The Agency of Ascent." A single-page React application with a hero, services, results/case studies + ROI calculator, pricing, methodology, and a contact form with client-side validation and FAQ accordion.

---

## Live URL

> `https://northpeak-fawn.vercel.app/`

## Tech Stack

- **React 19** + **TypeScript**
- **Vite 6** (dev server / build tool)
- **Tailwind CSS 4** (via `@tailwindcss/vite`, no separate config file needed)
- **lucide-react** for icons
- Fonts: Newsreader (serif italic accents) + Plus Jakarta Sans (body/UI), loaded via Google Fonts in `index.html`

## Getting Started

**Prerequisites:** Node.js (18+ recommended)

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:3000`.

### Other scripts

```bash
npm run build     # production build to dist/
npm run preview   # preview the production build locally
npm run lint      # type-check with tsc --noEmit
npm run clean     # remove dist/ and server.js
```

## Project Structure

```
.
├── index.html
├── src/
│   ├── main.tsx
│   ├── App.tsx                  # top-level layout + shared state/handlers
│   ├── index.css                # Tailwind import + font utility
│   ├── types.ts                 # shared TS interfaces
│   ├── assets/images/
│   │   └── bg.jpg
│   ├── data/
│   │   └── agencyData.ts
│   └── components/
│       ├── Navbar.tsx
│       ├── Hero.tsx
│       ├── ServicesSection.tsx
│       ├── ServiceModal.tsx
│       ├── ResultsSection.tsx    # case studies + interactive ROI estimator
│       ├── PricingSection.tsx
│       ├── AboutSection.tsx      # methodology / process
│       ├── ContactSection.tsx    # form + FAQ accordion
│       └── Footer.tsx
```

## Key Interactions

- **Sticky nav** with smooth-scroll to section IDs (`#hero`, `#services`, `#results`, `#pricing`, `#methodology`, `#faq`, `#contact`).
- **Service modal** — clicking "Scope" on a service card opens a detail modal; its CTA pre-fills the contact form's service interest and jumps to `#contact`.
- **Pricing tier selection** — selecting a plan pre-fills the contact form message and jumps to `#contact`.
- **ROI Estimator** (in Results section) — two sliders compute a projected 12-month revenue lift; "Apply These Projections" pre-fills the contact form with the calculated inputs and jumps to `#contact`.
- **Contact form** — client-side validation (name, email format, service, budget, message length, terms checkbox), simulated async submit with a generated reference ID, and a reset flow back to the empty form.
