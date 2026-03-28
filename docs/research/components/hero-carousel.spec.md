# HeroCarousel Specification

## Overview
- **Target file:** `src/components/HeroCarousel.tsx`
- **Screenshot:** `docs/design-references/section-hero.png`
- **Interaction model:** auto-playing carousel, click-to-navigate, dot pagination

## DOM Structure
Full-width carousel showing 3 slides simultaneously (center + partial left/right).
Slides are square images (900x900 source, displayed at ~427x427px each).
Navigation dots below the slides.
Left/right arrow buttons on sides.

## Computed Styles

### Container
- width: 100%
- overflow: hidden
- position: relative
- backgroundColor: #f0f0f0 (light gray background)
- padding: 24px 0

### Slide wrapper
- display: flex, 3 slides visible
- Center slide: slightly larger / more prominent than side slides
- Side slides are partially cut off

### Individual Slide
- width: 427px, height: 427px
- border-radius: 16px
- overflow: hidden
- margin: 0 8px
- cursor: pointer

### Navigation dots
- display: flex, justify-content: center, gap: 8px
- marginTop: 16px
- Dot: width 10px, height 10px, border-radius 50%
- Inactive: background #cccccc
- Active: background #444444

### Arrows
- Position: absolute, vertically centered on sides
- left arrow: left: 8px
- right arrow: right: 8px
- background: rgba(255,255,255,0.8)
- borderRadius: 50%, width: 40px, height: 40px
- display: flex, align-items: center, justify-content: center
- color: #444444

## States & Behaviors

### Auto-play
- Automatically advances every 3-4 seconds
- Loops back to start

### Click navigation
- Clicking an arrow moves one slide
- Clicking a dot jumps to that slide
- Transition: smooth slide animation, 0.4s ease

## Slides Data (3 slides, shown in rotation)
- Slide 1: `/images/hero-1.jpg` — Healthy Choice for Everyone / Quinoa+Raagi+Oats chips
- Slide 2: `/images/hero-2.jpg` — Street-Style Golgappa Khakhra / Tangy. Chatpata.
- Slide 3: `/images/hero-3.jpg` — Bold. Authentic. Unbelievably Crunchy (Bakarwadi)

Each slide image has text already embedded in the image itself. No overlay text needed.
Images are clickable (link to respective category/product pages).

## Assets
- `/images/hero-1.jpg`, `/images/hero-2.jpg`, `/images/hero-3.jpg`

## Responsive Behavior
- Desktop: 3 slides visible, center prominent
- Mobile: 1 slide visible, full width, dots still shown
