# SectionHeader + ProductRow Specification

## Overview
- **Target file:** `src/components/SectionHeader.tsx`, `src/components/ProductRow.tsx`
- **Screenshot:** `docs/design-references/section-bestsellers.png`, `docs/design-references/section-categories.png`
- **Interaction model:** static

## SectionHeader Component

Reusable component used in: Best Sellers, Healthy Choices, Shop By Category, Shop By Occasion, Shop By Taste

### DOM Structure
Row with section title left, "View All" button right.

### Computed Styles
- display: flex, justifyContent: space-between, alignItems: center
- marginBottom: 24px
- padding: 0 (parent handles padding)

#### Title
- fontFamily: Montserrat
- fontSize: 32px
- fontWeight: 800
- color: #1a1a1a
- tag: h2

#### "View All" Button
- border: 1.5px solid #e65100
- color: #e65100
- backgroundColor: transparent
- borderRadius: 4px
- padding: 8px 16px
- fontSize: 14px
- fontWeight: 600
- cursor: pointer
- Hover: backgroundColor: #e65100, color: #ffffff

## ProductRow Component

Horizontal scrollable row of product cards.

### Computed Styles
- display: flex
- gap: 16px
- overflowX: auto (or scroll)
- paddingBottom: 8px (for scrollbar space)
- scrollbarWidth: none (hide scrollbar)

## Best Sellers Section

### Container
- padding: 40px 40px
- maxWidth: 100%

### Products shown (4 visible, more on scroll)
From `docs/research/components/product-card.spec.md` sample data above.

## Healthy Choices Section

Same structure as Best Sellers but different products:
1. Salted & Methi Masala – Twin Pack — `/images/products/KHC400X009-11.jpg` — ₹289 → ₹275 — 0 reviews
2. Peri Peri Punch & Methi Masala – Twin Pack — `/images/products/KHC400X009-4.jpg` — ₹289 → ₹275 — 22 reviews
3. Gluten Free Khakhra – Twin Pack — `/images/products/KHP4003-1.jpg` — ₹349 → ₹325 — 0 reviews
4. Masala Khakhra — `/images/products/C008-1.jpg` — ₹149 → ₹145 — 15 reviews
