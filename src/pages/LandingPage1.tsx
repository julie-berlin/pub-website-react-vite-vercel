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
import '@styles/theme1.css'

const LandingPage1 = () => {
  const [isSchedulingOpen, setIsSchedulingOpen] = useState(false)

  useEffect(() => {
    document.body.className = 'theme1'
    return () => {
      document.body.className = ''
    }
  }, [])

  const services = [
    {
      id: 'custom-dashboards',
      title: 'Custom AI Dashboards',
      description: 'Tailored to your business goals with LLM-powered natural language interfaces.',
      icon: iconMap.dataAnalytics,
    },
    {
      id: 'image-recognition',
      title: 'Image Recognition',
      description: 'Advanced visual data analysis for extracting meaningful insights from images.',
      icon: iconMap.computerVision,
    },
    {
      id: 'data-analysis',
      title: 'Data Analysis',
      description: 'Delivering actionable, data-driven insights from your internal and external data.',
      icon: iconMap.automation,
    },
    {
      id: 'predictive-analytics',
      title: 'Predictive Analytics & MLOps',
      description: 'Solutions to boost profitability with advanced forecasting and machine learning operations.',
      icon: iconMap.aiStrategy,
    },
    {
      id: 'llm-solutions',
      title: 'LLM Multi-Agent Solutions',
      description: 'Customized for your industry using secure, enterprise-grade language models.',
      icon: iconMap.nlp,
    },
    {
      id: 'integration',
      title: 'Data Integration',
      description: 'Fusing internal systems with real-time external data for 360° business insights.',
      icon: iconMap.mlSolutions,
    },
  ]

  const valueProps = [
    {
      id: 'integration',
      title: 'True Integration of Internal + External Data',
      description: 'Unlike many AI tools that focus solely on internal data, we fuse your systems with real-time external data for contextual, actionable insights.',
    },
    {
      id: 'security',
      title: 'LLM-Powered, But Secure & Responsible',
      description: 'We use Azure-hosted or private LLMs ensuring enterprise-grade privacy without risking data exposure.',
    },
    {
      id: 'conversational',
      title: 'Conversational, Customizable Dashboards',
      description: 'Our interfaces let users ask plain-language questions and get insights powered by live signals and historical context.',
    },
    {
      id: 'experience',
      title: 'Experience-Led Innovation',
      description: 'Built with real-world decision-making in mind, offering solutions that align with operational goals, not just tech trends.',
    },
  ]

  const handleScheduleConsultation = () => {
    setIsSchedulingOpen(true)
  }

  return (
    <div className="landing-page">
      <Header />

      <Hero
        title="Transform Your Business with Custom AI Solutions"
        // subtitle="Connect the dots"
        text="We build secure, tailored AI systems using your data to make smarter decisions faster. From intelligent automation to predictive insights and custom dashboards — <em>we deliver the competitive edge you need</em>."
        ctaText="Book Your Strategy Call"
        onCtaClick={handleScheduleConsultation}
      />

      <SchedulingModal
        isOpen={isSchedulingOpen}
        onClose={() => setIsSchedulingOpen(false)}
        calUsername="eve-ai"
      />

      <PortfolioBanner
        title="Proven Results"
        subtitle="Transforming businesses across industries with AI-powered solutions"
        text="We've helped businesses unlock new capabilities and drive measurable outcomes through intelligent automation and data-driven insights"
        stats={[
          { number: "50+", label: "Projects Delivered" },
          { number: "95%", label: "Client Satisfaction" },
          { number: "3x", label: "Average ROI" },
        ]}
      />

      <Services
        services={services}
        sectionTitle="Our AI Expertise, Your Advantage"
        sectionSubtitle="Intelligent, tailored solutions that help businesses uncover meaningful insights"
      />

      <Demo
        title="Insight App"
        description="Like having a business analyst, strategist, and researcher—on demand. Powered by LLMs and built for everyone."
      />

      <CTABanner
        title="Ready to grow your business capabilities?"
        description="Leverage our AI expertise to build custom solutions your business needs to stay ahead. We focus on security and actionable insights, not just AI trends."
        buttonText="Book your free strategy session"
        onButtonClick={handleScheduleConsultation}
      />

      <BusinessInfo
        title="Why Us"
        subtitle="eve.ai is a women-owned AI company helping businesses uncover meaningful insights through intelligent, tailored solutions"
        valueProps={valueProps}
      />

      <Footer
        companyName="eve.ai"
        meetingLink="Schedule a Meeting"
        email="hello@eve-insights.ai"
        address={`880 Harrison St.
Leesburg, VA 20175`}
        calUsername="eve-ai"
      />
    </div>
  )
}

export default LandingPage1