# AsSeenOn Specification

## Overview
- **Target file:** `src/components/AsSeenOn.tsx`
- **Screenshot:** N/A
- **Interaction model:** static

## DOM Structure
Section with centered heading "As seen on" followed by a row of media/platform logos.

## Computed Styles

### Section Container
- backgroundColor: #ffffff
- padding: 40px 40px
- textAlign: center

### Heading
- text: "As seen on"
- fontSize: 30px
- fontWeight: 600
- color: #222222
- fontFamily: Montserrat
- marginBottom: 32px

### Logos Row
- display: flex
- justifyContent: center
- alignItems: center
- gap: 40px
- flexWrap: wrap

### Logo Image
- height: 48px (auto width)
- objectFit: contain
- filter: grayscale(0) (full color) or grayscale(100%) depending on hover

## Logos Data (2 items currently downloaded)
1. Amazon — `/images/seen-on/amazon.png`
2. Blinkit — `/images/seen-on/blinkit.png`

## Responsive Behavior
- Desktop: logos in a row
- Mobile: logos wrap or in a row with smaller size
