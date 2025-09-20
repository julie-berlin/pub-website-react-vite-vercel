export const businessInfo = {
  company: {
    name: "eve.ai",
    tagline: "AI-Driven Business Insights",
    description: "Empowering businesses with intelligent, tailored AI solutions",
  },
  contact: {
    email: "hello@eve-insights.ai",
    phone: "",
    address: {
      street: "880 Harrison St. SE",
      city: "Leesburg",
      state: "VA",
      zip: "20175",
      country: "USA"
    },
  },
  social: {
    linkedin: "",
    twitter: "",
    github: "",
    calendar: {
      username: "eve-ai",
      link: "Schedule a Consultation",
    },
  },
} as const;

export type BusinessInfo = typeof businessInfo;