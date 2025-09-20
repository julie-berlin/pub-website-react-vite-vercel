export * from './businessInfo';
export * from './portfolio';
export * from './hero';
export * from './services';
export * from './demo';
export * from './businessValue';
export * from './portfolioBanner';
export * from './ctaBanner';
export * from './navigation';
export * from './footer';

import { businessInfo } from './businessInfo';
import { portfolio } from './portfolio';
import { hero } from './hero';
import { services } from './services';
import { demo } from './demo';
import { businessValue } from './businessValue';
import { portfolioBanner } from './portfolioBanner';
import { ctaBanner } from './ctaBanner';
import { navigation } from './navigation';
import { footer } from './footer';

export const enContent = {
  businessInfo,
  portfolio,
  hero,
  services,
  demo,
  businessValue,
  portfolioBanner,
  ctaBanner,
  navigation,
  footer,
} as const;

export default enContent;