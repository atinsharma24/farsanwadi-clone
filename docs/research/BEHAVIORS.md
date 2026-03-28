# Behavior Bible — Farsanwadi Home Page

## Scroll Behaviors
- No scroll-driven animations observed
- No IntersectionObserver-triggered animations
- No sticky elements (header stays at top and scrolls away)
- No scroll snap
- No smooth scroll library (no Lenis, no Locomotive Scroll)
- Standard browser scroll behavior

## Interactive Behaviors

### Hero Carousel
- **Type:** Auto-advancing carousel with click navigation
- **Auto-advance:** Every 4 seconds
- **Navigation:** Left/right arrows + dot pagination
- **Transition:** CSS transform translateX, 0.5s ease
- **Loop:** Yes (wraps around)
- **Trigger:** JS setInterval

### Header Shop Dropdown
- **Trigger:** Hover on "Shop" nav item
- **Behavior:** Shows dropdown menu with 6 subcategories
- **Transition:** None specified (appears immediately or with 0.2s fade)
- **Close:** On mouseLeave

### Product Cards
- **Hover:** box-shadow increases, "ADD TO CART" button darkens slightly
- **Transition:** 0.2s ease

### Category/Occasion/Taste Cards
- **Hover:** translateY(-2px) + box-shadow, or scale(1.02) for taste cards
- **Transition:** 0.2s ease

### "View All" Buttons
- **Hover:** Background fills with #e65100, text turns white
- **Transition:** 0.2s ease

### Testimonials Carousel
- **Type:** Auto-advancing with click navigation
- **Auto-advance:** Every 5 seconds
- **Navigation:** Left/right arrows
- **Transition:** Fade (opacity 0→1)

### Search Bar
- **Submit:** Click orange button or press Enter
- **No JS-driven behavior needed** (static mockup)

## Responsive Breakpoints
- Mobile: 390px — hamburger menu, single column, images full width
- Tablet: 768px — 2-column category grids
- Desktop: 1440px — full layout

## No Animation Libraries
No Framer Motion, GSAP, AOS, or other animation libraries detected.
Use CSS transitions only.
