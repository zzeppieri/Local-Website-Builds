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
- Supplement thin sites (Buckland Cleaners) with Google Maps listings, Yelp, Facebook
- Scrape all 10 in one batch before building anything
- Verify data completeness before committing design time

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
2. Lighthouse audit: 90+ on Performance, Accessibility, Best Practices, SEO

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

## Critical Files

- `/home/deck/projects/local-website-building/PLAN.md` — Existing high-level plan
- `/home/deck/projects/zach-website/package.json` — Exact dependency versions to match
- `/home/deck/projects/zach-website/vite.config.js` — Minimal Vite config to replicate
- `/home/deck/projects/zach-website/src/index.css` — CSS variable pattern reference
- `/home/deck/projects/zach-website/index.html` — HTML structure + Google Fonts loading pattern
