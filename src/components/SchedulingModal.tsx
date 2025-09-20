import { useEffect, useRef } from 'react';
import Cal, { getCalApi } from '@calcom/embed-react';
import { config } from '../config';
import './SchedulingModal.css';

interface SchedulingModalProps {
  isOpen: boolean;
  onClose: () => void;
  calUsername?: string;
  eventSlug?: string;
}

const SchedulingModal: React.FC<SchedulingModalProps> = ({
  isOpen,
  onClose,
  calUsername = config.cal.username,
  eventSlug
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previouslyFocusedElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const initCal = async () => {
      const cal = await getCalApi();

      // Get the primary color from CSS variables
      const computedStyle = getComputedStyle(document.documentElement);
      const primaryColor = computedStyle.getPropertyValue('--primary-color').trim() ||
                          computedStyle.getPropertyValue('--tang-blue').trim() ||
                          '#225CD9';

      cal('ui', {
        theme: 'light',
        styles: {
          branding: {
            brandColor: primaryColor
          }
        },
        hideEventTypeDetails: false,
        layout: 'month_view'
      });
    };

    if (isOpen) {
      // Store the currently focused element
      previouslyFocusedElement.current = document.activeElement as HTMLElement;

      // Initialize Cal.com
      initCal();

      // Focus the close button when modal opens
      setTimeout(() => {
        closeButtonRef.current?.focus();
      }, config.timeouts.modalTransition);

      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';

      // Add aria-hidden to main content
      const mainContent = document.getElementById('root');
      if (mainContent) {
        mainContent.setAttribute('aria-hidden', 'true');
      }
    } else {
      // Restore body scroll
      document.body.style.overflow = '';

      // Remove aria-hidden from main content
      const mainContent = document.getElementById('root');
      if (mainContent) {
        mainContent.removeAttribute('aria-hidden');
      }

      // Return focus to previously focused element
      if (previouslyFocusedElement.current) {
        previouslyFocusedElement.current.focus();
      }
    }

    return () => {
      document.body.style.overflow = '';
      const mainContent = document.getElementById('root');
      if (mainContent) {
        mainContent.removeAttribute('aria-hidden');
      }
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }

      // Trap focus within modal
      if (event.key === 'Tab' && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

        if (event.shiftKey) {
          if (document.activeElement === firstElement) {
            event.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            event.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const calLink = eventSlug ? `${calUsername}/${eventSlug}` : calUsername;

  return (
    <div
      className="scheduling-modal-overlay"
      onClick={onClose}
      role="presentation"
      aria-hidden="true"
    >
      <div
        ref={modalRef}
        className="scheduling-modal"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="scheduling-modal-title"
        aria-describedby="scheduling-modal-description"
      >
        <button
          ref={closeButtonRef}
          className="scheduling-modal-close"
          onClick={onClose}
          aria-label="Close scheduling modal"
          type="button"
        >
          <span aria-hidden="true">×</span>
          <span className="sr-only">Close</span>
        </button>
        <div className="scheduling-modal-content">
          <h2 id="scheduling-modal-title" className="scheduling-modal-title">
            Schedule a Consultation
          </h2>
          <p id="scheduling-modal-description" className="scheduling-modal-subtitle">
            Book a time to discuss how AI can transform your business
          </p>
          <div className="cal-embed-container" role="region" aria-label="Calendar booking widget">
            <Cal
              calLink={calLink}
              style={{ width: '100%', height: '100%', overflow: 'scroll' }}
              config={{
                theme: 'light'
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchedulingModal;