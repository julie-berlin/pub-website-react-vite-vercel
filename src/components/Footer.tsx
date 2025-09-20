import './Footer.css'
import Logo from './Logo'
import { preloadCalcom, openCalcomPopup } from '../utils/calcom'
import { config } from '../config'

interface FooterProps {
  companyName?: string
  email?: string
  phone?: string
  address?: {
    street: string
    city: string
    state: string
    zip: string
    country: string
  }
  meetingLink?: string
  calUsername?: string
  socialLinks?: {
    platform: string
    url: string
  }[]
}

const Footer: React.FC<FooterProps> = ({
  companyName,
  email,
  address,
  meetingLink,
  calUsername,
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
            <Logo width={config.dimensions.logo.footer.width} height={config.dimensions.logo.footer.height} />
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
              {address && (
                <address className="contact-address">
                  <div>{address.street}</div>
                  <div>{address.city}, {address.state} {address.zip}</div>
                </address>
              )}
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