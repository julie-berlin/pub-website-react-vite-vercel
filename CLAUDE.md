# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

eve.ai consulting website - A single-page React application with two landing page designs for an AI consulting company. Built with Vite, React, TypeScript, and Zustand for state management.

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

### Project Structure
```
src/
├── components/     # Reusable UI components
├── pages/         # Landing page components
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

### Deployment
- Configured for Vercel deployment
- SPA routing handled via vercel.json rewrites