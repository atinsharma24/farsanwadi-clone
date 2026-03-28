# ShopByCategory Specification

## Overview
- **Target file:** `src/components/ShopByCategory.tsx`
- **Screenshot:** `docs/design-references/section-categories.png`
- **Interaction model:** static, click navigates

## DOM Structure
SectionHeader + horizontal row of 6 portrait category cards.

## Computed Styles

### Section Container
- padding: 40px 40px
- backgroundColor: #ffffff

### Category Card
- display: flex, flexDirection: column
- width: 202px
- border: 1px solid #e8e8e8
- borderRadius: 12px
- overflow: hidden
- cursor: pointer

#### Image
- width: 202px, height: 303px
- objectFit: cover (portrait ratio ~2:3)

#### Label Bar (at bottom of card)
- backgroundColor: #ffffff
- padding: 12px 8px
- textAlign: center
- fontFamily: Montserrat
- fontSize: 15px
- fontWeight: 700
- color: #1a1a1a

## Hover States
- box-shadow: 0 4px 12px rgba(0,0,0,0.1)
- transform: translateY(-2px)
- transition: 0.2s ease

## Categories Data (6 items)
1. "Khakhra" — `/images/categories/cat-1.png` — href: /product-category/khakhra/
2. "Healthy Chips" — `/images/categories/cat-2.png` — href: /product-category/healthy-chips/
3. "Bakarwadi" — `/images/categories/cat-3.png` — href: /product-category/bakarwadi/
4. "Namkeen" — `/images/categories/cat-4.png` — href: /shop/
5. "Wafer Bites" — `/images/categories/cat-5.png` — href: /product-category/waferbites/
6. "Mini Khakhras" — `/images/categories/cat-6.png` — href: /product-category/mini-khakhra/

## Responsive Behavior
- Desktop: 6 cards in a row (may overflow/scroll)
- Mobile: 2-3 cards visible, horizontally scrollable
