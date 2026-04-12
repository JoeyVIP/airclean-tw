# Creatify.ai Page Topology

## Tech Stack
- **Framework**: Framer (framerusercontent CDN)
- **Fonts**: General Sans (primary), IBM Plex Mono (code/mono)
- **Primary Color**: rgb(87, 60, 255) — deep purple
- **Background**: rgb(252, 252, 252) light sections, dark purple hero
- **H1**: 140px, weight 500, -2.8px letter-spacing

## Sections (top to bottom)

| # | Name | Type | Interaction |
|---|------|------|-------------|
| 1 | Navbar | Fixed overlay | Scroll-triggered background change |
| 2 | Hero | Flow | Static with gradient background |
| 3 | Brand Carousel | Flow | Auto-scroll horizontal carousel, 18 items |
| 4 | Stats Bar | Flow | Static (20M+, 10M+, $650M+) |
| 5 | 4-Step Process | Flow | Static, alternating left/right layout |
| 6 | Toolkit Grid | Flow | Static, 8 cards in 2x4 grid |
| 7 | Results | Flow | Static, 3 big numbers |
| 8 | Case Studies | Flow | Horizontal scroll carousel, 6 cards |
| 9 | Blog/News | Flow | Static |
| 10 | Trust & Compliance | Flow | Static, security badges |
| 11 | Footer | Flow | Static, multi-column links |

## Key Behaviors
- Navbar: transparent → white bg on scroll
- Hero: purple gradient background with noise texture overlay
- Brand carousel: auto-scrolling left with CSS animation
- Case studies: horizontal scroll with prev/next buttons
- Cards in toolkit: subtle hover lift effect
