import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import './Services.css'

interface Service {
  id: string
  title: string
  description: string
  icon?: IconProp | string | readonly [string, string]
}

interface ServicesProps {
  services: Service[]
  sectionTitle?: string
  sectionSubtitle?: string
}

const Services: React.FC<ServicesProps> = ({
  services,
  sectionTitle = 'Our Services',
  sectionSubtitle = 'Comprehensive AI solutions tailored to your needs',
}) => {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="services-header">
          <h2 className="section-title">{sectionTitle}</h2>
          <p className="section-subtitle">{sectionSubtitle}</p>
        </div>
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              {service.icon && (
                <div className="service-icon">
                  {typeof service.icon === 'string' ? (
                    service.icon
                  ) : (
                    <FontAwesomeIcon icon={service.icon as IconProp} />
                  )}
                </div>
              )}
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services