import './CTABanner.css'

interface CTABannerProps {
  title: string
  description: string
  buttonText: string
  onButtonClick: () => void
}

const CTABanner: React.FC<CTABannerProps> = ({
  title,
  description,
  buttonText,
  onButtonClick,
}) => {
  return (
    <section className="cta-banner">
      <div className="container">
        <div className="cta-content">
          <div className="cta-text">
            <h2 className="cta-title">{title}</h2>
            <p className="cta-description">{description}</p>
          </div>
          <button className="cta-button" onClick={onButtonClick}>
            {buttonText}
          </button>
        </div>
      </div>
    </section>
  )
}

export default CTABanner