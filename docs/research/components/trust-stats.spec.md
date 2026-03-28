# TrustStats Specification

## Overview
- **Target file:** `src/components/TrustStats.tsx`
- **Screenshot:** `docs/design-references/section-bestsellers.png`
- **Interaction model:** static

## DOM Structure
Full-width gray section with centered heading, then 4 stat columns with vertical separators.

## Computed Styles

### Section Container
- backgroundColor: #e6e6e6
- padding: 40px 0
- width: 100%

### Heading
- text: "Building Trust, One Order at a Time"
- fontFamily: Poppins or Montserrat
- fontSize: 20px
- fontWeight: 600
- color: #444444
- textAlign: center
- marginBottom: 32px

### Stats Row
- display: flex
- justifyContent: center
- alignItems: stretch

### Stat Item
- display: flex, flexDirection: column, alignItems: center
- padding: 16px 48px
- borderRight: 1px solid #bbbbbb (last one has no border)

### Stat Number
- fontFamily: Poppins or Montserrat
- fontSize: 48px (large)
- fontWeight: 700
- color: #00a50c (brand green)
- lineHeight: 1

### Stat Label
- fontFamily: Poppins
- fontSize: 14px
- color: #666666
- fontWeight: 400
- marginTop: 8px

## Stats Data
1. "20.3K+" / "Happy Consumers"
2. "187K+" / "Products Sold"
3. "4.2+" / "Customer Ratings"
4. "400+" / "Cities Accross India"

## Responsive Behavior
- Desktop: 4 columns in a row with separators
- Mobile: 2x2 grid or 4 stacked items
