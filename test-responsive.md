# Portfolio Carousel - Responsive Testing Checklist

## Testing URL
http://localhost:5173/

## Screen Size Breakpoints to Test

### 1. Small Mobile (320px - 480px)
- [ ] Cards display at 260px × 320px
- [ ] ~1.1 cards visible at once
- [ ] Navigation buttons are 40px size
- [ ] Pagination dots are 10px
- [ ] Touch/swipe works smoothly
- [ ] Text is readable (0.8rem font size)

### 2. Mobile (481px - 768px)
- [ ] Cards display at 280px × 340px
- [ ] ~1.3 cards visible at once
- [ ] Proper spacing between cards
- [ ] All tags visible and readable
- [ ] Image height is 160px

### 3. Tablet (769px - 1023px)
- [ ] Cards display at 280px × 340px
- [ ] ~2.5 cards visible at once
- [ ] Gap adjustments working
- [ ] Navigation controls properly spaced

### 4. Medium Desktop (1024px - 1399px)
- [ ] Cards display at 320px × 380px
- [ ] ~3.7 cards visible at once
- [ ] Standard navigation button size (48px)
- [ ] Proper carousel container gaps

### 5. Large Desktop (1400px+)
- [ ] Cards display at 380px × 420px
- [ ] ~3.2 cards visible at once
- [ ] Larger gaps between elements
- [ ] Enhanced spacing throughout

## Functionality Tests

### Navigation
- [ ] Previous/Next buttons work at all sizes
- [ ] Buttons disable correctly at boundaries
- [ ] Keyboard navigation (Arrow keys) works
- [ ] Pagination dots navigate to correct slide

### Touch/Mobile
- [ ] Swipe left/right gestures work
- [ ] Touch doesn't interfere with scroll
- [ ] Cards are tappable to flip

### Animations
- [ ] Flip animation smooth at all sizes
- [ ] Hover effects work on desktop
- [ ] No hover effects stuck on mobile
- [ ] Reduced motion preference respected

### Accessibility
- [ ] Focus indicators visible at all sizes
- [ ] Screen reader announces properly
- [ ] Keyboard navigation works
- [ ] ARIA labels are appropriate

## Visual Consistency
- [ ] Theme colors consistent
- [ ] Shadows render correctly
- [ ] Images load with placeholders
- [ ] Error states display properly
- [ ] Stats row stays above carousel

## Browser Testing
- [ ] Chrome/Edge
- [ ] Firefox
- [ ] Safari
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

## Issues Found
(Document any issues here)

## Performance Notes
- Loading time:
- Animation smoothness:
- Memory usage:
- Scroll performance: