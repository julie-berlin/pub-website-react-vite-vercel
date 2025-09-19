import { ProjectCard } from '../types/portfolio';

export const portfolioProjects: ProjectCard[] = [
  {
    title: "AI-Powered Customer Analytics",
    coverImage: "https://picsum.photos/seed/analytics/400/300",
    description: "Advanced machine learning system that analyzes customer behavior patterns to drive business insights and improve conversion rates.",
    tags: ["Machine Learning", "Analytics", "Customer Intelligence", "Python"],
    detailedDescription: "Developed a comprehensive AI analytics platform that processes customer interaction data from multiple touchpoints. The system uses advanced clustering algorithms and predictive modeling to identify high-value customer segments, predict churn risk, and recommend personalized engagement strategies. Resulted in a 35% increase in customer retention and 22% boost in revenue for our client in the e-commerce sector."
  },
  {
    title: "Natural Language Processing Suite",
    coverImage: "https://picsum.photos/seed/nlp/400/300",
    description: "Custom NLP solution for automated document processing and sentiment analysis, reducing manual review time by 80%.",
    tags: ["NLP", "Document Processing", "Automation", "Sentiment Analysis"],
    detailedDescription: "Built an enterprise-grade NLP pipeline that automatically processes legal documents, contracts, and customer feedback. The system extracts key entities, performs sentiment analysis, and generates executive summaries. Integrated with existing workflow management systems and includes real-time monitoring dashboards. This solution transformed a 40-hour manual process into a 15-minute automated workflow."
  },
  {
    title: "Predictive Maintenance AI",
    coverImage: "https://picsum.photos/seed/maintenance/400/300",
    description: "IoT-integrated machine learning model that predicts equipment failures before they occur, saving millions in downtime costs.",
    tags: ["IoT", "Predictive Analytics", "Manufacturing", "Deep Learning"],
    detailedDescription: "Designed and deployed a sophisticated predictive maintenance system for industrial equipment using sensor data and deep learning models. The solution monitors vibration patterns, temperature fluctuations, and operational metrics to predict failures up to 30 days in advance. Implemented edge computing capabilities for real-time processing and created intuitive dashboards for maintenance teams. Achieved 95% accuracy in failure prediction and reduced unplanned downtime by 60%."
  },
  {
    title: "AI-Driven Financial Forecasting",
    coverImage: "https://picsum.photos/seed/finance/400/300",
    description: "Sophisticated time series analysis platform that provides accurate financial projections and risk assessment for investment decisions.",
    tags: ["Financial AI", "Time Series", "Risk Analysis", "Investment"],
    detailedDescription: "Created an advanced financial forecasting system that combines multiple data sources including market indicators, economic trends, and company fundamentals. The platform uses ensemble methods and deep learning to generate accurate revenue predictions and risk assessments. Features include scenario modeling, sensitivity analysis, and automated report generation. Helped clients make data-driven investment decisions with 15% better accuracy than traditional methods."
  },
  {
    title: "Computer Vision Quality Control",
    coverImage: "https://picsum.photos/seed/vision/400/300",
    description: "Real-time quality inspection system using computer vision to detect defects in manufacturing processes with 99.7% accuracy.",
    tags: ["Computer Vision", "Quality Control", "Manufacturing", "Real-time"],
    detailedDescription: "Developed a state-of-the-art computer vision system for automated quality control in manufacturing. The solution uses convolutional neural networks to detect microscopic defects, surface irregularities, and dimensional variations in real-time. Integrated with production line cameras and automated rejection systems. The implementation reduced quality control costs by 45% while improving defect detection accuracy from 85% to 99.7%, significantly reducing customer complaints and returns."
  }
];