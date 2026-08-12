# PhotoFy Website Specification & Design System Matrix

## 1. Executive Summary & Page Architecture

### 1.1 Executive Summary & Brand Identity
**PhotoFy** (https://photofy.base44.app/) is a luxury, dark-mode photography portfolio and AI-powered creative platform built for professional photographers, creative studios, and visual artists. .

- **Visual Vibe**: Luxury Dark Editorial, Cinematic Atmosphere, High-Contrast Typography, Glassmorphic Utility.
- **Core Aesthetic Strategy**: Deep obsidian navy background (`#030508`), sharp charcoal surface containers (`#0B0F19`), rich terracotta/orange primary highlights (`#FF571E`), subtle structural border lines (`#202633`), and elegant editorial serif headlines ("Playfair Display") paired with clean sans-serif body copy ("Space Grotesk").
- **Target Audience**: Professional photographers, wedding photojournalists, commercial directors, content creators, and portrait artists seeking an elevated online gallery and AI content marketing assistant.

---

### 1.2 Core Navigation & Page Architecture

The web platform consists of 6 primary routes and page structures:

```
PhotoFy Web Platform Architecture
├── Header / Sticky Glass Navigation
│   ├── Logo ("PhotoFy")
│   ├── Navigation Links (Portfolio, About, Pricing, Contact)
│   └── Mobile Hamburger Menu Drawer
│
├── 1. Home Page (`/`)
│   ├── Hero Banner & Ambient Radial Glow
│   ├── Key Performance Metrics / Stats Counter Bar (10+ Yrs, 500+ Projects, 50+ Awards)
│   ├── Featured Portfolio Grid with Category Filters
│   ├── Services / "What I Offer" Cards
│   ├──  Spotlight CTA Banner
│   ├── Testimonials & Client Endorsements Carousel
│   └── Bottom Contact Conversion CTA Banner
│
├── 2. Portfolio Gallery (`/portfolio`)
│   ├── Portfolio Header & Editorial Description
│   ├── Filter Bar Pills (All, Wedding, Portrait, Landscape, Street, Nature, Architecture)
│   ├── Responsive Image Grid (3-Column Layout with Hover Zoom & Metadata)
│   └── Full-Screen Image Lightbox Modal with Technical EXIF Data (Lens, ISO, Shutter Speed)
│
├── 3. About Page (`/about`)
│   ├── Photographer Bio & "The Story Behind the Lens"
│   ├── Creative Philosophy & Artistic Statement
│   ├── Studio Space Overview & Equipment Highlight
│   └── Creative Workflow & Process Steps
│
├
│
├── 5. Pricing Page (`/pricing`)
│   ├── Pricing Header & Lifetime Value Proposition
│   ├── Tier Comparison Cards Grid
│   │   ├── Free Tier ($0 Forever: 3 Generations, Basic Hashtags, Single Platform)
│   │   └── PRO Tier ($9.99 One-Time: Unlimited Generations, Multi-Platform, Priority Support, Commercial Rights)
│   ├── Creator Support & Voluntary Donation Banner
│   └── Frequently Asked Questions (FAQ Accordion)
│
├── 6. Contact Page (`/contact`)
│   ├── Contact Header & Editorial Subtitle
│   ├── Contact Info Cards (Email, Studio Location, Operating Hours, Social Media)
│   └── Interactive Inquiry Form (Name, Email, Subject, Message, Submit Button)
│
└── Footer Section
    ├── Brand Mission Summary & Logo
    ├── Quick Navigation Links Matrix
    ├── Direct Links to AI Tools & Services
    └── Copyright & Legal Disclaimers (© 2026 PhotoFy)
```

---

## 2. Color Palette & Design Tokens

### 2.1 CSS Custom Properties (Root & Dark Theme)

Extracted directly from `:root` and `.dark` selectors in `style.css`:

| CSS Custom Property | HSL Value | Hex Equivalent | Visual Context / Role |
| :--- | :--- | :--- | :--- |
| `--background` | `222 47% 2%` | `#030508` | Canvas & Main Page Background (Obsidian Navy) |
| `--foreground` | `220 14% 90%` | `#E2E5EC` | Primary Heading & Body Text (Ice White) |
| `--card` | `222 30% 6%` | `#0B0F19` | Surface Card & Container Background (Charcoal) |
| `--card-foreground` | `220 14% 90%` | `#E2E5EC` | Text inside Cards |
| `--popover` | `222 30% 6%` | `#0B0F19` | Modals, Dropdowns & Popover Surfaces |
| `--popover-foreground` | `220 14% 90%` | `#E2E5EC` | Popover Text |
| `--primary` | `18 100% 56%` | `#FF571E` | Primary Action Color (Vibrant Terracotta Orange) |
| `--primary-foreground` | `0 0% 100%` | `#FFFFFF` | Text on Primary Orange Buttons |
| `--secondary` | `20 85% 42%` | `#C64E12` | Secondary Accent / Deep Amber Rust |
| `--secondary-foreground` | `0 0% 100%` | `#FFFFFF` | Text on Secondary Elements |
| `--muted` | `222 20% 12%` | `#181E29` | Muted Backgrounds & Neutral Pills |
| `--muted-foreground` | `220 10% 55%` | `#808898` | Subtitles, Captions & Secondary Text |
| `--accent` | `20 85% 42%` | `#C64E12` | Interactive Element Accent Highlights |
| `--accent-foreground` | `0 0% 100%` | `#FFFFFF` | Text on Accent Highlights |
| `--destructive` | `0 84.2% 60.2%` | `#EF4444` | Error Badges & Destructive Actions |
| `--destructive-foreground` | `0 0% 98%` | `#FAFAFA` | Destructive Text |
| `--border` | `222 15% 15%` | `#202633` | Structural Card & Section Divider Borders |
| `--input` | `222 15% 15%` | `#202633` | Form Field Outlines & Separators |
| `--ring` | `18 100% 56%` | `#FF571E` | Focus Ring Indicator |
| `--sidebar-background` | `222 30% 4%` | `#070A12` | Mobile Navigation Drawer Background |
| `--sidebar-border` | `222 15% 15%` | `#202633` | Sidebar Edge Borders |

---

### 2.2 Chart & Secondary Palette Tokens

| Token | HSL Value | Hex Equivalent | Usage |
| :--- | :--- | :--- | :--- |
| `--chart-1` | `18 100% 56%` | `#FF571E` | Primary Metric Indicator |
| `--chart-2` | `20 85% 42%` | `#C64E12` | Secondary Metric Accent |
| `--chart-3` | `30 80% 55%` | `#E08838` | Warm Amber Metric Accent |
| `--chart-4` | `280 65% 60%` | `#AC57D6` | Purple Tool Metric Accent |
| `--chart-5` | `340 75% 55%` | `#DE3B75` | Rose Pink Accent Highlight |

---

### 2.3 Gradients & Glassmorphic Backdrop Tokens

- **Hero Ambient Glow Gradient**: `bg-gradient-to-b from-primary/10 via-transparent to-transparent`
- **Featured Card Gradient Overlay**: `bg-gradient-to-t from-black/90 via-black/40 to-transparent`
- **Primary Button Gradient**: `bg-gradient-to-r from-[#FF571E] to-[#C64E12]`
- **Glassmorphic Navigation Header**: `backdrop-blur-md bg-background/80 border-b border-border/50`
- **Glassmorphic Modal & Floating Card**: `backdrop-blur-lg bg-card/90 border border-border`

---

### 2.4 Border Radiuses & Elevation Shadow Scale

#### Border Radiuses
- **Base Variable (`--radius`)**: `0.75rem` (12px)
- **Large Cards & Modals (`rounded-2xl`)**: `1.0rem` (16px)
- **Standard Cards & Form Panels (`rounded-xl`)**: `0.75rem` (12px)
- **Buttons & Input Elements (`rounded-lg`)**: `0.5rem` (8px)
- **Badges & Filter Pills (`rounded-full`)**: `9999px`

#### Shadow Scale Tokens
- `shadow-sm`: `0 1px 2px 0 rgb(0 0 0 / 0.05)`
- `shadow-md`: `0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)`
- `shadow-lg`: `0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)`
- `shadow-xl`: `0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)`
- `shadow-2xl`: `0 25px 50px -12px rgb(0 0 0 / 0.25)`
- `shadow-primary/10`: `0 10px 25px -5px rgba(255, 87, 30, 0.10)` (Warm Orange Ambient Glow Box Shadow)

---

## 3. Typography Matrix

### 3.1 Font Family Tokens

```css
:root {
  --font-display: "Playfair Display", Georgia, Cambria, serif;
  --font-body: "Space Grotesk", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}
```

- **Display Serif (`"Playfair Display"`)**: Used strictly for Hero Headlines, Section Titles, H1/H2 Headings, and Editorial Quotes to convey high-end artistic sophistication.
- **Body Sans (`"Space Grotesk"`)**: Used for Body paragraphs, Navigation items, Subtitles, Buttons, Form Inputs, Filter Badges, Metric Counters, and Code Output snippets.

---

### 3.2 Typography Scale & Hierarchy Matrix

| Element Level | Tailwind Class | Desktop Size | Mobile Size | Weight | Line Height | Color Token | Font Family |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero Display H1** | `text-4xl sm:text-5xl md:text-6xl lg:text-7xl` | 72px / 4.5rem | 36px / 2.25rem | `700` (Bold) | `1.1` (`leading-tight`) | `foreground` | Playfair Display |
| **Section Title H2** | `text-3xl md:text-4xl lg:text-5xl` | 48px / 3.0rem | 30px / 1.875rem | `700` (Bold) | `1.2` (`leading-snug`) | `foreground` | Playfair Display |
| **Card / Subsection H3** | `text-xl md:text-2xl` | 24px / 1.5rem | 20px / 1.25rem | `600` (SemiBold) | `1.3` | `foreground` | Playfair Display |
| **Lead Subtitle** | `text-lg md:text-xl` | 20px / 1.25rem | 18px / 1.125rem | `400` (Normal) | `1.625` (`leading-relaxed`) | `muted-foreground` | Space Grotesk |
| **Body Paragraph** | `text-sm md:text-base` | 16px / 1.0rem | 14px / 0.875rem | `400` (Normal) | `1.625` (`leading-relaxed`) | `muted-foreground` | Space Grotesk |
| **Button Text** | `text-sm md:text-base` | 16px / 1.0rem | 14px / 0.875rem | `600` (SemiBold) | `1.0` | `primary-foreground` | Space Grotesk |
| **Badge / Tag Text** | `text-xs md:text-sm` | 14px / 0.875rem | 12px / 0.75rem | `500` (Medium) | `1.0` | `primary` / `foreground` | Space Grotesk |
| **Meta / Caption** | `text-xs` | 12px / 0.75rem | 12px / 0.75rem | `500` (Medium) | `1.4` | `muted-foreground` | Space Grotesk |

---

## 4. Layout & Component Specifications

### 4.1 Navigation Header Specification
- **Positioning**: Sticky Top (`sticky top-0 z-50`).
- **Styling**: `w-full h-20 px-6 lg:px-12 flex items-center justify-between backdrop-blur-md bg-background/80 border-b border-border/50`.
- **Brand Logo**:
  - Left-aligned text "PhotoFy" rendered in Playfair Display (`text-2xl font-bold tracking-tight text-foreground`).
  - Accompanied by a signature terracotta orange accent dot (`<span class="text-primary">.</span>`) or vector logo asset.
- **Desktop Nav Menu**:
  - Horizontal list of links: `Portfolio`, `About`, `AI Caption Tool`, `Pricing`, `Contact`.
  - Link style: `text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200`.
  - Active Route indicator: `text-primary font-semibold relative after:absolute after:-bottom-2 after:left-0 after:w-full after:h-[2px] after:bg-primary`.
- **Action CTA**:
  - "Try AI Tool" or "Get PRO" pill button (`bg-primary text-primary-foreground text-xs font-semibold px-4 py-2 rounded-full hover:bg-primary/90 transition-all shadow-md shadow-primary/10`).

---

### 4.2 Hero Section Specification
- **Layout**: Centered editorial hero with full-width container (`max-w-7xl mx-auto px-6 py-20 lg:py-32 flex flex-col items-center text-center relative overflow-hidden`).
- **Background Decorative FX**:
  - Radial gradient spot glow (`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full pointer-events-none`).
- **Pill Badge**:
  - Top tag: "AI-POWERED CREATIVE STUDIO" (`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20 mb-6`).
- **Main Headline**:
  - "Professional Photography Portfolio & AI Studio" (Playfair Display, `text-5xl lg:text-7xl font-bold tracking-tight text-foreground max-w-4xl`).
- **Subtitle**:
  - "A premium, AI-powered portfolio and content assistant for professional photographers to showcase their work and scale their creative presence." (Space Grotesk, `text-lg md:text-xl text-muted-foreground max-w-2xl mt-6`).
- **Button Group**:
  - Flex container (`flex flex-col sm:flex-row gap-4 mt-8`).
  - Primary CTA: "Explore Portfolio" (`bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/25 transition-all`).
  - Secondary CTA: "Try AI Tool" (`bg-card/80 text-foreground border border-border px-8 py-4 rounded-full font-semibold hover:border-primary/50 hover:bg-card transition-all`).
- **Stats Counter Grid**:
  - 4-column metric row (`grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-4xl mt-16 pt-12 border-t border-border/50`).
  - Metrics:
    1. `10+` — Years Experience
    2. `500+` — Projects Delivered
    3. `50+` — Industry Awards
    4. `100%` — Client Satisfaction

---

### 4.3 Portfolio Gallery & Filter Spec
- **Category Filter Pills**:
  - Horizontal scroll container (`flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar justify-center`).
  - Categories: `All`, `Wedding`, `Portrait`, `Landscape`, `Street`, `Nature`, `Architecture`.
  - Active Pill: `bg-primary text-primary-foreground px-5 py-2 rounded-full text-sm font-semibold shadow-md shadow-primary/20`.
  - Inactive Pill: `bg-card text-muted-foreground hover:text-foreground hover:bg-muted border border-border px-5 py-2 rounded-full text-sm font-medium transition-all`.
- **Card Grid Layout**:
  - Grid: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8`.
- **Portfolio Card Specification**:
  - Container: `group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/40 transition-all duration-500 hover:shadow-xl`.
  - Image Wrapper: `aspect-[4/3] w-full overflow-hidden relative`.
  - Image Element: `w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out`.
  - Hover Gradient Overlay: `absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6`.
  - Overlaid Content:
    - Category Tag (`text-xs font-semibold text-primary uppercase tracking-wider mb-1`).
    - Project Title (`text-xl font-bold text-white font-display`).
    - Description snippet (`text-sm text-gray-300 line-clamp-2 mt-1`).
    - EXIF Camera Tag (`text-xs text-gray-400 font-mono mt-3 flex items-center gap-2`).

---

### 4.4 AI Caption Tool Component Spec
- **Card Container**:
  - `max-w-4xl mx-auto rounded-2xl bg-card border border-border p-6 md:p-10 shadow-2xl relative overflow-hidden`.
- **Form Inputs Grid**:
  1. **Photo Type**: Selector grid of pill buttons (Wedding, Portrait, Landscape, Street, Nature, Architecture, Commercial, Event).
  2. **Mood Selector**: Selector grid of pill buttons (Romantic, Dramatic, Minimalist, Energetic, Moody, Elegant, Nostalgic, Playful).
  3. **Platform Selector**: Pill options (Instagram, Facebook, Pinterest, LinkedIn, Twitter/X, Portfolio).
  4. **Context Description Input**: `w-full h-32 bg-muted/50 border border-border rounded-xl p-4 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none placeholder:text-muted-foreground/60`.
- **Submit Action Button**:
  - `w-full py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold text-base flex items-center justify-center gap-2 hover:opacity-95 hover:scale-[1.01] active:scale-[0.99] transition-all shadow-lg shadow-primary/20`.
- **Generated Result Output Card**:
  - Appears below input form upon generation.
  - Features tabbed output (Short Caption, Storytelling Caption, Hashtag Cluster).
  - Includes a "Copy to Clipboard" button (`inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-muted text-foreground text-xs font-medium hover:bg-muted/80 transition-colors`).
- **Free Limit Warning Bar**:
  - Banner: `flex items-center justify-between p-4 rounded-xl bg-primary/10 border border-primary/20 text-xs text-foreground mt-6`.
  - Progress badge: "3 / 3 Free Generations Used" with a direct link button "Upgrade to PRO ($9.99)".

---

### 4.5 Pricing Cards Component Spec
- **Grid Layout**: `grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto py-12`.
- **Free Plan Card**:
  - `rounded-2xl bg-card border border-border p-8 flex flex-col justify-between`.
  - Header: Plan Name "Free", Price "$0", Period "forever".
  - Feature List: Checkmark icons with text ("3 AI caption generations", "Basic hashtag suggestions", "Single platform output", "Community support").
  - CTA Button: "Get Started" (`w-full py-3 rounded-xl border border-border text-foreground font-semibold hover:bg-muted transition-colors`).
- **PRO Plan Card (Highlighted)**:
  - `rounded-2xl bg-card border-2 border-primary p-8 flex flex-col justify-between relative shadow-xl shadow-primary/10`.
  - Top Badge: "RECOMMENDED" (`absolute -top-3 right-8 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider`).
  - Header: Plan Name "PRO", Price "$9.99", Period "one-time payment".
  - Feature List: Checkmark icons with text ("Unlimited AI caption generations", "Advanced hashtag & SEO suggestions", "Multi-platform output", "Priority support", "Early access to new features", "Commercial usage rights").
  - CTA Button: "Get PRO Access" (`w-full py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors shadow-md shadow-primary/20`).

---

### 4.6 Footer Specification
- **Styling**: `w-full bg-sidebar-background border-t border-border/50 py-16 px-6 lg:px-12 mt-24`.
- **4-Column Grid Structure**:
  1. **Brand Column**: PhotoFy Logo, bio snippet ("Professional photography portfolio and AI tools for visual storytellers."), social icon row (Instagram, Twitter, Unsplash, LinkedIn).
  2. **Navigation Column**: Header "Pages" (Portfolio, About, AI Caption Tool, Pricing, Contact).
  3. **Tools & Features Column**: Header "AI Tools" (Caption Generator, Hashtag Assistant, Storytelling Generator, SEO Keywords).
  4. **Legal & Contact Column**: Header "Contact" (Email contact address, support link, license policy).
- **Copyright Row**:
  - `pt-8 mt-12 border-t border-border/30 flex flex-col sm:flex-row items-center justify-between text-xs text-muted-foreground`.
  - Text: `© 2026 PhotoFy. All rights reserved.`

---

## 5. Animation & Transition Matrix

### 5.1 CSS Keyframes from `style.css`

```css
/* 1. Pulse Animation */
@keyframes pulse {
  50% {
    opacity: 0.5;
  }
}

/* 2. Spinner Rotation */
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

/* 3. Component Enter Animation */
@keyframes enter {
  0% {
    opacity: var(--tw-enter-opacity, 1);
    transform: translate3d(
      var(--tw-enter-translate-x, 0),
      var(--tw-enter-translate-y, 0),
      0
    ) scale3d(
      var(--tw-enter-scale, 1),
      var(--tw-enter-scale, 1),
      var(--tw-enter-scale, 1)
    ) rotate(var(--tw-enter-rotate, 0));
  }
}

/* 4. Component Exit Animation */
@keyframes exit {
  to {
    opacity: var(--tw-exit-opacity, 1);
    transform: translate3d(
      var(--tw-exit-translate-x, 0),
      var(--tw-exit-translate-y, 0),
      0
    ) scale3d(
      var(--tw-exit-scale, 1),
      var(--tw-exit-scale, 1),
      var(--tw-exit-scale, 1)
    ) rotate(var(--tw-exit-rotate, 0));
  }
}

/* 5. Accordion Expand */
@keyframes accordion-down {
  0% {
    height: 0;
  }
  to {
    height: var(--radix-accordion-content-height);
  }
}

/* 6. Accordion Collapse */
@keyframes accordion-up {
  0% {
    height: var(--radix-accordion-content-height);
  }
  to {
    height: 0;
  }
}
```

---

### 5.2 Transition Duration & Easing Curve Tokens

| Transition Token | Duration | Easing Function | Applied Components |
| :--- | :--- | :--- | :--- |
| `transition-all duration-150` | 150ms | `cubic-bezier(0.4, 0, 0.2, 1)` | Micro-clicks, active button press states |
| `transition-colors duration-200` | 200ms | `cubic-bezier(0.4, 0, 0.2, 1)` | Navigation links, hover color shifts, input outlines |
| `transition-all duration-300` | 300ms | `cubic-bezier(0.4, 0, 0.2, 1)` | Card hover lifts, modal popups, dropdown items |
| `transition-transform duration-500` | 500ms | `cubic-bezier(0.4, 0, 0.2, 1)` | Portfolio card image zoom on hover |
| `transition-transform duration-700` | 700ms | `cubic-bezier(0.4, 0, 0.2, 1)` | Editorial image zooms, background ambient glow shifts |
| `transition-duration: 1s` | 1000ms | `ease-in-out` | Smooth scroll reveal triggers, page load fades |

---

### 5.3 Interactive Hover States & Micro-Interactions

1. **Primary Button Hover**:
   - `hover:scale-[1.02] active:scale-[0.98]`
   - `hover:shadow-lg hover:shadow-primary/25`
   - Background brightness transition: `transition-all duration-200`
2. **Portfolio Card Hover**:
   - Image scale: `group-hover:scale-105 transition-transform duration-700 ease-out`
   - Gradient overlay fade: `opacity-0 group-hover:opacity-100 transition-opacity duration-300`
   - Container border highlight: `hover:border-primary/40`
3. **Filter Pill Hover**:
   - Non-active pills: `hover:text-foreground hover:bg-muted hover:border-primary/30 transition-all duration-200`
4. **Pricing Tier Lift**:
   - Card lift: `hover:-translate-y-1.5 transition-transform duration-300`
   - Glowing box shadow: `hover:shadow-2xl hover:shadow-primary/15`
5. **FAQ Accordion Trigger**:
   - Chevron icon rotation: `transition-transform duration-200 data-[state=open]:rotate-180`
   - Height expansion: `animate-accordion-down` / `animate-accordion-up`
