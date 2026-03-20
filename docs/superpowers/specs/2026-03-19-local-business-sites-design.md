# Design Spec: Local Business Website Building Pipeline

## Context

Build 10 unique spec websites for local businesses near Windsor/Hartford CT with poor existing web presence. Deploy to free hosting and demo in-person to sell web development services. Each site must be visually distinctive and production-grade — no generic AI aesthetics.

---

## Architecture: Independent Apps with Copy-Once Scaffold

Each business gets its own standalone React 18 + Vite 5 app. A `_scaffold/` directory provides copy-once boilerplate. Once copied, each site owns all its code and can diverge completely.

### Project Structure

```
local-website-building/
├── _scaffold/                    # Copy-once starter (NOT a shared runtime)
│   ├── package.json              # React 18.3.1 + Vite 5.4.8
│   ├── vite.config.js            # Minimal: @vitejs/plugin-react only
│   ├── index.html                # Template with placeholder meta tags + Google Fonts
│   └── src/
│       ├── main.jsx              # React 18 createRoot entry
│       ├── App.jsx               # Shell: Navbar → sections → Footer
│       ├── components/
│       │   ├── Navbar.jsx        # Responsive nav with mobile hamburger
│       │   ├── Hero.jsx          # Full-width hero with CTA
│       │   ├── Services.jsx      # Grid/list of services or menu items
│       │   ├── About.jsx         # About section
│       │   ├── Contact.jsx       # Hours + address + phone + Google Maps embed
│       │   └── Footer.jsx        # Social links, copyright, address
│       ├── base.css              # CSS reset + responsive utilities only
│       └── theme.css             # CSS variables (colors, fonts, spacing)
├── businesses/                   # Scraped data + design briefs
│   ├── family-pizzeria.json
│   ├── buckland-cleaners.json
│   ├── village-pizza.json
│   ├── scruples-salon.json
│   ├── south-windsor-barber.json
│   ├── bocasa-beauty-spa.json
│   ├── windsor-pizza.json
│   ├── skyline-restaurant.json
│   ├── joe-the-plumber.json
│   └── day-hill-automotive.json
├── sites/                        # 10 independent Vite apps
│   ├── family-pizzeria/
│   ├── buckland-cleaners/
│   ├── village-pizza/
│   ├── scruples-salon/
│   ├── south-windsor-barber/
│   ├── bocasa-beauty-spa/
│   ├── windsor-pizza/
│   ├── skyline-restaurant/
│   ├── joe-the-plumber/
│   └── day-hill-automotive/
└── docs/
```

### Scaffold Copy Procedure

To create a new site from the scaffold:

```bash
# 1. Copy scaffold into sites/
cp -r _scaffold/ sites/{slug}/

# 2. Update package.json name
cd sites/{slug}
sed -i 's/"name": "scaffold"/"name": "{slug}"/' package.json

# 3. Update index.html title and meta
# (Agent replaces placeholders: %TITLE%, %DESCRIPTION%, %FONTS_URL%)

# 4. Copy business data into the site
cp ../../businesses/{slug}.json src/data.json

# 5. Install dependencies
npm install
```

### Data Injection

Each site imports its business data as a static JSON file at build time:

```jsx
// src/App.jsx
import data from './data.json';
// data.name, data.phone, data.services, etc. available to all components
```

The `businesses/{slug}.json` file is copied into each site's `src/data.json` during scaffold setup. Components receive data as props from `App.jsx`, which reads from this import.

### Why Independent Apps (Not Monorepo)

- Each site deploys separately to its own Vercel project
- Unique designs per business — shared runtime components push toward sameness
- Copy-then-customize gives a 5-minute head start without constraining creative freedom
- No npm workspace complexity for what are 10 simple static sites

### Theming via CSS Variables

Each site defines its own `:root` variables in `theme.css`. Scaffold components reference these variables, so reskinning is instant:

```css
:root {
  --bg: #1C1108;
  --bg-light: #2D1F12;
  --text: #FFF8F0;
  --text-muted: #B89A7A;
  --accent: #E85D26;
  --accent-hover: #FF7A42;
  --surface: #3A2816;
  --border: #5C3D1E;
  --font-display: 'Playfair Display', serif;
  --font-body: 'Inter', sans-serif;
  --nav-height: 72px;
  --section-padding: 5rem 1.5rem;
  --max-width: 1200px;
  --radius: 8px;
}
```

---

## Feature Set (Per Site)

Every site includes this essential pack:

- **Responsive Navbar** — logo/name + nav links, mobile hamburger menu
- **Hero Section** — full-width, above-the-fold, business name + tagline + CTA
- **Services/Menu Section** — grid or list of what the business offers
- **About Section** — brief business description
- **Contact Section** — hours, address, phone, Google Maps embed
- **Footer** — social links, copyright, address repeat

No online ordering, no booking forms, no blog — keep scope tight for demos.

### Scaffold Component Contracts

Each scaffold component accepts props from `App.jsx` (which reads `data.json`):

**Navbar** `({ name, links })`
- `name`: string — business name displayed as logo text
- `links`: array of `{ label, href }` — section anchor links (e.g., `#services`, `#contact`)
- Behavior: Fixed top, CSS-only hamburger toggle on mobile (checkbox hack, no JS state). Smooth-scroll via `scroll-behavior: smooth` on `html`. References `--nav-height`, `--bg`, `--text`, `--accent`.

**Hero** `({ name, tagline, ctaText, ctaHref })`
- Full-viewport-height section with centered text
- `ctaText`/`ctaHref`: primary CTA button (e.g., "View Menu" → `#services`, "Call Now" → `tel:...`)
- References `--bg`, `--text`, `--accent`, `--font-display`, `--font-body`

**Services** `({ services, type })`
- `services`: array from `data.services` (categories with items)
- `type`: `"menu"` (shows prices) or `"list"` (no prices)
- Renders as responsive grid: `grid-template-columns: repeat(auto-fill, minmax(280px, 1fr))`
- References `--surface`, `--border`, `--text`, `--text-muted`

**About** `({ about, features })`
- `about`: string — paragraph text
- `features`: array of strings — rendered as pill/tag badges
- Simple centered text block with feature badges below

**Contact** `({ phone, address, hours, email, googleMapsEmbedQuery })`
- Two-column layout: left = hours + address + phone, right = Google Maps iframe
- Maps iframe uses `loading="lazy"` to preserve Lighthouse performance
- `tel:` link on phone, `mailto:` on email
- References `--surface`, `--text`, `--accent`

**Footer** `({ name, socialLinks, address })`
- Social icons (SVG) linked to non-null socialLinks entries
- Address and copyright line
- References `--bg`, `--text-muted`, `--border`

### Image & Asset Strategy

Sites are CSS-driven with no photo dependencies:
- **Hero backgrounds**: CSS gradients, patterns, or subtle SVG textures (no stock photos)
- **Icons**: Inline SVG for social links and feature badges
- **Logos**: Text-based (business name in display font) — no image logos needed
- **No stock photos**: Avoids licensing issues and keeps bundles tiny

If a business has real photos on their existing site or Google Business profile, they can be added as an enhancement after the initial build.

---

## Content Pipeline

### Data Schema (`businesses/{slug}.json`)

```json
{
  "slug": "family-pizzeria",
  "name": "Family Pizzeria",
  "tagline": "Windsor's Favorite Pizza Since 1985",
  "type": "restaurant",
  "address": {
    "street": "181 Broad St",
    "city": "Windsor",
    "state": "CT",
    "zip": "06095"
  },
  "phone": "(860) 555-1234",
  "email": null,
  "website": "familypizzawindsorct.com",
  "hours": [
    { "days": "Mon-Thu", "open": "11:00 AM", "close": "9:00 PM" },
    { "days": "Fri-Sat", "open": "11:00 AM", "close": "10:00 PM" },
    { "days": "Sun", "open": "12:00 PM", "close": "9:00 PM" }
  ],
  "services": [
    {
      "category": "Pizza",
      "items": [
        { "name": "Cheese Pizza", "description": "House-made sauce, fresh mozzarella", "price": "$12.99" }
      ]
    }
  ],
  "socialLinks": {
    "facebook": null,
    "instagram": null,
    "yelp": null,
    "google": null
  },
  "googleMapsEmbedQuery": "Family+Pizzeria+181+Broad+St+Windsor+CT",
  "about": "Family-owned Italian restaurant serving Windsor since 1985...",
  "features": ["Dine-in", "Takeout", "Delivery"],
  "designBrief": { "..." }
}
```

### Scraping Strategy

- Use WebFetch to pull content from each business's existing website
- Scrape all 10 in one batch before building anything

**Fallback order** when primary site is thin or inaccessible:
1. Business's existing website
2. Google Maps / Google Business Profile
3. Yelp listing
4. Facebook page
5. Manual entry (last resort — mark fields as needing verification)

**Known scraping risks:**
- Village Pizza (villagepizzaofwindsorlocks.com) — JS-rendered SPA, may return empty HTML. Fall back to Google/Yelp.
- Bocasa Beauty Spa — bloated page, may timeout. Try Yelp first.

**Data completeness checklist** (must pass before building a site):

| Field | Required? | Minimum |
|-------|-----------|---------|
| `name` | REQUIRED | — |
| `address` | REQUIRED | Full street address |
| `phone` | REQUIRED | — |
| `hours` | REQUIRED | At least weekday + weekend |
| `services` | REQUIRED | At least 3 items |
| `about` | REQUIRED | At least 2 sentences |
| `tagline` | Optional | Can be generated from context |
| `socialLinks` | Optional | At least 1 if available |
| `email` | Optional | — |
| `features` | Optional | — |

---

## Design Brief System

Each business JSON contains a `designBrief` that drives the frontend-design skill to produce unique results:

```json
{
  "designBrief": {
    "industry": "Italian Restaurant / Pizza",
    "mood": "warm, family, rustic-modern",
    "colorDirection": "deep reds, warm amber, cream, charcoal",
    "inspiration": "Artisan pizzeria feel. Woodfire, brick textures. Bold menu presentation.",
    "avoidance": "No generic pizza clip art. No red-white-green Italian flag cliche. Must not reuse fonts from other sites in this project.",
    "heroStyle": "Full-bleed dark background, oversized display type, warm accent CTAs",
    "uniqueElement": "Animated pizza-making timeline or ingredient spotlight"
  }
}
```

### Design Brief Fields

| Field | Purpose |
|-------|---------|
| `industry` | Grounds the aesthetic in the right domain |
| `mood` | 2-4 emotional adjectives setting the tone |
| `colorDirection` | Palette guidance (descriptive, not hex codes) |
| `inspiration` | 1-2 sentences of aspirational vibe |
| `avoidance` | What NOT to do — prevents generic output |
| `heroStyle` | How the above-the-fold should feel |
| `uniqueElement` | One distinctive feature that makes this site memorable |

### Font Strategy

Fonts are NOT pre-assigned. The frontend-design skill selects fonts based on mood, industry, and inspiration. The only constraint: each brief includes "must not reuse fonts from other sites in this project" in the `avoidance` field, with a list of fonts already used by completed sites.

### Pizza Site Differentiation

Three of the 10 businesses are pizza shops. Each must feel completely distinct:

- **Family Pizzeria**: warm, family-oriented, rustic-Italian. Think brick oven, amber tones, serif display fonts.
- **Village Pizza**: modern minimalist, light palette, clean lines. Counter-service casual, not sit-down Italian.
- **Windsor Pizza**: bold street-food energy, dark palette, condensed sans-serif. Urban, late-night, delivery-focused.

### Frontend-Design Skill Integration

The `frontend-design` skill is a Claude Code plugin (already installed) that guides creation of distinctive, production-grade frontends. When building each site, the agent:

1. Reads the business's `designBrief` from its JSON file
2. Invokes the frontend-design skill, which directs bold aesthetic choices: distinctive typography, cohesive color palettes, intentional spatial composition, and contextual motion/animation
3. The skill ensures each site avoids generic AI aesthetics (no Inter/Roboto defaults, no purple-gradient-on-white cliches, no cookie-cutter layouts)
4. Output: complete working React+Vite code with custom CSS that matches the design brief

**Inputs to the skill:** business type, mood, color direction, inspiration, avoidance list, hero style, unique element.
**Output from the skill:** fully themed `theme.css`, customized component markup, any CSS animations, and a distinctive visual identity.

---

## Build Order & Parallelization

### Phase 0: Foundation (Sequential, One-Time)

1. Create `_scaffold/` directory with template components
2. Write `base.css` with reset + responsive utilities
3. Test scaffold builds and runs locally

### Phase 1: Content Scraping (Batch)

1. WebFetch all 10 business websites
2. Store as `businesses/*.json`
3. Write design briefs per business
4. Verify data completeness

### Phase 2: Tier 1 Build (4 Sites, 4 Parallel Agents)

All 4 sites build simultaneously:
- Family Pizzeria (restaurant, menu-heavy)
- Buckland Cleaners (service business, minimal content)
- Village Pizza (restaurant, different vibe from Family)
- Scruples Salon (spa, gallery-focused)

Each agent: copies scaffold → reads business JSON → applies frontend-design skill → customizes → builds → verifies.

### Phase 3: Tier 2 Build (3 Sites, 3 Parallel Agents)

- South Windsor Barber Shop
- Bocasa Beauty Spa
- Windsor Pizza (must look completely different from other two pizza sites)

### Phase 4: Tier 3 Build (3 Sites, 3 Parallel Agents)

- Skyline Restaurant & Banquet
- Joe the Plumber
- Day Hill Automotive

---

## Deployment

### Platform: Vercel Free Tier (Hobby Plan)

- Auto-detects Vite, zero build config
- Clean preview URLs
- Unlimited projects on free tier

**Limitation:** Vercel Hobby is for personal/non-commercial use. These demo sites are fine on Hobby, but if a client buys, their production site should move to Vercel Pro or alternative hosting (Netlify, Cloudflare Pages). Factor this into pricing conversations.

### Setup

- Single git repo: `zzeppieri/local-biz-sites` on GitHub
- One Vercel project per site, each with Root Directory = `sites/{slug}`
- Build command: `npm run build`
- Output directory: `dist`

### Naming Convention

- Vercel project: `{slug}` (e.g., `family-pizzeria`)
- Preview URL: `{slug}.vercel.app`

---

## Quality Verification (Per Site)

### Automated

1. `npm run build` exits 0 with no warnings
2. Lighthouse audit: 90+ on Performance (Maps iframe may lower this — acceptable if rest of page is fast), Accessibility, Best Practices, SEO

### Manual

3. Mobile responsive at 375px, 768px, 1440px
4. Content accuracy — cross-reference every piece of text against real business info
5. Google Maps embed loads correct location
6. All links work (social, tel:, mailto:)
7. Visual distinctiveness — no two sites should feel similar
8. No placeholder content (search for "Lorem", "TODO", "placeholder")
9. Hero section loads immediately, no layout shift
10. Contact info findable within 1 scroll

---

## 10 Target Businesses

### Tier 1 (Score 3/10 — Build First)

| # | Business | Type | Location | Current Site Issue |
|---|----------|------|----------|--------------------|
| 1 | Family Pizzeria | Pizza/Italian | Windsor CT | Weebly template, 2010s look |
| 2 | Buckland Cleaners & Tailors | Dry Cleaning | South Windsor CT | Google Sites, bare-bones |
| 3 | Village Pizza | Pizza | Windsor Locks CT | Broken Slice template, exposed API keys |
| 4 | Scruples Salon & Day Spa | Salon/Spa | Enfield CT | 2010s cluttered layout |

### Tier 2 (Score 4-5/10)

| # | Business | Type | Location | Current Site Issue |
|---|----------|------|----------|--------------------|
| 5 | South Windsor Barber Shop | Barber | South Windsor CT | Dated WordPress, no gallery |
| 6 | Bocasa Beauty Spa | Nail/Beauty | Windsor Locks CT | Bloated CSS, clunky mobile |
| 7 | Windsor Pizza | Pizza | Windsor CT | Generic Slice template |

### Tier 3 (Score 5.5-6/10)

| # | Business | Type | Location | Current Site Issue |
|---|----------|------|----------|--------------------|
| 8 | Skyline Restaurant & Banquet | Italian/Steakhouse | Windsor Locks CT | WordPress/Avada, uninspired |
| 9 | Joe the Plumber | Plumbing | South Windsor CT | Dated aesthetic, plugin bloat |
| 10 | Day Hill Automotive | Auto Repair | Windsor CT | Older Bootstrap, generic |

---

## SEO Meta Tags (Per Site)

Each site's `index.html` includes these meta tags, mapped from business JSON:

```html
<title>{name} — {tagline}</title>
<meta name="description" content="{about} (first 160 chars)">
<meta property="og:title" content="{name}">
<meta property="og:description" content="{tagline}">
<meta property="og:type" content="website">
<meta property="og:url" content="https://{slug}.vercel.app">
<link rel="canonical" href="https://{slug}.vercel.app">
```

No `og:image` needed for CSS-driven sites (can be added later with screenshots).

---

## Critical Files

- `/home/deck/projects/local-website-building/PLAN.md` — Existing high-level plan
- `/home/deck/projects/zach-website/package.json` — Exact dependency versions to match
- `/home/deck/projects/zach-website/vite.config.js` — Minimal Vite config to replicate
- `/home/deck/projects/zach-website/src/index.css` — CSS variable pattern reference
- `/home/deck/projects/zach-website/index.html` — HTML structure + Google Fonts loading pattern
