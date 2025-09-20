export const config = {
  // Cal.com Configuration
  cal: {
    username: 'eve-ai',
    eventSlug: 'consultation',
    eventName: 'Consultation',
    eventDescription: 'Consultation with Eve AI',
    eventLocation: 'Google Meet',
    eventUrl: 'https://cal.com/eve-ai/consultation',
    origin: 'https://cal.com',
    embedScript: 'https://app.cal.com/embed/embed.js',
  },

  // Tableau Dashboard Configuration
  tableau: {
    dashboardUrl: 'https://public.tableau.com/views/PeopleandCulture_v2/HROverview',
    embedUrl: 'https://public.tableau.com/views/PeopleandCulture_v2/HROverview?:language=en-US&:sid=&:display_count=n&:origin=viz_share_link&:embed=y&:showVizHome=no&:toolbar=no&:tabs=no&:refresh=yes&:loadOrderID=0&:display_spinner=no&:showAppBanner=false&:device=desktop&:size=1000,700',
    shareUrl: 'https://public.tableau.com/views/PeopleandCulture_v2/HROverview?:language=en-US&:display_count=n&:origin=viz_share_link',
  },

  // Timeouts (in milliseconds)
  timeouts: {
    iframeLoad: 10000, // 10 seconds for iframe loading
    modalTransition: 100, // Modal transition delay
    scrollDebounce: 100, // Scroll event debounce
  },

  // UI Dimensions
  dimensions: {
    logo: {
      default: { width: 110, height: 84 },
      footer: { width: 180, height: 138 },
    },
    carousel: {
      scrollAmount: 370, // Card width + margin
    },
  },

  // Assets
  assets: {
    logo: {
      light: '/eveai_logo_light.svg',
      dark: '/eveai_logo_dark.svg',
      alt: 'eve.ai - AI Consulting',
    },
  },

  // External Links
  externalLinks: {},

  // Feature Flags
  features: {
    showTableauDemo: true,
    enableScheduling: true,
  },
}