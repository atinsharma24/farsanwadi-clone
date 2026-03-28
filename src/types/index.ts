export interface Product {
  id: string;
  name: string;
  image: string;
  originalPrice: number;
  salePrice: number;
  rating: number;
  reviewCount: number;
  href: string;
}

export interface Category {
  name: string;
  image: string;
  href: string;
}

export interface CarouselSlide {
  image: string;
  href: string;
  alt: string;
}

export interface Testimonial {
  name: string;
  location: string;
  review: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Benefit {
  icon: string;
  label: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}
