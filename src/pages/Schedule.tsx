import { useEffect } from 'react';
import Cal from '@calcom/embed-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getContent } from '../content';
import './Schedule.css';

interface ScheduleProps {
  calUsername?: string;
  eventSlug?: string;
}

const Schedule: React.FC<ScheduleProps> = ({
  calUsername,
  eventSlug
}) => {
  const content = getContent('en');
  useEffect(() => {
    // Set page title for accessibility
    document.title = 'Schedule a Consultation - eve.ai';

    // Scroll to top when page loads
    window.scrollTo(0, 0);

    return () => {
      // Reset title when leaving page
      document.title = 'eve.ai - AI Consulting Services';
    };
  }, []);

  const username = calUsername || content.businessInfo.social.calendar.username;
  const calLink = eventSlug ? `${username}/${eventSlug}` : username;

  return (
    <div className="schedule-page">
      <Header />

      <main className="schedule-main" role="main" aria-labelledby="schedule-heading">
        <div className="container">
          <div className="schedule-header">
            <h1 id="schedule-heading" className="schedule-title">
              Schedule Your AI Consultation
            </h1>
            <p className="schedule-description">
              Choose a time that works best for you to discuss how AI can transform your business.
              Our experts will guide you through tailored solutions for your specific needs.
            </p>
          </div>

          <div className="schedule-content">
            <div className="schedule-benefits">
              <h2 className="benefits-title">What to Expect</h2>
              <ul className="benefits-list" role="list">
                <li role="listitem">
                  <strong>Discovery Session:</strong> We'll learn about your business goals and challenges
                </li>
                <li role="listitem">
                  <strong>AI Opportunities:</strong> Identify key areas where AI can make an impact
                </li>
                <li role="listitem">
                  <strong>Custom Solutions:</strong> Discuss tailored strategies for your industry
                </li>
                <li role="listitem">
                  <strong>Clear Roadmap:</strong> Outline next steps and implementation timeline
                </li>
              </ul>
            </div>

            <div
              className="schedule-calendar"
              role="region"
              aria-label="Scheduling calendar"
            >
              <Cal
                calLink={calLink}
                style={{ width: '100%', height: '100%' }}
                config={{
                  theme: 'light'
                }}
              />
            </div>
          </div>

          <div className="schedule-footer">
            <p className="schedule-contact">
              Have questions? Email us at{' '}
              <a href={`mailto:${content.businessInfo.contact.email}`} className="contact-email">
                {content.businessInfo.contact.email}
              </a>
            </p>
          </div>
        </div>
      </main>

      <Footer
        companyName={content.businessInfo.company.name}
        email={content.businessInfo.contact.email}
        address={content.businessInfo.contact.address}
        meetingLink={content.businessInfo.social.calendar.link}
        calUsername={content.businessInfo.social.calendar.username}
      />
    </div>
  );
};

export default Schedule;