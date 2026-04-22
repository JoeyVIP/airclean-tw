export interface NavLink {
  label: string;
  href: string;
}

export interface HeroSlide {
  image: string;
  title: string;
  subtitle: string;
  description: string;
  cta_primary: string;
  cta_secondary: string;
}

export interface StatItem {
  number: string;
  label: string;
}

export interface ActivityItem {
  date: string;
  title: string;
  location: string;
  description: string;
  image: string;
  tag: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
}

export interface NewsItem {
  id: string;
  date: string;
  category: string;
  title: string;
  excerpt: string;
  image: string;
  slug: string;
}

export interface TeamMember {
  name: string;
  title: string;
  bio: string;
}

export interface Value {
  icon: string;
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ShopItem {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  tag: string;
}
