# ShopByTaste Specification

## Overview
- **Target file:** `src/components/ShopByTaste.tsx`
- **Screenshot:** `docs/design-references/section-taste.png`
- **Interaction model:** static, click navigates

## DOM Structure
SectionHeader + 3 landscape taste cards in a row.
Similar to ShopByCategory but only 3 items, potentially wider cards.

## Computed Styles

### Section Container
- backgroundColor: #ffffff
- padding: 40px 40px

### Cards Row
- display: flex
- gap: 16px
- justifyContent: center (or stretch)

### Taste Card
- flex: 1
- borderRadius: 12px
- overflow: hidden
- cursor: pointer
- position: relative
- height: 250px (landscape)

### Card Image
- width: 100%
- height: 100%
- objectFit: cover

### Card Label (overlay at bottom)
- position: absolute
- bottom: 0, left: 0, right: 0
- backgroundColor: rgba(0,0,0,0.5) or a colored overlay
- padding: 12px 16px
- fontFamily: Montserrat
- fontSize: 18px
- fontWeight: 700
- color: #ffffff
- textAlign: center

## Hover States
- transform: scale(1.02)
- transition: 0.2s ease

## Tastes Data (3 items)
1. "Spicy & Tangy" — `/images/taste/taste-13.png` — href: /shop/?taste=spicy-tangy
2. "Mild & Classic" — `/images/taste/taste-14.png` — href: /shop/?taste=mild-classic
3. "Bold & Flavorful" — `/images/taste/taste-15.png` — href: /shop/?taste=bold-flavorful

## Section Title: "Shop By Taste" (same SectionHeader component)
## View All href: /product-attribute/flavour-theme/*

## Responsive Behavior
- Desktop: 3 cards in a row
- Mobile: stacked vertically, each card full width
