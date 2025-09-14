# Cal.com Integration Plan for eve.ai

## Overview
This document outlines the plan to integrate Cal.com scheduling into the eve.ai consulting website.

## Integration Options
Cal.com offers three main integration methods:
- **Direct Link**: Simple URL to your Cal.com booking page
- **Embed Widget**: Inline or popup scheduling widget
- **API Integration**: Full control via REST API

## Recommended Approach
For the eve.ai consulting website, we recommend a **hybrid approach**:
- Use Cal.com embed for a seamless experience
- Popup modal for quick scheduling from CTAs
- Direct link as fallback

## Implementation Steps

### Phase 1: Setup
- [ ] Create Cal.com account at cal.com
- [ ] Configure availability and meeting types (consultation, demo, etc.)
- [ ] Customize branding to match eve.ai colors

### Phase 2: Basic Integration
Add Cal.com embed script to index.html:
```javascript
<script type="text/javascript">
  (function (C, A, L) { /* Cal.com embed code */ })(window, document, "script");
</script>
```

### Phase 3: Component Updates
- [ ] Replace "Schedule a Meeting" placeholder with actual Cal.com link
- [ ] Add popup trigger to hero CTA button
- [ ] Create a dedicated `/schedule` route with full calendar embed

### Phase 4: Enhanced Features
- [ ] Add meeting type selection (15-min call, 30-min demo, etc.)
- [ ] Implement pre-qualification questions
- [ ] Set up confirmation/reminder emails

## Required Information
Before implementation, gather:
- [ ] Cal.com username (e.g., `eve-ai` for `cal.com/eve-ai`)
- [ ] Preferred meeting types and durations
- [ ] Calendar integration preferences (Google, Outlook, etc.)
- [ ] Custom branding colors and logo
- [ ] Pre-qualification questions (if any)
- [ ] Email templates for confirmations/reminders

## Code Locations to Update
1. **Footer Component** (`src/components/Footer.tsx`)
   - Update meetingLink prop to use actual Cal.com URL

2. **Hero Section** (`src/components/Hero.tsx`)
   - Update CTA button to trigger Cal.com popup

3. **New Components to Create**
   - `src/components/SchedulingModal.tsx` - Modal wrapper for Cal.com embed
   - `src/pages/Schedule.tsx` - Dedicated scheduling page

## Testing Checklist
- [ ] Test scheduling flow on desktop
- [ ] Test scheduling flow on mobile
- [ ] Verify calendar sync works
- [ ] Check confirmation emails
- [ ] Test different meeting types
- [ ] Verify time zone handling

## Analytics Tracking
- [ ] Add event tracking for scheduling button clicks
- [ ] Track completed bookings
- [ ] Monitor drop-off rates in scheduling flow

## Notes
- Consider A/B testing popup vs inline embed
- Monitor loading performance with embed script
- Ensure WCAG compliance for scheduling widget