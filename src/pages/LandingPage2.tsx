import { useEffect } from 'react'
import Header from '@components/Header'
import Hero from '@components/Hero'
import Services from '@components/Services'
import Demo from '@components/Demo'
import BusinessInfo from '@components/BusinessInfo'
import CTABanner from '@components/CTABanner'
import Footer from '@components/Footer'
import { iconMap } from '@utils/fontawesome'
import '@styles/theme2.css'

const LandingPage2 = () => {
  useEffect(() => {
    document.body.className = 'theme2'
    return () => {
      document.body.className = ''
    }
  }, [])

  const services = [
    {
      id: 'ai-research',
      title: 'AI Research & Development',
      description: 'Pioneering research in artificial intelligence to solve tomorrow\'s challenges today.',
      icon: iconMap.research,
    },
    {
      id: 'predictive',
      title: 'Predictive Analytics',
      description: 'Forecast trends and behaviors with our state-of-the-art predictive models.',
      icon: iconMap.predictive,
    },
    {
      id: 'ai-ethics',
      title: 'AI Ethics & Governance',
      description: 'Ensure responsible AI deployment with our ethics and governance framework.',
      icon: iconMap.ethics,
    },
    {
      id: 'edge-ai',
      title: 'Edge AI Solutions',
      description: 'Deploy AI at the edge for real-time processing and reduced latency.',
      icon: iconMap.edgeAI,
    },
    {
      id: 'ai-training',
      title: 'AI Training & Education',
      description: 'Empower your team with comprehensive AI training programs.',
      icon: iconMap.training,
    },
    {
      id: 'custom-models',
      title: 'Custom AI Models',
      description: 'Tailored AI models built specifically for your unique business requirements.',
      icon: iconMap.customModels,
    },
  ]

  const valueProps = [
    {
      id: 'speed',
      title: 'Rapid Implementation',
      description: 'Go from concept to production in weeks, not months, with our agile methodology.',
    },
    {
      id: 'scalability',
      title: 'Infinite Scalability',
      description: 'Our solutions grow with your business, from startup to enterprise scale.',
    },
    {
      id: 'security',
      title: 'Enterprise Security',
      description: 'Bank-grade security and compliance standards protect your data and models.',
    },
    {
      id: 'roi',
      title: 'Guaranteed ROI',
      description: 'We guarantee measurable return on investment within the first year.',
    },
  ]

  const handleHeroCTA = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleScheduleConsultation = () => {
    window.open('https://calendly.com/eve-ai-consultation', '_blank')
  }

  return (
    <div className="landing-page">
      <Header logo="eve.ai" />

      <Hero
        title="The Future of AI is Here"
        subtitle="Partner with the leaders in artificial intelligence innovation and transformation"
        ctaText="Start Your AI Journey"
        onCtaClick={handleHeroCTA}
      />

      <Services
        services={services}
        sectionTitle="Next-Generation AI Services"
        sectionSubtitle="Cutting-edge solutions for the modern enterprise"
      />

      <Demo
        title="Witness the Power of AI"
        description="Interactive demonstrations of our latest AI capabilities"
      />

      <BusinessInfo
        title="The eve.ai Advantage"
        subtitle="Leading the AI revolution with innovation and expertise"
        valueProps={valueProps}
      />

      <CTABanner
        title="Join the AI Revolution"
        description="Don't get left behind. Transform your business with eve.ai's cutting-edge AI solutions"
        buttonText="Book Your Free Strategy Session"
        onButtonClick={handleScheduleConsultation}
      />

      <Footer
        companyName="eve.ai"
        email="hello@eve-insight.ai"
        phone="+1 (888) EVE-AI-00"
        address="100 Innovation Drive, Silicon Valley, CA 94025"
        socialLinks={[
          { platform: 'LinkedIn', url: 'https://linkedin.com/company/eve-ai' },
          { platform: 'Twitter', url: 'https://twitter.com/eve_ai' },
          { platform: 'Medium', url: 'https://medium.com/@eve-ai' },
          { platform: 'YouTube', url: 'https://youtube.com/@eve-ai' },
        ]}
      />
    </div>
  )
}

export default LandingPage2