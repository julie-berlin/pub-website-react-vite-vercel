export const navigation = {
  header: {
    logo: {
      text: "eve.ai",
      href: "/",
      ariaLabel: "eve.ai - Home",
    },
    mainNav: [
      { text: "Services", href: "#services", ariaLabel: "Our Services" },
      { text: "Demo", href: "#demo", ariaLabel: "View Demo" },
      { text: "Portfolio", href: "#portfolio", ariaLabel: "Our Portfolio" },
      { text: "About", href: "#about", ariaLabel: "About Us" },
      { text: "Contact", href: "#contact", ariaLabel: "Contact Us" },
    ],
    ctaButton: {
      text: "Schedule Consultation",
      href: "#schedule",
      ariaLabel: "Schedule a consultation with eve.ai",
    },
    mobileMenu: {
      openLabel: "Open menu",
      closeLabel: "Close menu",
    },
  },
} as const;

export type Navigation = typeof navigation;