import { useEffect, useState } from 'react'
import Header from '@components/Header'
import Hero from '@components/Hero'
import PortfolioBanner from '@components/PortfolioBanner'
import Services from '@components/Services'
import Demo from '@components/Demo'
import BusinessInfo from '@components/BusinessInfo'
import CTABanner from '@components/CTABanner'
import Footer from '@components/Footer'
import SchedulingModal from '@components/SchedulingModal'
import { iconMap } from '@utils/fontawesome'
import { getContent } from '../content'
import '@styles/theme1.css'

const LandingPage1 = () => {
  const [isSchedulingOpen, setIsSchedulingOpen] = useState(false)
  const content = getContent('en')

  useEffect(() => {
    document.body.className = 'theme1'
    return () => {
      document.body.className = ''
    }
  }, [])

  const servicesWithIcons = content.services.items.map(item => ({
    ...item,
    icon: iconMap[item.iconKey as keyof typeof iconMap]
  }))

  const handleScheduleConsultation = () => {
    setIsSchedulingOpen(true)
  }

  return (
    <div className="landing-page">
      <Header />

      <Hero
        title={content.hero.title}
        // subtitle={content.hero.subtitle}
        text={content.hero.text}
        ctaText={content.hero.ctaText}
        onCtaClick={handleScheduleConsultation}
      />

      <SchedulingModal
        isOpen={isSchedulingOpen}
        onClose={() => setIsSchedulingOpen(false)}
        calUsername={content.businessInfo.social.calendar.username}
      />

      <PortfolioBanner
        title={content.portfolioBanner.title}
        subtitle={content.portfolioBanner.subtitle}
        text={content.portfolioBanner.text}
        stats={[...content.portfolioBanner.stats]}
      />

      <Services
        services={servicesWithIcons}
        sectionTitle={content.services.sectionTitle}
        sectionSubtitle={content.services.sectionSubtitle}
      />

      <Demo
        title={content.demo.title}
        description={content.demo.description}
      />

      <CTABanner
        title={content.ctaBanner.title}
        description={content.ctaBanner.description}
        buttonText={content.ctaBanner.buttonText}
        onButtonClick={handleScheduleConsultation}
      />

      <BusinessInfo
        title={content.businessValue.title}
        subtitle={content.businessValue.subtitle}
        valueProps={[...content.businessValue.valueProps]}
      />

      <Footer
        companyName={content.businessInfo.company.name}
        meetingLink={content.businessInfo.social.calendar.link}
        email={content.businessInfo.contact.email}
        address={content.businessInfo.contact.address}
        calUsername={content.businessInfo.social.calendar.username}
      />
    </div>
  )
}

export default LandingPage1