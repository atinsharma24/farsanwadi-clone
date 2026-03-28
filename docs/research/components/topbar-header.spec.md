# TopBar + Header Specification

## Overview
- **Target files:** `src/components/TopBar.tsx`, `src/components/Header.tsx`
- **Screenshot:** `docs/design-references/section-hero.png`
- **Interaction model:** static (header is not sticky/transparent on this site)

## TopBar Component

### DOM Structure
Full-width green bar at very top of page, single centered text row.

### Computed Styles
- display: flex, justify-content: center, align-items: center
- backgroundColor: #00a50c
- color: #ffffff
- fontSize: 14px
- fontFamily: Poppins
- fontWeight: 400
- height: 44px
- width: 100%
- padding: 0 20px

### Text Content (verbatim)
"🚚 Pan India Delivery  💳 COD Available  🌿 100% Veg"
(emoji + text, separated by gaps)

---

## Header Component

### DOM Structure
White header with 3 zones:
1. Left: Logo image
2. Center: Nav links (single row)
3. Right: Account icon + Search input + submit button

### Computed Styles

#### Container
- backgroundColor: #ffffff
- padding: 16px 40px
- display: flex, align-items: center, justify-content: space-between
- borderBottom: 1px solid #e5e5e5
- width: 100%

#### Logo
- Image: `/images/logo.png` (203x60px)
- Width: ~160px displayed

#### Nav
- Links in a single horizontal row: Home | Shop ▼ | About Us | Contact Us | My Account
- fontFamily: Poppins
- fontSize: 14px (nav links)
- fontWeight: 500
- color: #444444
- Active link (Home): has orange underline/indicator
  - border-bottom: 2px solid #e65100 or color: #e65100
- Hover: color: #e65100
- Gap between links: 8-12px
- padding per link: 10px 20px
- "Shop" has a dropdown arrow (▼ chevron icon)
- Nav is centered in the header

#### Right Zone
- Account icon: circular person/user icon, color #444444, 36px
- Search container:
  - Input: placeholder "Search your favorite snacks", 280px wide, border: 1px solid #ddd, border-radius: 4px 0 0 4px, padding: 10px 16px, fontSize: 14px
  - Submit button: backgroundColor: #e65100, color: white, border-radius: 0 4px 4px 0, padding: 10px 14px, cursor: pointer
  - Arrow/search icon inside submit button (→ or magnifying glass)

### Dropdown (Shop submenu)
When "Shop" is hovered/clicked, shows dropdown:
- All Products → /shop/
- Khakhras → /product-category/khakhra/
- Healthy Chips → /product-category/healthy-chips/
- Bakarwadi → /product-category/bakarwadi/
- Wafer Bites → /product-category/waferbites/
- Mini Khakhra → /product-category/mini-khakhra/

Dropdown style: white bg, box-shadow, border-radius, positioned absolute below nav.

### Hover states
- Nav links: color transitions to #e65100
- Search button: slight darkening on hover

## Responsive Behavior
- Desktop (1440px): Full layout as described
- Mobile (390px): Hamburger menu, logo centered, search hidden or collapsed

## Text Content
Nav: Home, Shop, About Us, Contact Us, My Account
Search placeholder: "Search your favorite snacks"
