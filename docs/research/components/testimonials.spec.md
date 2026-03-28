# Testimonials Specification

## Overview
- **Target file:** `src/components/Testimonials.tsx`
- **Screenshot:** N/A
- **Interaction model:** auto-advancing carousel with prev/next buttons

## DOM Structure
Full-width section with centered heading "Testemonials" (sic), then a carousel showing 1 testimonial at a time.
Each testimonial card has: review text + reviewer avatar/name/location.

## Computed Styles

### Section Container
- backgroundColor: #ffffff
- padding: 60px 40px
- textAlign: center

### Heading
- text: "Testemonials"
- fontSize: 30px
- fontWeight: 600
- color: #222222
- fontFamily: Montserrat
- marginBottom: 32px

### Carousel Container
- position: relative
- maxWidth: 700px
- margin: 0 auto

### Testimonial Card
- backgroundColor: #f9f9f9
- borderRadius: 12px
- padding: 32px 48px
- textAlign: center

### Review Text
- fontSize: 16px
- fontFamily: Poppins
- fontWeight: 400
- color: #444444
- lineHeight: 1.7
- fontStyle: italic
- marginBottom: 24px

### Reviewer Row
- display: flex
- alignItems: center
- justifyContent: center
- gap: 12px

### Avatar
- width: 48px, height: 48px
- borderRadius: 50%
- objectFit: cover
- border: 2px solid #e65100

### Reviewer Name
- fontFamily: Poppins
- fontSize: 15px
- fontWeight: 700
- color: #222222

### Reviewer Location
- fontFamily: Poppins
- fontSize: 13px
- color: #888888

### Arrows
- position: absolute, vertically centered on card sides
- width: 40px, height: 40px
- borderRadius: 50%
- backgroundColor: #f0f0f0
- color: #444444
- cursor: pointer
- display: flex, alignItems: center, justifyContent: center
- Previous: left: -20px
- Next: right: -20px

## Testimonials Data
```typescript
const testimonials = [
  {
    name: "Ritika Sharma",
    location: "New Delhi",
    review: "I ordered the Khakhra combo and Healthy Chips for my office snacks, and honestly I didn't expect them to be this tasty. Super crispy, not oily, and very filling. Much better than regular packaged snacks. Will definitely reorder!"
  },
  {
    name: "Mahesh Patel",
    location: "Ahmedabad",
    review: "I ordered the Khakhra combo and Healthy Chips for my office snacks, and honestly I didn't expect them to be this tasty. Super crispy, not oily, and very filling. Much better than regular packaged snacks. Will definitely reorder!"
  },
  {
    name: "Annya Banerjee",
    location: "Kolkata",
    review: "Tried the Bakarwadi for the first time and absolutely loved it. Perfect balance of sweet, spicy, and crunchy. My whole family finished the pack in one evening. Packaging was neat and delivery was quick too."
  },
  {
    name: "Rohit Prakash",
    location: "Nagpur",
    review: "Tried the Bakarwadi for the first time and absolutely loved it. Perfect balance of sweet, spicy, and crunchy. My whole family finished the pack in one evening. Packaging was neat and delivery was quick too."
  },
  {
    name: "Kunal Mehta",
    location: "Agra",
    review: "Tried almost all products — Khakhra, Chips, Namkeens, everything is top quality. Perfect balance of taste and health. Feels like traditional snacks made with modern hygiene standards."
  }
];
```

Note: No avatar images available locally. Use initials-based avatar (first letter of name, colored circle).

## Behavior
- Auto-advance every 5 seconds
- Click prev/next to navigate
- Transitions: fade in/out (opacity 0→1, 0.3s ease)

## Responsive Behavior
- Desktop: 700px max-width centered
- Mobile: full width, arrows smaller or hidden
