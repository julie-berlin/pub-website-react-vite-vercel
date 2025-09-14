import './Hero.css'

interface HeroProps {
  title: string
  subtitle: string
  ctaText: string
  onCtaClick: () => void
  backgroundImage?: string
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
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
          <p className="hero-subtitle">{subtitle}</p>
          <button className="hero-cta" onClick={onCtaClick}>
            {ctaText}
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero