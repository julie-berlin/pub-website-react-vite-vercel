export const footer = {
  tagline: "Transforming businesses with AI",
  subtitle: "Intelligent solutions for forward-thinking businesses",
  sections: {
    contact: {
      title: "Contact Information",
      meetingLinkText: "Schedule a Consultation",
    },
    quickLinks: {
      title: "Quick Links",
      links: [
        { text: "Services", href: "#services", ariaLabel: "Our Services" },
        { text: "Demo", href: "#demo", ariaLabel: "View Demo" },
        { text: "About", href: "#about", ariaLabel: "About Us" },
        { text: "Contact", href: "#contact", ariaLabel: "Contact Us" },
      ],
    },
    social: {
      title: "Follow Us",
      links: [
        { platform: "LinkedIn", url: "", ariaLabel: "Follow us on LinkedIn" },
        { platform: "Twitter", url: "", ariaLabel: "Follow us on Twitter" },
        { platform: "GitHub", url: "", ariaLabel: "View our GitHub" },
      ],
    },
  },
  legal: {
    copyright: `© ${new Date().getFullYear()} eve.ai. All rights reserved.`,
    links: [
      { text: "Privacy Policy", url: "/privacy" },
      { text: "Terms of Service", url: "/terms" },
    ],
  },
} as const;

export type Footer = typeof footer;