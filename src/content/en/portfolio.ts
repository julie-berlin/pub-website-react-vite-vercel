export interface PortfolioProject {
  id: string;
  title: string;
  coverImage: string;
  description: string;
  tags: string[];
  detailedDescription: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    company: string;
  };
  caseStudyUrl?: string;
  featured: boolean;
}

export const portfolio = {
  title: "Success Stories",
  subtitle: "Real results from real partnerships",
  projects: [
    {
      id: "retail-analytics",
      title: "Predictive Analytics for Retail Chain",
      coverImage: "https://picsum.photos/400/300?random=1",
      description: "ML-powered demand forecasting system reducing overstock by 35%",
      tags: ["Machine Learning", "Predictive Analytics", "Cloud Computing"],
      detailedDescription: "Implemented an advanced ML-powered demand forecasting and automated inventory optimization system across 200+ stores, achieving $4.2M annual savings with 22% improvement in product availability.",
      client: "Major Retail Corporation",
      industry: "Retail",
      challenge: "Struggling with inventory management and demand forecasting across 200+ stores",
      solution: "Implemented ML-powered demand forecasting and automated inventory optimization system",
      results: [
        "35% reduction in overstock",
        "22% improvement in product availability",
        "$4.2M annual savings",
      ],
      testimonial: {
        quote: "eve.ai transformed our inventory management. The ROI exceeded our expectations within the first quarter.",
        author: "Sarah Johnson",
        role: "VP of Operations",
        company: "Retail Corp",
      },
      featured: true,
    },
    {
      id: "healthcare-nlp",
      title: "NLP for Healthcare Documentation",
      coverImage: "https://picsum.photos/400/300?random=2",
      description: "Automated clinical documentation reducing staff workload by 50%",
      tags: ["Natural Language Processing", "Healthcare AI", "HIPAA Compliant"],
      detailedDescription: "Deployed an advanced NLP system for automated clinical documentation and insights extraction, achieving 99.2% accuracy in medical coding while allowing medical staff to focus on patient care.",
      client: "Regional Hospital Network",
      industry: "Healthcare",
      challenge: "Medical staff spending 40% of time on documentation instead of patient care",
      solution: "Deployed NLP system for automated clinical documentation and insights extraction",
      results: [
        "50% reduction in documentation time",
        "30% increase in patient satisfaction scores",
        "99.2% accuracy in medical coding",
      ],
      featured: true,
    },
    {
      id: "finance-fraud",
      title: "Fraud Detection for Financial Services",
      coverImage: "https://picsum.photos/400/300?random=3",
      description: "Real-time fraud detection reducing losses by 73%",
      tags: ["Anomaly Detection", "Real-time Processing", "Deep Learning"],
      detailedDescription: "Built a real-time fraud detection system using advanced anomaly detection algorithms, achieving sub-100ms response times with 60% fewer false positives.",
      client: "Digital Banking Platform",
      industry: "Financial Services",
      challenge: "Rising fraud losses and high false positive rates in transaction monitoring",
      solution: "Built real-time fraud detection system using advanced anomaly detection algorithms",
      results: [
        "73% reduction in fraud losses",
        "60% decrease in false positives",
        "Sub-100ms response time",
      ],
      testimonial: {
        quote: "The precision and speed of eve.ai's solution saved us millions while improving customer experience.",
        author: "Michael Chen",
        role: "Chief Risk Officer",
        company: "Digital Bank",
      },
      featured: false,
    },
    {
      id: "manufacturing-predictive",
      title: "Predictive Maintenance for Manufacturing",
      coverImage: "https://picsum.photos/400/300?random=4",
      description: "IoT-based system reducing unplanned downtime by 45%",
      tags: ["IoT Integration", "Predictive Maintenance", "Edge Computing"],
      detailedDescription: "Implemented an IoT-based predictive maintenance system with ML failure prediction, extending equipment lifespan by 25% while cutting maintenance costs by 30%.",
      client: "Industrial Equipment Manufacturer",
      industry: "Manufacturing",
      challenge: "Unexpected equipment failures causing production delays and maintenance costs",
      solution: "Implemented IoT-based predictive maintenance system with ML failure prediction",
      results: [
        "45% reduction in unplanned downtime",
        "30% lower maintenance costs",
        "25% increase in equipment lifespan",
      ],
      featured: false,
    },
    {
      id: "logistics-optimization",
      title: "Route Optimization for Logistics",
      coverImage: "https://picsum.photos/400/300?random=5",
      description: "AI-powered routing reducing fuel costs by 28%",
      tags: ["Optimization Algorithms", "Real-time Analytics", "GPS Integration"],
      detailedDescription: "Developed an AI-powered dynamic routing system that considers real-time conditions, improving on-time deliveries by 40% and increasing deliveries per driver by 15%.",
      client: "National Delivery Service",
      industry: "Logistics",
      challenge: "Inefficient routing leading to high fuel costs and delayed deliveries",
      solution: "Developed AI-powered dynamic routing system considering real-time conditions",
      results: [
        "28% reduction in fuel costs",
        "40% improvement in on-time deliveries",
        "15% increase in deliveries per driver",
      ],
      featured: false,
    },
  ],
  stats: {
    title: "By the Numbers",
    items: [
      { label: "Clients Served", value: "50+", icon: "fa-users" },
      { label: "Projects Delivered", value: "120+", icon: "fa-clipboard-check" },
      { label: "Average ROI", value: "312%", icon: "fa-chart-line" },
      { label: "Client Retention", value: "95%", icon: "fa-heart" },
    ],
  },
  industries: {
    title: "Industries We Serve",
    list: [
      "Retail & E-commerce",
      "Healthcare & Life Sciences",
      "Financial Services",
      "Manufacturing",
      "Logistics & Supply Chain",
      "Technology",
      "Government & Public Sector",
      "Energy & Utilities",
    ],
  },
} as const;

export type Portfolio = typeof portfolio;
export type PortfolioStats = typeof portfolio.stats;
export type PortfolioIndustries = typeof portfolio.industries;