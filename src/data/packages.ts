import { GuestPriceItem, GroupPackage } from '../types';

export const GUEST_PRICES: GuestPriceItem[] = [
  {
    price: '₹300',
    title: 'Simple Front Hand',
    description: 'Elegant & Light Design',
    badge: 'Standard'
  },
  {
    price: '₹500',
    title: 'Front Hand + Back Hand',
    description: 'Balanced & Stylish Design',
    badge: 'Popular'
  },
  {
    price: '₹700',
    title: 'Heavy Front Hand',
    description: 'Rich & Beautiful Design',
    badge: 'Festive'
  },
  {
    price: '₹1,000',
    title: 'Front + Back Hand Heavy Design',
    description: 'Traditional & Trendy Look',
    badge: 'Celebration'
  },
  {
    price: '₹1,500',
    title: 'Full Hand Mehndi (Both Hands)',
    description: 'Full Coverage & Detailed Work',
    badge: 'Signature'
  },
  {
    price: '₹2,000+',
    title: 'Premium / Customized Guest Mehndi',
    description: 'As per Your Choice & Design',
    badge: 'Bespoke'
  }
];

export const GROUP_PACKAGES_20: GroupPackage[] = [
  {
    name: 'BASIC',
    price: '₹5,999',
    guests: '20 Guests',
    features: [
      'Simple Guest Mehndi',
      '₹300 वाले डिज़ाइन के हिसाब से',
      'Beautiful & Elegant Designs',
      '100% Natural Mehndi'
    ],
    isPopular: false
  },
  {
    name: 'PREMIUM',
    price: '₹7,999',
    guests: '20 Guests',
    features: [
      'Front Hand + Selected Back Hand Designs',
      '₹500–₹700 Range Designs',
      'Stylish & Beautiful Patterns',
      '100% Natural Mehndi'
    ],
    isPopular: true
  },
  {
    name: 'ROYAL',
    price: '₹9,999',
    guests: '20 Guests',
    features: [
      'Premium Guest Mehndi',
      'Heavy & Customized Designs',
      'Front + Back Hand Options',
      'Beautiful & Long-Lasting Colour',
      'Home Service Available'
    ],
    isPopular: false
  }
];

export const PACKAGE_30_GUESTS = {
  title: '30 Guests — Custom Package',
  note: 'Tailored for larger gatherings, mehendi parties & sangeet functions.',
  ctaText: 'Get Custom Quote'
};
