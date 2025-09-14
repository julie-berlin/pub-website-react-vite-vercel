import { useEffect } from 'react'
import Header from '@components/Header'
import Hero from '@components/Hero'
import Services from '@components/Services'
import Demo from '@components/Demo'
import BusinessInfo from '@components/BusinessInfo'
import CTABanner from '@components/CTABanner'
import Footer from '@components/Footer'
import '@styles/theme1.css'

const LandingPage1 = () => {
  useEffect(() => {
    document.body.className = 'theme1'
    return () => {
      document.body.className = ''
    }
  }, [])

  const services = [
    {
      id: 'ai-strategy',
      title: 'AI Strategy Consulting',
      description: 'Develop comprehensive AI strategies aligned with your business goals and objectives.',
      icon: '🎯',
    },
    {
      id: 'ml-solutions',
      title: 'Machine Learning Solutions',
      description: 'Custom ML models designed to solve your specific business challenges.',
      icon: '🤖',
    },
    {
      id: 'data-analytics',
      title: 'Advanced Data Analytics',
      description: 'Transform raw data into actionable insights with our advanced analytics platform.',
      icon: '📊',
    },
    {
      id: 'automation',
      title: 'Process Automation',
      description: 'Streamline operations and reduce costs with intelligent automation solutions.',
      icon: '⚡',
    },
    {
      id: 'nlp',
      title: 'Natural Language Processing',
      description: 'Leverage NLP to understand and process human language at scale.',
      icon: '💬',
    },
    {
      id: 'cv',
      title: 'Computer Vision',
      description: 'Extract valuable insights from images and videos with our CV solutions.',
      icon: '👁️',
    },
  ]

  const valueProps = [
    {
      id: 'expertise',
      title: 'Deep AI Expertise',
      description: 'Our team consists of AI researchers and engineers from top institutions with proven track records.',
    },
    {
      id: 'results',
      title: 'Proven Results',
      description: 'We have helped over 100+ companies achieve measurable ROI through AI implementation.',
    },
    {
      id: 'support',
      title: 'End-to-End Support',
      description: 'From strategy to deployment and maintenance, we provide comprehensive support.',
    },
    {
      id: 'innovation',
      title: 'Cutting-Edge Innovation',
      description: 'Stay ahead with access to the latest AI technologies and methodologies.',
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
        title="Transform Your Business with AI"
        subtitle="Unlock the power of artificial intelligence to drive innovation, efficiency, and growth"
        ctaText="Get Started Today"
        onCtaClick={handleHeroCTA}
      />

      <Services
        services={services}
        sectionTitle="Our AI Solutions"
        sectionSubtitle="Comprehensive AI services tailored to your industry needs"
      />

      <Demo
        title="Experience AI in Action"
        description="See how our AI solutions can transform your business processes"
      />

      <BusinessInfo
        title="Why Choose eve.ai"
        subtitle="Your trusted partner in AI transformation"
        valueProps={valueProps}
      />

      <CTABanner
        title="Ready to Transform Your Business?"
        description="Schedule a free consultation with our AI experts and discover how we can help you achieve your goals"
        buttonText="Schedule Consultation"
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
          { platform: 'GitHub', url: 'https://github.com/eve-ai' },
        ]}
      />
    </div>
  )
}

export default LandingPage1