export const demo = {
  title: "Insight App",
  description: "Like having a business analyst, strategist, and researcher—on demand. Powered by LLMs and built for everyone.",
  placeholder: "Try asking: 'What are the latest trends in AI for retail?'",
  submitText: "Get Insights",
  loadingText: "Analyzing...",
  errorText: "Please enter a question to get AI insights.",
} as const;

export type Demo = typeof demo;