# ProductCard Specification

## Overview
- **Target file:** `src/components/ProductCard.tsx`
- **Screenshot:** `docs/design-references/section-bestsellers.png`
- **Interaction model:** static card, click navigates to product page

## DOM Structure
Vertical card with:
1. Product image (square, fills top)
2. Product name (bold)
3. Star rating + review count
4. Price row (original strikethrough + sale price)
5. "ADD TO CART" button (full width, at bottom)

## Computed Styles

### Card Container
- backgroundColor: #ffffff
- border: 1px solid #e8e8e8
- borderRadius: 14px 14px 14px 14px (top rounded)
- overflow: hidden
- display: flex, flexDirection: column
- width: 322px (standard), or ~402px for featured
- cursor: pointer

### Product Image
- width: 100%
- height: 322px (same as width, square)
- objectFit: cover
- display: block

### Card Body (below image)
- padding: 12px 16px

### Product Name
- fontFamily: Montserrat (or Poppins bold)
- fontSize: 15px
- fontWeight: 700
- color: #1a1a1a
- marginBottom: 6px
- lineHeight: 1.3
- display: -webkit-box, -webkit-line-clamp: 2

### Star Rating
- Yellow stars (★★★★☆ format), color: #f5a623
- fontSize: 14px
- Review count: color: #888888, fontSize: 13px, fontWeight: 400
- display: flex, alignItems: center, gap: 6px
- marginBottom: 8px

### Price Row
- display: flex, alignItems: center, gap: 8px
- marginBottom: 12px

#### Original Price (strikethrough)
- color: #ff0000
- fontFamily: Montserrat
- fontSize: 16px
- fontWeight: 800
- textDecoration: line-through
- Text: ₹{originalPrice}

#### Sale Price
- color: #1a1a1a (dark, not red)
- fontFamily: Montserrat
- fontSize: 18px
- fontWeight: 800
- Text: ₹{salePrice}

### ADD TO CART Button
- backgroundColor: #0b8f3a
- color: #ffffff
- width: 100% (full card width)
- padding: 14px 0
- fontFamily: Poppins
- fontSize: 14px
- fontWeight: 700
- letterSpacing: 0.5px
- text: "ADD TO CART"
- textTransform: uppercase
- border: none
- borderRadius: 0px 0px 14px 14px (bottom-rounded only)
- cursor: pointer

## Hover States
- Card: box-shadow: 0 4px 16px rgba(0,0,0,0.12)
- Button: backgroundColor: #097a31 (slightly darker green)
- Transition: 0.2s ease

## TypeScript Props Interface
```typescript
interface ProductCardProps {
  name: string;
  image: string;
  originalPrice: number;
  salePrice: number;
  rating: number;
  reviewCount: number;
  href?: string;
}
```

## Sample Data (Best Sellers)
```typescript
const bestSellers = [
  { name: "Desi Chatpata Methi Trio", image: "/images/products/KHK-10.jpg", originalPrice: 499, salePrice: 449, rating: 4.5, reviewCount: 0 },
  { name: "Plain Bliss & Methi Masala – Twin Pack", image: "/images/products/FRSNKHKCOMBO301-1.jpg", originalPrice: 289, salePrice: 275, rating: 4.5, reviewCount: 0 },
  { name: "Bullet Spicy Khakhra – Twin Pack", image: "/images/products/KHC400X009-10.jpg", originalPrice: 349, salePrice: 325, rating: 3.5, reviewCount: 0 },
  { name: "Peri Peri Punch Khakhra – Twin Pack", image: "/images/products/KHP4001-1.jpg", originalPrice: 289, salePrice: 275, rating: 3.5, reviewCount: 7 },
  { name: "Mini Khakhra Discovery Pack – Assorted 4 Flavours", image: "/images/products/MKFP001-1.jpg", originalPrice: 199, salePrice: 169, rating: 4.5, reviewCount: 98 },
  { name: "Millet Moong Crunch Duo", image: "/images/products/NAMCOMBO304-1.jpg", originalPrice: 600, salePrice: 525, rating: 4, reviewCount: 100 },
];
```
