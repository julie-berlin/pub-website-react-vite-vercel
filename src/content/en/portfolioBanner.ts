export const portfolioBanner = {
  title: "Proven Results",
  subtitle: "Transforming businesses across industries with AI-powered solutions",
  text: "We've helped businesses unlock new capabilities and drive measurable outcomes through intelligent automation and data-driven insights",
  stats: [
    { number: "120+", label: "Projects Delivered" },
    { number: "95%", label: "Client Satisfaction" },
    { number: "3x", label: "Average ROI" },
  ],
  carousel: {
    title: "Featured Projects",
    subtitle: "Discover how we've transformed businesses across industries",
  },
} as const;

export type PortfolioBanner = typeof portfolioBanner;