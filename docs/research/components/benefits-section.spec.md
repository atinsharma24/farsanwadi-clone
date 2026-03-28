# BenefitsSection Specification

## Overview
- **Target file:** `src/components/BenefitsSection.tsx`
- **Screenshot:** `docs/design-references/section-benefits.png`
- **Interaction model:** static

## DOM Structure
Two-column layout:
- Left (~55% width): Heading + subtitle + 5 benefit icons in a row
- Right (~45% width): Single promotional image with rounded corners

## Computed Styles

### Section Container
- backgroundColor: #ffffff (or very slightly off-white)
- padding: 48px 40px
- display: flex, align-items: center
- gap: 40px
- maxWidth: 1400px, margin: 0 auto

### Left Column
- flex: 1

#### Heading
- text: "Guilt-Free Snacking Starts Here"
- tag: h3
- fontFamily: Montserrat
- fontSize: 36px (desktop)
- fontWeight: 800
- color: #1a1a1a (near black)
- marginBottom: 8px

#### Subtitle
- text: "Healthy snacks with traditional taste and modern nutrition."
- fontFamily: Poppins
- fontSize: 16px
- color: #666666
- fontWeight: 400
- marginBottom: 32px

#### Benefits Row
- display: flex, gap: 24px, flexWrap: wrap
- 5 benefit items, each:
  - display: flex, flexDirection: column, alignItems: center
  - textAlign: center
  - width: ~100-110px

#### Benefit Icon
- Image: 74x74px
- marginBottom: 8px

#### Benefit Label
- fontFamily: Poppins
- fontSize: 14px
- fontWeight: 600
- color: #1a1a1a
- textAlign: center
- lineHeight: 1.3

### Right Column
- Width: ~380px
- Flex-shrink: 0

#### Promo Image
- Image: `/images/products/KHK-10.jpg` (or find the family snacking image)
- Actually this image shows: "Perfect for Family Snacking / Loved by All Ages / MADE WITH WHOLE WHEAT" text with family eating
- borderRadius: 16px
- width: 100%
- height: ~380px
- objectFit: cover

## Benefits Data (5 items)
1. Icon: `/images/icon-delivery.svg` — "Ships in\n1-2 Days"
2. Icon: `/images/icon-air-quality.svg` — "100%\nVeg"
3. Icon: `/images/icon-no-preservatives.png` — "Fresh &\nCrunchy"
4. Icon: `/images/icon-buy.svg` — "COD\nAvailable"
5. Icon: `/images/icon-india.svg` — "Loved\nby india"

## Assets
- `/images/icon-delivery.svg`
- `/images/icon-air-quality.svg`
- `/images/icon-no-preservatives.png`
- `/images/icon-buy.svg`
- `/images/icon-india.svg`
- `/images/products/KHK-10.jpg` (right side image — the family snacking image)

Note: The right-side image in the actual site shows a Khakhra/snack product with family, with text overlay "Perfect for Family Snacking / Loved by All Ages / MADE WITH WHOLE WHEAT". Use the KHK-10.jpg product image for now.

## Responsive Behavior
- Desktop: Two-column layout
- Mobile: Single column, image below benefits
