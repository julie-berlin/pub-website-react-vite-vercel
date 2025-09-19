let calcomLoaded = false;
let calcomLoadPromise: Promise<void> | null = null;

export const loadCalcom = (): Promise<void> => {
  if (calcomLoaded) {
    return Promise.resolve();
  }

  if (calcomLoadPromise) {
    return calcomLoadPromise;
  }

  calcomLoadPromise = new Promise((resolve) => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.onload = () => {
      calcomLoaded = true;

      // Initialize Cal.com after script loads
      if (typeof window !== 'undefined' && (window as any).Cal) {
        (window as any).Cal('init', { origin: 'https://cal.com' });
      }

      resolve();
    };
    script.src = 'https://app.cal.com/embed/embed.js';
    document.head.appendChild(script);
  });

  return calcomLoadPromise;
};

export const openCalcomPopup = async (username: string = 'eve-ai', eventSlug?: string) => {
  await loadCalcom();

  if (typeof window !== 'undefined' && (window as any).Cal) {
    const calLink = eventSlug ? `${username}/${eventSlug}` : username;

    // Get the primary color from CSS variables
    const computedStyle = getComputedStyle(document.documentElement);
    const primaryColor = computedStyle.getPropertyValue('--primary-color').trim() ||
                        computedStyle.getPropertyValue('--chili').trim() ||
                        '#E23D18';

    (window as any).Cal('openModal', {
      calLink,
      config: {
        theme: 'light',
        styles: {
          branding: {
            brandColor: primaryColor
          }
        },
        hideEventTypeDetails: false,
        layout: 'month_view'
      }
    });
  }
};

export const preloadCalcom = () => {
  // Preload Cal.com when user hovers or focuses on scheduling elements
  if (!calcomLoaded && !calcomLoadPromise) {
    loadCalcom();
  }
};

export const embedCalcom = async (
  elementId: string,
  username: string = 'eve-ai',
  eventSlug?: string
) => {
  await loadCalcom();

  if (typeof window !== 'undefined' && (window as any).Cal) {
    const calLink = eventSlug ? `${username}/${eventSlug}` : username;

    // Get the primary color from CSS variables
    const computedStyle = getComputedStyle(document.documentElement);
    const primaryColor = computedStyle.getPropertyValue('--primary-color').trim() ||
                        computedStyle.getPropertyValue('--chili').trim() ||
                        '#E23D18';

    (window as any).Cal('inline', {
      elementOrSelector: `#${elementId}`,
      calLink,
      config: {
        theme: 'light',
        styles: {
          branding: {
            brandColor: primaryColor
          }
        },
        hideEventTypeDetails: false,
        layout: 'month_view'
      }
    });
  }
};