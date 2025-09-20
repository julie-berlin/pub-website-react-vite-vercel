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
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/pro-duotone-svg-icons'

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
  faChevronLeft,
  faChevronRight,
)

// Export icon mapping with Pro duotone icons
export const iconMap = {
  // Service icons for Landing Page 1
  aiStrategy: ['fad', 'bullseye'],
  mlSolutions: ['fad', 'robot'],
  dataAnalytics: ['fad', 'chart-line'],
  automation: ['fad', 'bolt'],
  nlp: ['fad', 'comments'],
  computerVision: ['fad', 'eye'],

  // Service icons for Landing Page 2
  research: ['fad', 'microscope'],
  predictive: ['fad', 'chart-bar'],
  ethics: ['fad', 'balance-scale'],
  edgeAI: ['fad', 'globe'],
  training: ['fad', 'graduation-cap'],
  customModels: ['fad', 'wrench'],

  // Carousel navigation icons
  chevronLeft: ['fad', 'chevron-left'],
  chevronRight: ['fad', 'chevron-right'],
} as const