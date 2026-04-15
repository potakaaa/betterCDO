// LGU Type - Municipality or Province
export type LGUType = 'municipality' | 'province';

// Site Configuration
export interface SiteConfig {
  lguType: LGUType;
  municipality: string;
  municipalityAcronym: string;
  province: string;
  region: string;
  siteId: string;
  domain: string;
  tagline: string;
  themeColor: string;
  contact: ContactInfo;
  social: SocialLinks;
  coordinates: Coordinates;
  logo?: LogoConfig;
}

export interface ContactInfo {
  phone: string;
  mobile?: string;
  email: string;
  address: string;
  postalCode?: string;
}

export interface SocialLinks {
  facebook?: string;
  twitter?: string;
  instagram?: string;
  linkedin?: string;
  youtube?: string;
  discord?: string;
  github?: string;
}

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface LogoConfig {
  main: string;
  white: string;
  favicon: string;
}

// Officials Configuration
export interface OfficialsConfig {
  executive: ExecutiveOfficial[];
  legislative: LegislativeOfficial[];
  departments: DepartmentHead[];
}

export interface ExecutiveOfficial {
  id: string;
  name: string;
  position: 'mayor' | 'vice_mayor' | 'governor' | 'vice_governor';
  title: string;
  email?: string;
  phone?: string;
  image?: string;
}

export interface LegislativeOfficial {
  id: string;
  name: string;
  position: 'sb_member' | 'board_member' | 'liga_president' | 'sk_president' | 'ipmr';
  title: string;
  committees?: string;
  email?: string;
  phone?: string;
  image?: string;
}

export interface DepartmentHead {
  id: string;
  slug: string;
  name: string;
  department: string;
  abbreviation: string;
  description: string;
  icon: string;
  email?: string;
  phone?: string;
  services?: string;
}

// Subdivisions Configuration (Barangays for Municipality, Municipalities/Cities for Province)
export interface SubdivisionsConfig {
  type: 'barangay' | 'municipality' | 'city';
  count: number;
  items: Subdivision[];
}

export interface Subdivision {
  id: string;
  name: string;
  leader: string;
  leaderTitle: string;
  phone?: string;
  email?: string;
  population?: number;
}

// Hotlines Configuration
export interface HotlinesConfig {
  emergency: Hotline[];
  medical: Hotline[];
  government: Hotline[];
  utilities?: Hotline[];
}

export interface Hotline {
  id: string;
  name: string;
  number: string;
  icon: string;
  category?: string;
}

// History Configuration
export interface HistoryConfig {
  timeline: TimelineEvent[];
  facts: HistoricalFact[];
}

export interface TimelineEvent {
  year: string;
  title?: string;
  description: string;
}

export interface HistoricalFact {
  id: string;
  title: string;
  description: string;
  icon: string;
}

// Statistics Configuration
export interface StatisticsConfig {
  population: PopulationStat;
  landArea: LandAreaStat;
  subdivisions: SubdivisionStat;
  incomeClass: IncomeClassStat;
  additionalStats?: AdditionalStat[];
}

export interface PopulationStat {
  count: number;
  year: number;
  source: string;
}

export interface LandAreaStat {
  value: number;
  unit: string;
  source?: string;
}

export interface SubdivisionStat {
  count: number;
  type: string;
  source?: string;
}

export interface IncomeClassStat {
  class: string;
  description: string;
  source?: string;
}

export interface AdditionalStat {
  id: string;
  label: string;
  value: string;
  icon: string;
  source?: string;
}

// Translation Overrides
export interface TranslationOverrides {
  en?: Record<string, string>;
  fil?: Record<string, string>;
  ilo?: Record<string, string>;
}

// Complete Config Bundle
export interface LGUConfig {
  site: SiteConfig;
  officials: OfficialsConfig;
  subdivisions: SubdivisionsConfig;
  hotlines: HotlinesConfig;
  history: HistoryConfig;
  statistics: StatisticsConfig;
  translations?: TranslationOverrides;
}

// LGU Type Labels - returns proper terminology based on LGU type
export interface LGUTypeLabels {
  leaderTitle: string;           // "Mayor" or "Governor"
  viceLeaderTitle: string;       // "Vice Mayor" or "Vice Governor"
  legislativeBody: string;       // "Sangguniang Bayan" or "Sangguniang Panlalawigan"
  legislativeBodyAbbr: string;   // "SB" or "SP"
  legislativeMembers: string;    // "SB Members" or "Board Members"
  subdivisionType: string;       // "Barangay" or "Municipality/City"
  subdivisionTypePlural: string; // "Barangays" or "Municipalities/Cities"
  subdivisionLeader: string;     // "Barangay Captain" or "Mayor"
  deptPrefix: string;            // "Municipal" or "Provincial"
  hallName: string;              // "Municipal Hall" or "Provincial Capitol"
  lguTypeLabel: string;          // "Municipality" or "Province"
}

// Helper type for getting LGU name based on type
export type LGUName<T extends LGUType> = T extends 'municipality' ? string : string;
