import PortfolioCarousel from './PortfolioCarousel'
import { portfolioProjects } from '../data/portfolio'
import './PortfolioBanner.css'

interface PortfolioBannerProps {
  title?: string
  subtitle?: string
  text?: string
  stats?: Array<{
    number: string
    label: string
  }>
}

const PortfolioBanner: React.FC<PortfolioBannerProps> = ({
  title,
  subtitle,
  text,
  stats,
}) => {
  return (
    <section id="portfolio" className="portfolio-banner">
      <div className="container">
        <div className="portfolio-banner-content">
          {title && <h2 className="portfolio-banner-title">{title}</h2>}
          {subtitle && <h3 className="portfolio-banner-subtitle">{subtitle}</h3>}
          {text && <p className="portfolio-banner-text">{text}</p>}

          {stats && stats.length > 0 && (
            <div className="portfolio-banner-stats">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <PortfolioCarousel
        projects={portfolioProjects}
        title="Featured Projects"
        subtitle="Discover how we've transformed businesses across industries"
      />
    </section>
  )
}

export default PortfolioBanner