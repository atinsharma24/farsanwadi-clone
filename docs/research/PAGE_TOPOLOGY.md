# Page Topology — Farsanwadi Home Page

## Page Structure (top to bottom)

| # | Section Name | Component | Type | Notes |
|---|---|---|---|---|
| 1 | Announcement Bar | `TopBar` | Fixed/flow | Full-width green bar, "#00a50c", text about delivery/COD/veg |
| 2 | Header / Nav | `Header` | Flow | White, logo+nav+search, 125px height, borderBottom |
| 3 | Hero Carousel | `HeroCarousel` | Flow | 3 slides, auto-play 4s, arrows+dots |
| 4 | Benefits Section | `BenefitsSection` | Flow | Left: heading+benefits icons, Right: product image |
| 5 | Best Sellers | `BestSellers` | Flow | H2 48px, horizontally scrollable product cards |
| 6 | Trust Stats | `TrustStats` | Flow | Gray bg #e6e6e6, 4 stats with large numbers |
| 7 | Shop By Category | `ShopByCategory` | Flow | 6 portrait category cards |
| 8 | Healthy Choices | `HealthyChoices` | Flow | H2 48px, horizontally scrollable product cards |
| 9 | Shop By Occasion | `ShopByOccasion` | Flow | 6 portrait occasion cards |
| 10 | Testimonials | `Testimonials` | Flow | Centered carousel, fade transitions |
| 11 | Shop By Taste | `ShopByTaste` | Flow | 3 landscape taste cards with overlay labels |
| 12 | As Seen On | `AsSeenOn` | Flow | Centered heading + logo row (Amazon, Blinkit) |
| 13 | Footer | `Footer` | Flow | Green gradient, 4-col grid, copyright bar |

## Layout Details
- Page is standard vertical scroll
- No scroll snap
- No sticky elements (header is NOT sticky)
- No smooth scroll library
- Max page width: 1440px, full-bleed sections
- Body background: #fffcfc

## Z-Index Layers
- Header dropdown: z-50
- Page content: z-0

## Shared Components
- `SectionHeader` — used by BestSellers, HealthyChoices, ShopByCategory, ShopByOccasion, ShopByTaste
- `ProductCard` — used by BestSellers and HealthyChoices
