# Military Futures

Military Futures is a modern informational website for high school students and parents exploring U.S. military education and career pathways.

## Why Next.js

This project uses Next.js with the App Router because it is a strong fit for an informational site that needs clear page-based navigation, responsive rendering, good accessibility defaults, and straightforward deployment to Vercel. The first version uses plain global CSS to keep the design system easy to understand and avoid unnecessary styling dependencies.

## Current Pages

- Home
- Service Academies
- ROTC
- Enlistment vs Commissioning
- National Guard
- Congressional Nominations
- Wisconsin Representatives
- Student Checklist
- Resources

## Project Structure

```text
app/
  layout.tsx
  page.tsx
  globals.css
  service-academies/page.tsx
  rotc/page.tsx
  enlistment-vs-commissioning/page.tsx
  national-guard/page.tsx
  congressional-nominations/page.tsx
  wisconsin-representatives/page.tsx
  student-checklist/page.tsx
  resources/page.tsx
components/
  Footer.tsx
  Header.tsx
  InfoCard.tsx
  PageHero.tsx
  PlaceholderPage.tsx
lib/
  site.ts
public/
  campus-pathways.svg
```

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Build for production:

```bash
npm run build
```

## Deployment

The project is ready for Vercel. Import the repository into Vercel and keep the default Next.js settings:

- Framework preset: Next.js
- Build command: `npm run build`
- Output directory: managed by Next.js

The included `vercel.json` declares the Next.js framework preset explicitly.
