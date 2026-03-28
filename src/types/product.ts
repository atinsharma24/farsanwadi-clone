export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviewCount: number;
  image: string;
  category: string;
  badge?: string;
  description?: string;
  flavours?: string[];
  weight?: string;
  urgencyText?: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
  avatar?: string;
  location?: string;
}

export interface TasteCategory {
  id: string;
  name: string;
  slug: string;
  image: string;
  color: string;
}

export interface OccasionCategory {
  id: string;
  name: string;
  slug: string;
  image: string;
  description: string;
}

export interface TrustStat {
  label: string;
  value: string;
  suffix: string;
}
