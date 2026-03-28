# Footer Specification

## Overview
- **Target file:** `src/components/Footer.tsx`
- **Screenshot:** `docs/design-references/section-footer.png`
- **Interaction model:** static

## DOM Structure
Full-width footer with gradient background (cream → green from top to bottom).
4-column layout:
1. Left: Logo + social icons (Facebook, Instagram, WhatsApp)
2. Quick Links column
3. Policy column
4. Get in touch column

Below all columns: copyright bar.

## Computed Styles

### Footer Container
- background: linear-gradient(175deg, #fdf5ec 0%, #009329 81%)
- padding: 60px 80px 0 80px
- color: inherit

### Main Grid
- display: grid
- gridTemplateColumns: 1fr 1fr 1fr 1fr (or flex with gap)
- gap: 40px
- paddingBottom: 40px

### Column 1 (Brand)
#### Logo
- Image: `/images/logo-large.png` (large version)
- width: 160px
- marginBottom: 24px

#### Social Icons Row
- display: flex, gap: 12px, marginTop: 16px

#### Social Icon
- width: 40px, height: 40px
- borderRadius: 50%
- backgroundColor: rgba(255,255,255,0.2) or specific color
- display: flex, alignItems: center, justifyContent: center
- color: #ffffff or dark

### Column Headers (Quick Links, Policy, Get in touch)
- fontFamily: Montserrat
- fontSize: 16px
- fontWeight: 700
- color: #222222 (dark, readable on light gradient)
- marginBottom: 16px
- tag: h5

### Links
- fontFamily: Poppins
- fontSize: 14px
- color: #444444
- display: block
- marginBottom: 8px
- textDecoration: none
- Hover: color: #e65100

### Contact Items
- display: flex, alignItems: flex-start, gap: 10px
- marginBottom: 12px

### Copyright Bar
- borderTop: 1px solid rgba(0,0,0,0.1)
- paddingTop: 16px
- paddingBottom: 16px
- textAlign: center
- fontSize: 13px
- color: #ffffff (on green at bottom of gradient)
- display: flex
- justifyContent: space-between
- flexWrap: wrap

## Content

### Social Links
- Facebook: https://www.facebook.com/farsanwadi/
- Instagram: https://www.instagram.com/farsanwadi/
- WhatsApp: https://wa.me/c/917055991599

### Quick Links
- Home → /
- About us → /about-us/
- Shop → /shop/
- All Products → /product-category/all-products/
- Contact us → /contact-us/

### Policy
- Privacy Policy → /privacy-policy/
- Terms & Conditions → /terms-conditions/
- Shipping Policy → /shipping-policy/
- Return & Refund → /return-refund-policy/

### Get in touch
- Address: Farsanwadi Food Products - Unit I - 204, Ganpati Kings County, Sikandra, Agra 282007 - Unit II - 6/C-2, Sanjay Palace, Agra 282002
- Phone: +91-70-5599-1599 (tel:+918909135599)
- Email: customersupport@farsanwadi.com (mailto:customersupport@farsanwadi.in)
- Sales: Sales@farsanwadi.com

### Copyright
"Copyright ©2026 ~ All Rights Reserved by Farsanwadi"
"Developed by NYBF.Designs"

## Assets
- `/images/logo-large.png` (footer logo)
- Use Lucide React icons for: Facebook (no exact icon, use Share2), Instagram (Instagram), Phone, Mail, MapPin

## Responsive Behavior
- Desktop: 4-column grid
- Mobile: 2-column or stacked single column
