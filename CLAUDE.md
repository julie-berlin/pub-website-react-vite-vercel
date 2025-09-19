# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

eve.ai consulting website - A women-owned AI consulting company website built as a single-page React application. Features modern, professional design with emphasis on AI-driven business insights and tailored solutions.

## Commands

- `npm run dev` - Start development server (http://localhost:5173)
- `npm run build` - Build for production
- `npm run lint` - Run TypeScript type checking
- `npm run preview` - Preview production build locally

## Architecture

### Tech Stack
- **Vite** - Build tool and dev server
- **React 19** with TypeScript
- **React Router** - Client-side routing
- **Zustand** - State management
- **CSS Variables** - Theming system
- **Font Awesome** - Icons (via react-fontawesome)

### Project Structure
```
src/
├── components/     # Reusable UI components
│   ├── Header.tsx     # Navigation header
│   ├── Hero.tsx       # Hero section with CTA
│   ├── Services.tsx   # Services showcase
│   ├── Demo.tsx       # Interactive demo section
│   ├── BusinessInfo.tsx # Business value props
│   ├── PortfolioBanner.tsx # Portfolio/social proof
│   ├── CTABanner.tsx  # Call-to-action section
│   ├── Footer.tsx     # Footer with contact info
│   └── Logo.tsx       # eve.ai logo component
├── pages/         # Landing page components
│   ├── LandingPage1.tsx  # Primary landing design
│   └── LandingPage2.tsx  # Alternative design
├── styles/        # Global styles and themes
├── store/         # Zustand store
├── types/         # TypeScript type definitions
└── utils/         # Utility functions
```

### Key Features
- Two distinct landing page designs (routes: `/` and `/v2`)
- Theme switching via CSS custom properties
- Responsive design with WCAG compliance
- Component-based architecture for reusability
- Smooth scroll navigation to page sections
- Professional animations and transitions

### Company Information
- **Company**: eve.ai
- **Focus**: AI consulting, business insights, tailored solutions
- **Contact**: hello@eve-insights.ai
- **Location**: 880 Harrison St., Leesburg, VA 20175

### Upcoming Integrations
- Cal.com scheduling integration (see CAL-INTEGRATION-PLAN.md for details)

### Deployment
- Configured for Vercel deployment
- SPA routing handled via vercel.json rewrites