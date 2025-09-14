import './DarkBanner.css'

interface DarkBannerProps {
  title?: string
  subtitle?: string
  text?: string
  stats?: Array<{
    number: string
    label: string
  }>
}

const DarkBanner: React.FC<DarkBannerProps> = ({
  title,
  subtitle,
  text,
  stats,
}) => {
  return (
    <section className="dark-banner">
      <div className="container">
        <div className="dark-banner-content">
          {title && <h2 className="dark-banner-title">{title}</h2>}
          {subtitle && <h3 className="dark-banner-subtitle">{subtitle}</h3>}
          {text && <p className="dark-banner-text">{text}</p>}

          {stats && stats.length > 0 && (
            <div className="dark-banner-stats">
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
    </section>
  )
}

export default DarkBanner