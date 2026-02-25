# Responsive Design Audit — Issues & Fixes

## Issues Identified

### 1. **Breakpoint Inconsistency**
- Mixed use of 480px, 768px, 968px, 1024px across files
- No tablet-specific tuning (768–968px)
- Navbar only switches at 768px; tablets (768–900px) may show cramped desktop nav

### 2. **Hero Section**
- `hero-slider-wrap` max-width: 360px on tablet — too small for 768px viewport
- No tablet breakpoint; jumps from desktop 2-col to mobile 1-col at 968px
- Slider aspect-ratio 4:5 may feel tall on phones
- Grid `order` only works when parent is flex/grid — verify `hero-grid` supports it

### 3. **Container Conflict**
- `index.css` .container: padding 1.5rem
- `Home.css` .container: padding 2rem (overrides), 1rem at 768px
- Other pages may not get mobile padding

### 4. **Product Grid**
- `minmax(300px, 1fr)` — on 360px phone forces 1 col (ok)
- No tablet breakpoint — relies on auto-fit; at 600px 2 cols might not trigger

### 5. **Touch Targets**
- Slider arrows 36–40px — below 44px recommendation for touch
- Dots 6–8px on mobile — small for fingers

### 6. **Overflow & Width**
- Some components may lack `min-width: 0` in flex children
- `background-attachment: fixed` can cause iOS layout bugs (already handled at 768px)

### 7. **Typography Scaling**
- Large jumps in font size; no intermediate tablet sizes

## Fix Strategy

1. **Shared breakpoints**: 480 (xs), 640 (sm), 768 (md), 968 (lg), 1024 (xl)
2. **Hero**: Tablet (640–968) — slider 50% width, content 50%; Mobile (<640) — slider first, full width
3. **Navbar**: Hamburger at 900px (tablets get mobile menu)
4. **Touch**: Min 44px for interactive elements
5. **Container**: Single source of truth, responsive padding

## Fixes Applied ✓

- index.css: clamp() for container padding, breakpoint notes
- Hero: 968px stack, 640px mobile tune, slider order:1, clamp() typography
- HeroSlider: 44px touch targets, min-width for dots
- Navbar: 900px hamburger, 44px hamburger min-size
- Home: clamp() sections, features grid min(100%, 260px)
- Footer: clamp() padding, responsive grid
- ProductSlider: 640px breakpoint, 44px buttons
- ProductGrid: min(100%, 280px) for auto-fill
- Contact, About, Products, ProductDetail, Policy: clamp() typography & padding
