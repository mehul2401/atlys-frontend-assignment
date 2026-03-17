## Atlys Frontend Assignment – France Visa Page

This project is a frontend implementation of key sections from the Atlys France visa page  
(`https://www.atlys.com/en-IN/visa/france-visa`), focused on UI fidelity, performance, accessibility, and scalable architecture.

### Live Demo

- **Vercel**: [https://atlys-frontend-assignment-brown.vercel.app/](https://atlys-frontend-assignment-brown.vercel.app/)

### Repository

- **GitHub**: [https://github.com/mehul2401/atlys-frontend-assignment.git](https://github.com/mehul2401/atlys-frontend-assignment.git)

---

## What Was Built

The page recreates a subset of the Atlys France visa experience:

- **Hero Banner**
  - Full-bleed hero image with approval-focused copy.
  - Interactive “Access To 29 Countries” chip that opens a responsive countries modal (side panel on desktop, bottom sheet on mobile).
  - CTA button that is desktop-only; mobile uses a fixed bottom CTA bar.
- **Sticky Section Tabs**
  - Scroll-spy tab bar (`Overview`, `Documents`, `Why Atlys`, `Reviews`, `Additional`) using `IntersectionObserver`.
  - Smooth scroll navigation, keyboard navigable tablist, animated active underline.
  - Fixed bottom “Start Application” CTA on mobile, separate from the sticky nav.
- **Approval Focused Support**
  - Two-column layout on desktop: copy on the left, animated document scroller on the right.
  - On mobile/tablet, collapses into a vertical timeline with dots and a card-like document view.
  - Driven by structured data from `data/supportDocuments.ts`.
- **We Optimize for Approval**
  - Scroll-driven comparison carousel showing “Others vs Atlys” with 3D flip animations.
  - Data-driven slides defined in `data/visaPage.ts`.
  - Shared animation state for desktop cards and compact mobile layout.
- **Success Stories**
  - Ratings header with platform scores (Trustpilot, App Store, Google Play).
  - Horizontally scrolling, auto-advancing carousel of testimonials.
  - Circular progress ring tied to the auto-advance timer, with robust handling of rapid manual navigation.
- **One Visa Access**
  - Section explaining Schengen multi-country access.
  - 3D fanned stack of country cards with responsive geometry based on viewport width.

---

## How to Run It

### Prerequisites

- Node.js 18+ (recommended by Next.js 14)
- npm (or pnpm / yarn; commands below use `npm`)

### Install and Run

```bash
git clone https://github.com/mehul2401/atlys-frontend-assignment.git
cd atlys-frontend-assignment

npm install
npm run dev
```

Then open `http://localhost:3000` in your browser.

### Build and Production Run

```bash
npm run build
npm run start
```

---

## Tech Stack & Project Structure

### Tech Stack

- **Next.js 14** (App Router, `app/` directory)
- **TypeScript** (strict typing for components and data)
- **Tailwind CSS** (utility-first styling)
- **Framer Motion** (scroll-based and 3D animations)

### High-Level Structure

```text
app/
  layout.tsx        # Root layout, fonts, metadata, <main> landmark
  page.tsx          # Server component that composes all sections

components/
  sections/
    hero/
      HeroBanner.tsx
      HeroBanner.data.ts
      HeroCountriesModal.tsx
    approval/
      ApprovalFocusedSupport.tsx
      SupportIntro.tsx
      SupportTimeline.tsx
    we-optimize/
      WeOptimizeForApproval.tsx
      FlipCard.tsx
      ComparisonCard.tsx
      MobileCard.tsx
      RichText.tsx
      WeOptimizeIcons.tsx
    success/
      SuccessStories.tsx
      SuccessHeader.tsx
      ReviewCard.tsx
      SuccessIcons.tsx
      ProgressRing.tsx
    one-visa/
      OneVisaAccess.tsx
      CountryStack.tsx
      CountryCard.tsx
    SectionTabs.tsx
  ui/
    Button.tsx
    HeroStatChip.tsx
    DocumentScroller.tsx
    DocumentItem.tsx

data/
  visaInfo.ts
  tabs.ts
  supportDocuments.ts
  reviews.ts
  visaPage.ts

hooks/
  useIsMobile.ts
  useCardGeometry.ts

lib/
  stack3d.ts         # Shared math for 3D card stacks
```

This layout keeps:

- **Section code** colocated under `components/sections/<section-name>/`.
- **Shared UI primitives** under `components/ui/`.
- **All static/configurable content** in `data/`.
- **Reusable behavior** in `hooks/` and `lib/`.

---

## Key Engineering Decisions

### 1. Server vs Client Components

- `app/page.tsx` and `app/layout.tsx` are **Server Components** by default.
- Interactive sections are marked `"use client"`:
  - `HeroBanner` (modal state),
  - `SectionTabs` (IntersectionObserver, scroll),
  - `ApprovalFocusedSupport` (animated scroller),
  - `WeOptimizeForApproval` (scroll + 3D flips),
  - `SuccessStories` (carousel),
  - `OneVisaAccess` (viewport-based 3D stack).
- Heavy sections are lazy-loaded via `next/dynamic` from the server page **without `ssr: false`**, enabling React Server Components and streaming while keeping initial JS smaller.

**Goal:** keep the shell and static content server-rendered while isolating browser-only behavior into targeted client components.

---

### 2. Performance & Core Web Vitals

- **LCP (Largest Contentful Paint)**
  - Hero image uses `next/image` with `priority` and `fetchPriority="high"` so it’s fetched as early as possible.
  - Sections below the fold (`WeOptimizeForApproval`, `SuccessStories`, `OneVisaAccess`) are dynamically imported.
- **CLS (Cumulative Layout Shift)**
  - Fixed heights and responsive containers for cards and carousels.
  - `next/image` always has intrinsic dimensions or uses fixed-size containers.
  - Sticky nav and mobile CTA bar are rendered in predictable locations with no layout jumps.
- **Main thread & JS**
  - Animation logic is confined to specific components.
  - Scroll listeners are debounced or powered by Framer Motion hooks (`useScroll`, `useMotionValueEvent`) instead of raw `scroll` spam.
  - Presentational subcomponents (`ReviewCard`, rich text, icons) are small and reusable.
- **Assets**
  - Comparison card illustrations use `next/image` with `sizes` tuned to their rendered size so we don’t fetch unnecessarily large AVIFs.
  - Unused template assets (default Next.js SVGs) were removed from `public/` to keep the repo lean.

---

### 3. Scalable Architecture & Reuse

- **Section-local modules**
  - Each complex section (hero, approval, we-optimize, success, one-visa) is decomposed into:
    - A main section component,
    - One or more subcomponents,
    - Any local data/constants (`*.data.ts`) colocated in that folder.
- **Shared hooks**
  - `useIsMobile`: responsive breakpoint detection based on viewport width.
  - `useCardGeometry`: calculates dimensions, spacing, and transforms for 3D card fans; reused by `OneVisaAccess`.
- **Shared utilities**
  - `lib/stack3d.ts` exposes `getTransformForIndex`, a reusable piece of math for arranging 3D stacks by index.
- **UI primitives**
  - `Button`, `HeroStatChip`, `DocumentScroller`, `DocumentItem`, and `TabButton` provide consistent styling and behavior across the app.

**Result:** large, complex sections remain understandable and maintainable, with clear boundaries and low duplication.

---

### 4. Accessibility Thinking

- **Landmarks & headings**
  - Root layout wraps the page in a semantic `<main id="main-content">` landmark.
  - A “Skip to main content” link is available for keyboard and screen reader users.
  - Sections use semantic `<section>` with stable `id`s that match the sticky tabs.
- **Tabs**
  - `SectionTabs` uses:
    - `role="tablist"` on the container,
    - `role="tab"`, `aria-selected`, `aria-controls`, and roving `tabIndex` on tabs.
  - Keyboard support:
    - Arrow keys, Home/End move between tabs,
    - Enter/Space activate a tab and scroll to its section.
- **Modals**
  - `HeroCountriesModal` uses `role="dialog"`, `aria-modal="true"`, and `aria-labelledby`.
  - Click-outside, ESC, and explicit close buttons are supported.
  - Focus returns to the trigger element when the dialog closes.
- **Buttons & icons**
  - Carousel arrow buttons have descriptive `aria-label`s.
  - Decorative icons are either `aria-hidden` or paired with visible text.

---

### 5. Animations & UX

- **We Optimize for Approval**
  - Scroll position is mapped to slide index using Framer Motion’s `useScroll`.
  - A custom animation loop handles 3D flips without skipping slides, even on rapid scroll or clicks.
  - Desktop and mobile variants share the same `MotionValue` so they stay in sync.
- **Success Stories**
  - Auto-advancing carousel with:
    - Infinite loop via cloned items,
    - A pending queue system for smooth rapid-click behavior,
    - A progress ring that visually tracks time to the next slide.
  - Hover behavior is gated by `pointerType` to avoid mobile/touch quirks.
- **Approval Focused Support**
  - `DocumentScroller` centers an active document with fades above and below on desktop.
  - Mobile uses a vertical timeline with dots and a card that scrolls with content.

Animations favour subtle, meaningful motion over constant distraction and are tuned for performance.

---

## Responsiveness

The layout is tested across:

- **Mobile**: single-column stacks, bottom CTA, bottom-sheet countries modal.
- **Tablet**: stacked sections with tablet-specific spacing and timeline behavior.
- **Desktop**: multi-column layouts, sticky sections, and 3D card stacks with full perspective.

Tailwind’s responsive utilities (`sm`, `md`, `lg`) are used consistently to ensure fluid transitions between breakpoints.

---

## Notes & Assumptions

- External media assets (hero background, comparison illustrations, flag, etc.) are loaded from Atlys’s CDN and may set third-party cookies in the browser.
- Some data (e.g. testimonials, copy) is representative and not meant to be an exact data replica.
- The focus of this implementation is:
  - UI/UX fidelity,
  - Performance and Core Web Vitals,
  - Accessibility,
  - Clean, scalable architecture.

---

## Author

**Mehul Bhatia**