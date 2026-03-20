# Plan: Local Business Website Prospecting & Build Pipeline

## Context

You want to create a freelance/agency pipeline: find local businesses near Hyatt Hartford/Windsor CT with poor websites, build modern React+Vite replacements using their existing content, then demo in-person to sell. This plan covers the 10 target businesses identified through research, and the system for building spec sites with parallel agents.

---

## 10 Target Businesses (Ranked by Website Quality — Worst First)

### Tier 1: Terrible Websites (Score 3/10) — Best Prospects

| # | Business | Type | Location | Current Website | Issues |
|---|----------|------|----------|-----------------|--------|
| 1 | **Family Pizzeria** | Pizza/Italian | 181 Broad St, Windsor CT | familypizzawindsorct.com | Weebly template, early-2010s look, poor visual hierarchy, stock photos, no personality |
| 2 | **Buckland Cleaners & Tailors** | Dry Cleaning | 465 Buckland Rd, South Windsor CT | bucklandcleanerstailors.com | Google Sites template, bare-bones content, no branding, no pricing, no booking |
| 3 | **Village Pizza** | Pizza | 23 Ella Grasso Tpke, Windsor Locks CT | villagepizzaofwindsorlocks.com | Bloated legacy React, exposed API keys, no responsive design, massive JSON payloads |
| 4 | **Scruples Salon & Day Spa** | Salon/Spa | 325 Hazard Ave, Enfield CT (serves Windsor Locks) | scruplesdayspa.com | 2010s-era design, cluttered layout, spammy SEO footer, poor info hierarchy |

### Tier 2: Below Average (Score 4-5/10) — Good Prospects

| # | Business | Type | Location | Current Website | Issues |
|---|----------|------|----------|-----------------|--------|
| 5 | **South Windsor Barber Shop** | Barber | 22 Morgan Farms Dr, South Windsor CT | southwindsorbarbershopct.com | Dated WordPress template, unfinished content, no gallery, no booking |
| 6 | **Bocasa Beauty Spa** | Nail/Beauty Spa | 1 Concorde Way, Windsor Locks CT | windsorlocksnailsalon.com | Bloated CSS, dated styling, clunky mobile, messy code |
| 7 | **Windsor Pizza** | Pizza | 396 Windsor Ave, Windsor CT | windsorpizzeria.com | Generic Slice template, text-heavy, no food photography, indistinguishable from competitors |

### Tier 3: Mediocre (Score 5.5-6/10) — Harder Sell But Viable

| # | Business | Type | Location | Current Website | Issues |
|---|----------|------|----------|-----------------|--------|
| 8 | **Skyline Restaurant & Banquet** | Italian/Steakhouse | 106 Ella Grasso Tpke, Windsor Locks CT | skylinerestaurantct.com | WordPress/Avada theme, uninspired design, code bloat, lacks polish |
| 9 | **Joe the Plumber** | Plumbing | 350 Chapel Rd, South Windsor CT | calljoetheplumber.com | Dated visual aesthetic, navigation confusion, plugin bloat, uninspired |
| 10 | **Day Hill Automotive** | Auto Repair | 701 Day Hill Rd, Windsor CT | dayhillauto.com | Older Bootstrap framework, generic stock imagery, dated font loading |

---

## Implementation Plan: Parallel Agent Website Builds

### Project Structure

```
/home/deck/projects/local-website-building/
├── shared/                    # Shared React+Vite template & components
│   ├── package.json
│   ├── vite.config.js
│   ├── src/
│   │   ├── components/        # Reusable: Navbar, Footer, Hero, ContactForm, Map, Gallery, Reviews
│   │   ├── styles/            # Base CSS, variables, responsive utilities
│   │   └── utils/             # SEO helpers, image optimization
│   └── template/              # Starter files to copy per business
├── family-pizzeria/           # Each business gets its own React+Vite app
├── buckland-cleaners/
├── village-pizza/
├── scruples-salon/
├── south-windsor-barber/
├── bocasa-beauty-spa/
├── windsor-pizza/
├── skyline-restaurant/
├── joe-the-plumber/
└── day-hill-automotive/
```

### Step 1: Create Shared Template (do first, before agents)

Build a reusable React+Vite starter with:
- **Tech:** React 18 + Vite 5 (matches your zach-website stack)
- **Shared components:** Responsive Navbar, Hero section, Services grid, Contact form, Google Maps embed, Photo gallery, Footer
- **Styling:** CSS modules or vanilla CSS, mobile-first responsive, modern typography (Google Fonts)
- **Features:** SEO meta tags, Open Graph, structured data (LocalBusiness schema), fast Lighthouse scores

### Step 2: Scrape Existing Content Per Business

For each business, use WebFetch to pull:
- Business name, address, phone, hours
- Services/menu items
- Any photos or branding (colors, logos)
- Reviews/testimonials from Yelp/Google
- Social media links

Save scraped data as a JSON file per business (e.g., `family-pizzeria/data.json`).

### Step 3: Dispatch Parallel Agents (up to 3-5 at a time)

Each agent gets:
- The shared template to copy
- The business's scraped data JSON
- Business-specific design brief (e.g., "Italian restaurant — warm colors, menu focus" vs. "auto shop — trust signals, blue/grey, reviews")
- Instructions to customize the template into a complete site

### Step 4: Review & Polish

Use the code-reviewer agent on each completed site. Then manually review for:
- Mobile responsiveness
- Lighthouse performance score
- Content accuracy
- Visual appeal for the demo

### Step 5: Demo Preparation

- Run each site locally with `npm run dev` for in-person demos
- Or deploy to Vercel/Netlify free tier for shareable preview URLs

---

## Verification

1. `npm run build` passes for each site with no errors
2. `npm run preview` shows a functional, responsive site
3. Lighthouse audit scores 90+ on Performance, Accessibility, SEO
4. Each site has accurate business info pulled from their current web presence

---

## Recommended Starting Order

Start with **Tier 1** (worst websites = easiest sell):
1. Family Pizzeria — clear upgrade from Weebly
2. Buckland Cleaners — clear upgrade from Google Sites
3. Village Pizza — clear upgrade from broken Slice template
4. Scruples Salon — clear upgrade from 2010s clutter
