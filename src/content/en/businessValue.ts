export const businessValue = {
  title: "Why Us",
  subtitle: "eve.ai is a women-owned AI company helping businesses uncover meaningful insights through intelligent, tailored solutions",
  valueProps: [
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
  ],
} as const;

export type BusinessValue = typeof businessValue;