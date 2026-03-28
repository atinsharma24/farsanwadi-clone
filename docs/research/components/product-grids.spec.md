# BestSellers + HealthyChoices Grid Specification

## Overview
- **Target files:** `src/components/BestSellers.tsx`, `src/components/HealthyChoices.tsx`
- **Screenshot:** `docs/design-references/section-bestsellers.png`
- **Interaction model:** horizontally scrollable row of product cards

## DOM Structure
SectionHeader + horizontally scrollable row of ProductCard components.
Both sections share the same layout pattern but have different products.

## Layout

### Section Container
- padding: 40px 40px
- backgroundColor: #ffffff

### Products Row
- display: flex
- gap: 16px
- overflowX: auto
- scrollbarWidth: none (hidden scrollbar: &::-webkit-scrollbar { display: none })
- paddingBottom: 4px
- WebkitOverflowScrolling: touch

Each card is ~280-320px wide and doesn't shrink (flex-shrink: 0).

## Best Sellers Data

```typescript
const bestSellers = [
  { name: "Mini Khakhra Discovery Pack – Assorted 4 Flavours", image: "/images/products/MKFP001-1.jpg", originalPrice: 199, salePrice: 169, rating: 4.3, reviewCount: 98, href: "#" },
  { name: "Millet Moong Crunch Duo", image: "/images/products/NAMCOMBO304-1.jpg", originalPrice: 600, salePrice: 525, rating: 4.1, reviewCount: 100, href: "#" },
  { name: "Desi Chatpata Delight Pack – Twin Packs", image: "/images/products/HTCCOMBO303-1.jpg", originalPrice: 1565, salePrice: 1349, rating: 4.4, reviewCount: 0, href: "#" },
  { name: "Classic Bakarwadi Mix – Pack of 3", image: "/images/products/BAKCOMBO003-1.jpg", originalPrice: 360, salePrice: 330, rating: 4.2, reviewCount: 0, href: "#" },
  { name: "Premium Grain Fusion Combo", image: "/images/products/KHPCOMBO3001-1.jpg", originalPrice: 360, salePrice: 333, rating: 4.4, reviewCount: 0, href: "#" },
  { name: "Raagi Chips – Chatpataa Healthy Chips", image: "/images/products/HTC003-1.jpg", originalPrice: 120, salePrice: 115, rating: 4.0, reviewCount: 0, href: "#" },
  { name: "Street Snack Fusion Trio – Twin Packs", image: "/images/products/FRSNKHKCOMBO303-1.jpg", originalPrice: 1047, salePrice: 899, rating: 4.3, reviewCount: 0, href: "#" },
  { name: "Street Fusion Methi Trio", image: "/images/products/KHKMANIA5003-1.jpg", originalPrice: 537, salePrice: 479, rating: 4.2, reviewCount: 33, href: "#" },
  { name: "Cheesy Fiery Spicy Power Pack", image: "/images/products/KHKMANIA5004-1.jpg", originalPrice: 596, salePrice: 449, rating: 4.4, reviewCount: 0, href: "#" },
  { name: "Creamy Cheesy Delight Trio", image: "/images/products/MKFP004-2.jpg", originalPrice: 440, salePrice: 425, rating: 4.3, reviewCount: 0, href: "#" },
  { name: "Desi Chatpata Methi Trio", image: "/images/products/KHK-10.jpg", originalPrice: 440, salePrice: 425, rating: 4.2, reviewCount: 0, href: "#" },
  { name: "Plain Bliss & Methi Masala – Twin Pack", image: "/images/products/FRSNKHKCOMBO301-1.jpg", originalPrice: 289, salePrice: 275, rating: 3.8, reviewCount: 105, href: "#" },
  { name: "Bullet Spicy Khakhra – Twin Pack", image: "/images/products/KHC400X009-10.jpg", originalPrice: 349, salePrice: 325, rating: 4.4, reviewCount: 0, href: "#" },
  { name: "Peri Peri Punch Khakhra – Twin Pack", image: "/images/products/KHP4001-1.jpg", originalPrice: 289, salePrice: 275, rating: 4.1, reviewCount: 7, href: "#" },
];
```

## Healthy Choices Data

```typescript
const healthyChoices = [
  { name: "Cheese Garlic Mini Khakhra – Family Pack", image: "/images/products/C4004-1.jpg", originalPrice: 199, salePrice: 175, rating: 4.2, reviewCount: 6, href: "#" },
  { name: "Cheesy Spicy Fusion Pack – Twin Packs", image: "/images/products/FRSNKHKCOMBO210-1.jpg", originalPrice: 1565, salePrice: 1349, rating: 4.3, reviewCount: 0, href: "#" },
  { name: "Beetroot Chips – Cheese N' Herbs Healthy Chips", image: "/images/products/HTC002-1.jpg", originalPrice: 120, salePrice: 115, rating: 4.3, reviewCount: 0, href: "#" },
  { name: "Quinoa Chips – Jalepeno Healthy Chips", image: "/images/products/HTC004-1.jpg", originalPrice: 120, salePrice: 115, rating: 3.9, reviewCount: 89, href: "#" },
  { name: "Premium Grain Fusion Combo", image: "/images/products/KHCCOMBO401-1.jpg", originalPrice: 360, salePrice: 333, rating: 4.4, reviewCount: 0, href: "#" },
  { name: "Classic Indian Chat Trio", image: "/images/products/KHKMANIA3005-1.jpg", originalPrice: 440, salePrice: 425, rating: 4.2, reviewCount: 89, href: "#" },
  { name: "Light & Healthy Combo", image: "/images/products/FRSNKHKCOMBO204-1.jpg", originalPrice: 295, salePrice: 285, rating: 4.0, reviewCount: 105, href: "#" },
  { name: "Healthy Balance Combo", image: "/images/products/FRSNKHKCOMBO301-1.jpg", originalPrice: 295, salePrice: 285, rating: 4.1, reviewCount: 22, href: "#" },
  { name: "Salted & Methi Masala – Twin Pack", image: "/images/products/KHC400X009-11.jpg", originalPrice: 289, salePrice: 275, rating: 3.9, reviewCount: 0, href: "#" },
  { name: "Peri Peri Punch & Methi Masala – Twin Pack", image: "/images/products/KHC400X009-4.jpg", originalPrice: 289, salePrice: 275, rating: 4.1, reviewCount: 22, href: "#" },
  { name: "Gluten Free Khakhra – Twin Pack", image: "/images/products/KHP4003-1.jpg", originalPrice: 349, salePrice: 325, rating: 3.7, reviewCount: 0, href: "#" },
  { name: "Masala Khakhra", image: "/images/products/C008-1.jpg", originalPrice: 149, salePrice: 145, rating: 3.8, reviewCount: 15, href: "#" },
];
```

## Section Headers
- Best Sellers: title="Best Sellers" viewAllHref="/Best-sellers/"
- Healthy Choices: title="Healthy Choices" viewAllHref="/Bestsellers/"
