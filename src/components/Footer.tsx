import './Footer.css'

interface FooterProps {
  companyName?: string
  email?: string
  phone?: string
  address?: string
  socialLinks?: {
    platform: string
    url: string
  }[]
}

const Footer: React.FC<FooterProps> = ({
  companyName = 'eve.ai',
  email = 'contact@eve-insight.ai',
  phone = '+1 (555) 123-4567',
  address = '123 AI Boulevard, Tech City, TC 12345',
  socialLinks = [],
}) => {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">{companyName}</h3>
            <p className="footer-tagline">Transforming businesses with AI</p>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Contact Information</h4>
            <div className="contact-info">
              <a href={`mailto:${email}`} className="contact-link">
                {email}
              </a>
              <a href={`tel:${phone.replace(/\D/g, '')}`} className="contact-link">
                {phone}
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