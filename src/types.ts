export type MehndiCategoryId = 
  | 'leg-mehndi-bridal'
  | 'customized-bridal-mehndi'
  | 'engagement-mehndi'
  | 'guest-arabic-mehndi'
  | 'mandala-mehndi'
  | 'rajasthani-mehndi'
  | 'indian-mehndi'
  | 'traditional-mehndi';

export interface MehndiCategory {
  id: MehndiCategoryId;
  name: string;
  shortDesc: string;
  tagline: string;
  highlights: string[];
  idealFor: string;
}

export interface GuestPriceItem {
  price: string;
  title: string;
  description: string;
  badge?: string;
}

export interface GroupPackage {
  name: string;
  price: string;
  guests: string;
  features: string[];
  isPopular?: boolean;
}

export interface ReviewItem {
  name: string;
  quote: string;
  initials: string;
}
