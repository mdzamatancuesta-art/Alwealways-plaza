export type Category =
  | 'Fashion'
  | 'Dining'
  | 'Electronics'
  | 'Grocery'
  | 'Health & Beauty'
  | 'Entertainment'
  | 'Services'
  | 'Home'

export interface Store {
  id: string
  name: string
  category: Category
  floor: number
  unit: string
  /** Short tagline shown on the card. */
  blurb: string
  /** Opening time in 24h "HH:MM" and closing time in 24h "HH:MM". */
  opens: string
  closes: string
  phone?: string
}

export const CATEGORIES: Category[] = [
  'Fashion',
  'Dining',
  'Electronics',
  'Grocery',
  'Health & Beauty',
  'Entertainment',
  'Services',
  'Home',
]

/** Emoji glyph used as a lightweight logo per category. */
export const CATEGORY_ICON: Record<Category, string> = {
  Fashion: '👗',
  Dining: '🍽️',
  Electronics: '💻',
  Grocery: '🛒',
  'Health & Beauty': '💅',
  Entertainment: '🎬',
  Services: '🛠️',
  Home: '🛋️',
}

export const STORES: Store[] = [
  {
    id: 'urban-thread',
    name: 'Urban Thread',
    category: 'Fashion',
    floor: 1,
    unit: 'A-104',
    blurb: 'Contemporary everyday wear for men and women.',
    opens: '10:00',
    closes: '21:00',
    phone: '(555) 0101',
  },
  {
    id: 'lumière-boutique',
    name: 'Lumière Boutique',
    category: 'Fashion',
    floor: 2,
    unit: 'B-210',
    blurb: 'Curated designer pieces and evening wear.',
    opens: '11:00',
    closes: '20:00',
    phone: '(555) 0102',
  },
  {
    id: 'the-copper-pot',
    name: 'The Copper Pot',
    category: 'Dining',
    floor: 3,
    unit: 'F-301',
    blurb: 'Seasonal comfort food and slow-cooked classics.',
    opens: '08:00',
    closes: '22:00',
    phone: '(555) 0201',
  },
  {
    id: 'sakura-ramen',
    name: 'Sakura Ramen Bar',
    category: 'Dining',
    floor: 3,
    unit: 'F-308',
    blurb: 'Handmade noodles and rich tonkotsu broth.',
    opens: '11:00',
    closes: '23:00',
    phone: '(555) 0202',
  },
  {
    id: 'bean-and-bloom',
    name: 'Bean & Bloom',
    category: 'Dining',
    floor: 1,
    unit: 'A-118',
    blurb: 'Specialty coffee, pastries, and a quiet corner.',
    opens: '07:00',
    closes: '20:00',
  },
  {
    id: 'pulse-electronics',
    name: 'Pulse Electronics',
    category: 'Electronics',
    floor: 2,
    unit: 'B-225',
    blurb: 'Phones, laptops, and smart-home gear.',
    opens: '10:00',
    closes: '21:00',
    phone: '(555) 0301',
  },
  {
    id: 'soundwave-audio',
    name: 'Soundwave Audio',
    category: 'Electronics',
    floor: 2,
    unit: 'B-231',
    blurb: 'Headphones, speakers, and studio gear.',
    opens: '10:00',
    closes: '21:00',
  },
  {
    id: 'fresh-market',
    name: 'Fresh Market Co.',
    category: 'Grocery',
    floor: 1,
    unit: 'A-101',
    blurb: 'Everyday groceries, produce, and local goods.',
    opens: '07:00',
    closes: '22:00',
    phone: '(555) 0401',
  },
  {
    id: 'glow-beauty',
    name: 'Glow Beauty Lab',
    category: 'Health & Beauty',
    floor: 2,
    unit: 'B-204',
    blurb: 'Skincare, cosmetics, and walk-in makeovers.',
    opens: '10:00',
    closes: '20:00',
    phone: '(555) 0501',
  },
  {
    id: 'vitality-pharmacy',
    name: 'Vitality Pharmacy',
    category: 'Health & Beauty',
    floor: 1,
    unit: 'A-109',
    blurb: 'Prescriptions, wellness, and health advice.',
    opens: '08:00',
    closes: '21:00',
    phone: '(555) 0502',
  },
  {
    id: 'starlight-cinema',
    name: 'Starlight Cinema',
    category: 'Entertainment',
    floor: 4,
    unit: 'E-401',
    blurb: 'Six screens, recliner seating, latest releases.',
    opens: '12:00',
    closes: '23:30',
    phone: '(555) 0601',
  },
  {
    id: 'level-up-arcade',
    name: 'Level Up Arcade',
    category: 'Entertainment',
    floor: 4,
    unit: 'E-410',
    blurb: 'Classic cabinets, VR, and prize redemption.',
    opens: '11:00',
    closes: '23:00',
  },
  {
    id: 'swift-tailor',
    name: 'Swift Tailor & Alterations',
    category: 'Services',
    floor: 2,
    unit: 'B-240',
    blurb: 'Same-day alterations and custom fitting.',
    opens: '09:00',
    closes: '19:00',
    phone: '(555) 0701',
  },
  {
    id: 'plaza-bank',
    name: 'Plaza Community Bank',
    category: 'Services',
    floor: 1,
    unit: 'A-115',
    blurb: 'Full-service branch and 24h ATM.',
    opens: '09:00',
    closes: '17:00',
    phone: '(555) 0702',
  },
  {
    id: 'nest-home',
    name: 'Nest Home & Living',
    category: 'Home',
    floor: 3,
    unit: 'F-320',
    blurb: 'Furniture, décor, and kitchen essentials.',
    opens: '10:00',
    closes: '21:00',
    phone: '(555) 0801',
  },
  {
    id: 'green-thumb',
    name: 'Green Thumb Plants',
    category: 'Home',
    floor: 3,
    unit: 'F-326',
    blurb: 'Houseplants, pots, and plant-care supplies.',
    opens: '10:00',
    closes: '20:00',
  },
]
