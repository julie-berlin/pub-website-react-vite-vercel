export const services = {
  sectionTitle: "Our AI Expertise, Your Advantage",
  sectionSubtitle: "Intelligent, tailored solutions that help businesses uncover meaningful insights",
  items: [
    {
      id: 'custom-dashboards',
      title: 'Custom AI Dashboards',
      description: 'Tailored to your business goals with LLM-powered natural language interfaces.',
      iconKey: 'dataAnalytics',
    },
    {
      id: 'image-recognition',
      title: 'Image Recognition',
      description: 'Advanced visual data analysis for extracting meaningful insights from images.',
      iconKey: 'computerVision',
    },
    {
      id: 'data-analysis',
      title: 'Data Analysis',
      description: 'Delivering actionable, data-driven insights from your internal and external data.',
      iconKey: 'automation',
    },
    {
      id: 'predictive-analytics',
      title: 'Predictive Analytics & MLOps',
      description: 'Solutions to boost profitability with advanced forecasting and machine learning operations.',
      iconKey: 'aiStrategy',
    },
    {
      id: 'llm-solutions',
      title: 'LLM Multi-Agent Solutions',
      description: 'Customized for your industry using secure, enterprise-grade language models.',
      iconKey: 'nlp',
    },
    {
      id: 'integration',
      title: 'Data Integration',
      description: 'Fusing internal systems with real-time external data for 360° business insights.',
      iconKey: 'mlSolutions',
    },
  ],
} as const;

export type Services = typeof services;