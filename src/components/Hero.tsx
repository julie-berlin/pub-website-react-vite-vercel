import './Hero.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface HeroProps {
  title: string
  subtitle?: string
  text?: string
  ctaText: string
  onCtaClick: () => void
  backgroundImage?: string
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  text,
  ctaText,
  onCtaClick,
  backgroundImage,
}) => {
  return (
    <section
      id="home"
      className="hero"
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : undefined}
    >
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">{title}</h1>
          {subtitle && <h2 className="hero-subtitle">{subtitle}</h2>}
          {text && <p className="hero-text" dangerouslySetInnerHTML={{ __html: text }} />}
          <button className="hero-cta" onClick={onCtaClick}>
            <span>{ctaText}</span>
            <FontAwesomeIcon icon={['fad', 'comments']} />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero