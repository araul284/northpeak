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
│   │   └── agencyData.ts        # ⚠️ content source of truth — see note below
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

## Content Data

Nearly all copy and structured content (client logos, service definitions, case studies, pricing tiers, FAQs) lives in `src/data/agencyData.ts` and is imported into the relevant components:

| Component | Imports |
|---|---|
| `Hero.tsx` | `TRUST_CLIENTS` |
| `ServicesSection.tsx` | `SERVICES_DATA` |
| `ResultsSection.tsx` | `CASE_STUDIES_DATA` |
| `PricingSection.tsx` | `PRICING_PLANS_DATA` |
| `ContactSection.tsx` | `FAQS_DATA` |

> **Note:** This file is not yet part of this repo snapshot. It needs to be added at `src/data/agencyData.ts`, exporting the arrays above shaped to match the interfaces in `types.ts` (`ServiceItem`, `CaseStudy`, `PricingPlan`), plus a `TRUST_CLIENTS` array of `{ label: string }` and a `FAQS_DATA` array of `{ q: string; a: string }`. The app will not build until this file exists.

## Key Interactions

- **Sticky nav** with smooth-scroll to section IDs (`#hero`, `#services`, `#results`, `#pricing`, `#methodology`, `#faq`, `#contact`).
- **Service modal** — clicking "Scope" on a service card opens a detail modal; its CTA pre-fills the contact form's service interest and jumps to `#contact`.
- **Pricing tier selection** — selecting a plan pre-fills the contact form message and jumps to `#contact`.
- **ROI Estimator** (in Results section) — two sliders compute a projected 12-month revenue lift; "Apply These Projections" pre-fills the contact form with the calculated inputs and jumps to `#contact`.
- **Contact form** — client-side validation (name, email format, service, budget, message length, terms checkbox), simulated async submit with a generated reference ID, and a reset flow back to the empty form.

## Known Issues / Cleanup Notes

- `src/data/agencyData.ts` is missing from this snapshot (see above) — the project won't compile without it.
- `ContactSection`'s default/reset values for `serviceInterest` (`"Growth Marketing & Ads"`) and `budgetRange` (`"$10k - $25k/mo"`) don't exactly match any of the selectable `<option>` or budget-pill values, so nothing appears pre-selected until the user actively picks an option. Worth aligning these strings with the real option lists.
- `package.json` still lists `@google/genai`, `express`, `dotenv`, and `motion` as dependencies — leftovers from the original AI Studio template's server-backed Gemini app. None of these are used by the current static frontend; safe to remove unless a backend is planned.