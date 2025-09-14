import './BusinessInfo.css'

interface BusinessInfoProps {
  title?: string
  subtitle?: string
  valueProps: {
    id: string
    title: string
    description: string
  }[]
}

const BusinessInfo: React.FC<BusinessInfoProps> = ({
  title = 'Why Choose eve.ai',
  subtitle = 'Transforming businesses with cutting-edge AI solutions',
  valueProps,
}) => {
  return (
    <section id="about" className="business-info">
      <div className="container">
        <div className="business-header">
          <h2 className="section-title">{title}</h2>
          <p className="section-subtitle">{subtitle}</p>
        </div>
        <div className="value-props">
          {valueProps.map((prop, index) => (
            <div key={prop.id} className="value-prop">
              <div className="value-number">{String(index + 1).padStart(2, '0')}</div>
              <div className="value-content">
                <h3 className="value-title">{prop.title}</h3>
                <p className="value-description">{prop.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BusinessInfo