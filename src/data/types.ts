// Type definitions for hotel/village data

export interface Bilingual {
  it: string;
  en: string;
}

export interface HoursCard {
  icon: string;
  title: string;
  titleEn: string;
  rows: Array<{
    label: string;
    labelEn: string;
    value: string;
  }>;
}

export interface ServiceFeature {
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  image: string; // path under /hotels/<slug>/pics/
}

export interface BenefitCard {
  icon: string;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn?: string;
  wide?: boolean;
}

export interface RuleItem {
  titleIt: string;
  descriptionIt: string;
  descriptionEn: string;
}

export interface IconHighlight {
  icon: string;
  title: string;
  titleEn: string;
  description: string;
}

export interface ContactNumber {
  label: string;
  value: string;
  phone?: string;
}

export interface PdfLink {
  label: string;
  labelEn: string;
  url: string;
}

export interface Hotel {
  slug: string;
  name: string;
  brand: string; // e.g. "Gitavillage", "The Caesar"
  shortName: string;
  type: "village" | "resort" | "agriturismo" | "camping";
  location: string;
  region: string;
  tagline: Bilingual;
  description: Bilingual;
  badge: string; // emoji + location text for hero
  heroImage: string;
  heroSubtitle: Bilingual;
  introLabel: string; // "Benvenuti · Welcome"
  introTitleIt: string;
  introTitleEm: string; // em word
  introTitleAfter?: string;
  highlights: IconHighlight[];
  services: ServiceFeature[];
  hours: HoursCard[];
  benefits: BenefitCard[];
  gallery: string[];
  rules: RuleItem[];
  contacts: {
    website?: string;
    email?: string;
    mainPhone?: string;
    numbers: ContactNumber[];
  };
  pdfs: PdfLink[];
  bookingUrl?: string;
  colorAccent?: string; // optional tint
  cardImage?: string;
  // Theme color variant for each hotel
  theme?: "ocean" | "pine" | "sunset" | "sand";
}

export interface HotelSummary {
  slug: string;
  name: string;
  brand: string;
  location: string;
  tagline: string;
  image: string;
}
