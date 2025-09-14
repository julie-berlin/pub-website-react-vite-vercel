import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faBullseye,
  faRobot,
  faChartLine,
  faBolt,
  faComments,
  faEye,
  faMicroscope,
  faChartBar,
  faBalanceScale,
  faGlobe,
  faGraduationCap,
  faWrench,
} from '@fortawesome/free-solid-svg-icons'

// Add icons to library
library.add(
  faBullseye,
  faRobot,
  faChartLine,
  faBolt,
  faComments,
  faEye,
  faMicroscope,
  faChartBar,
  faBalanceScale,
  faGlobe,
  faGraduationCap,
  faWrench,
)

// Export icon mapping for easy replacement when Pro icons are available
export const iconMap = {
  // Service icons for Landing Page 1
  aiStrategy: ['fas', 'bullseye'],
  mlSolutions: ['fas', 'robot'],
  dataAnalytics: ['fas', 'chart-line'],
  automation: ['fas', 'bolt'],
  nlp: ['fas', 'comments'],
  computerVision: ['fas', 'eye'],

  // Service icons for Landing Page 2
  research: ['fas', 'microscope'],
  predictive: ['fas', 'chart-bar'],
  ethics: ['fas', 'balance-scale'],
  edgeAI: ['fas', 'globe'],
  training: ['fas', 'graduation-cap'],
  customModels: ['fas', 'wrench'],
} as const

// When Pro duotone icons are available, update this to:
// export const iconMap = {
//   aiStrategy: ['fad', 'bullseye'] as const,
//   mlSolutions: ['fad', 'robot'] as const,
//   dataAnalytics: ['fad', 'chart-line'] as const,
//   automation: ['fad', 'bolt'] as const,
//   nlp: ['fad', 'comments'] as const,
//   computerVision: ['fad', 'eye'] as const,
//   research: ['fad', 'microscope'] as const,
//   predictive: ['fad', 'chart-bar'] as const,
//   ethics: ['fad', 'balance-scale'] as const,
//   edgeAI: ['fad', 'globe'] as const,
//   training: ['fad', 'graduation-cap'] as const,
//   customModels: ['fad', 'wrench'] as const,
// }