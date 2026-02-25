# Responsive Design — Issues & Fixes

## Audit Summary

Mobile and tablet views failing due to cumulative layout, overflow, and touch-target issues. This document captures root causes and applied fixes.

---

## Issues Identified

### 1. **Body Scroll When Mobile Menu Open**
- **Problem**: Opening hamburger menu allows background content to scroll; poor UX.
- **Fix**: Add `overflow: hidden` on `body` when `isMenuOpen` is true; remove on close.

### 2. **ProductSlider Width Calc**
- **Problem**: `slider-item` uses `calc((100% - 2*gap)/3)` — at 2-col breakpoint, gap multiplier must match; potential sub-pixel overflow.
- **Fix**: Use `flex: 0 0 calc(...)` with correct gap for 1/2/3 cols; add `min-width: 0` to prevent flex blowout.

### 3. **Hero Grid Order**
- **Problem**: `order` on children requires parent to be flex/grid; verify stacking works at 968px.
- **Status**: Already correct (`display: grid`); ensure `hero-grid` has no `min-width` causing overflow.

### 4. **SizeSelector Tablet Overflow**
- **Problem**: `min-width: 120px` on `size-option` — at 640px, two options = 240px + gap can overflow.
- **Fix**: Stack vertically at 640px (not just 768px).

### 5. **Touch Targets < 44px**
- **Problem**: HeroSlider arrows 40px at 640px; ProductSlider 40px; dots too small.
- **Fix**: Enforce min 44px for all tappable elements; dots ≥10px with adequate spacing.

### 6. **Navbar Hamburger Hit Area**
- **Problem**: Hamburger visual 30px but needs 44px touch target.
- **Fix**: Container already has min 44x44; ensure no `overflow: hidden` clips hit area.

### 7. **Contact Page Typography**
- **Problem**: `.info-title` 2.25rem, `.success-message h2` 2.5rem — too large on mobile.
- **Fix**: Use `clamp()` for scalable typography.

### 8. **ProductDetail Back Button**
- **Problem**: No min-height; below 44px on small screens.
- **Fix**: Add `min-height: 44px`, `min-width: 44px` where applicable.

### 9. **Footer Contact Text Overflow**
- **Problem**: Long email/phone can overflow on narrow screens.
- **Fix**: `word-break: break-word` or `overflow-wrap: break-word`.

### 10. **Aurora Orbs Performance**
- **Problem**: Large blur/fixed orbs on mobile can cause jank.
- **Status**: Already reduced at 768px; consider 640px tuning.

### 11. **Safe Area (Notched Devices)**
- **Problem**: Content may sit under notch on iPhone X+.
- **Fix**: Add `padding-top: env(safe-area-inset-top)` to navbar; `padding-bottom` to footer where needed.

### 12. **Global Overflow Chain**
- **Problem**: Single overflowing child can break entire viewport.
- **Fix**: Ensure `html`, `body`, `#root`, `.App`, `.main-content` all have `overflow-x: hidden`; key flex children have `min-width: 0`.

### 13. **ProductCard Image Height**
- **Problem**: Fixed 300px/240px may feel off on very small screens.
- **Fix**: Use `min-height` + `aspect-ratio` for flexibility.

### 14. **WhatsApp Button**
- **Problem**: Full-width at 768px but should kick in earlier for tablets.
- **Fix**: Full-width at 640px.

---

## Breakpoints Reference

| Name | Width | Use |
|------|-------|-----|
| xs   | 480px | Small phones |
| sm   | 640px | Large phones, small tablets |
| md   | 768px | Tablets |
| lg   | 968px | Desktop transition |
| xl   | 1024px| Desktop |

---

## Fixes Applied ✓

- [x] Navbar: body scroll lock when menu open
- [x] ProductSlider: robust width + min-width: 0, 44px buttons
- [x] SizeSelector: stack at 640px
- [x] Contact: clamp typography (info-title, success-message)
- [x] ProductDetail: back button 44px min
- [x] Footer: word-break on contact, safe-area inset bottom
- [x] index.css: -webkit-text-size-adjust; Navbar: safe-area top
- [x] WhatsApp: full-width + 44px min at 640px
- [x] ProductCard: aspect-ratio image, clamp typography at 640px
- [x] HeroSlider: 44px arrows at all breakpoints
- [x] Hero/Home/Pages: overflow-x hidden, width 100%
- [x] AuroraBackground: 768px + 640px orb scaling
