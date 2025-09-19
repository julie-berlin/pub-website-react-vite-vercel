import './Footer.css'
import Logo from './Logo'
import { preloadCalcom, openCalcomPopup } from '../utils/calcom'

interface FooterProps {
  companyName?: string
  email?: string
  phone?: string
  address?: string
  meetingLink?: string
  calUsername?: string
  socialLinks?: {
    platform: string
    url: string
  }[]
}

const Footer: React.FC<FooterProps> = ({
  companyName = 'eve.ai',
  email = 'hello@eve-insight.ai',
  address = '',
  meetingLink = 'Schedule a Meeting',
  calUsername = 'eve-ai',
  socialLinks = [],
}) => {
  const currentYear = new Date().getFullYear()

  const handleScheduleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    openCalcomPopup(calUsername);
  }

  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <Logo width={160} height={120} />
            <p className="footer-tagline">Transforming businesses with AI</p>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Contact Information</h4>
            <div className="contact-info">
              <a
                href="#schedule"
                className="contact-link"
                onClick={handleScheduleClick}
                onMouseEnter={preloadCalcom}
                onFocus={preloadCalcom}
                aria-label="Schedule a meeting with eve.ai"
              >
                {meetingLink}
              </a>
              <a href={`mailto:${email}`} className="contact-link">
                {email}
              </a>
              <address className="contact-address">{address}</address>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Quick Links</h4>
            <nav className="footer-nav">
              <a href="#services" className="footer-link">Services</a>
              <a href="#demo" className="footer-link">Demo</a>
              <a href="#about" className="footer-link">About</a>
              <a href="#contact" className="footer-link">Contact</a>
            </nav>
          </div>

          {socialLinks.length > 0 && (
            <div className="footer-section">
              <h4 className="footer-subtitle">Follow Us</h4>
              <div className="social-links">
                {socialLinks.map((link) => (
                  <a
                    key={link.platform}
                    href={link.url}
                    className="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow us on ${link.platform}`}
                  >
                    {link.platform}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} {companyName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer