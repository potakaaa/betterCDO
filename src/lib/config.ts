import {
  LGUType,
  SiteConfig,
  OfficialsConfig,
  SubdivisionsConfig,
  HotlinesConfig,
  HistoryConfig,
  StatisticsConfig,
  TranslationOverrides,
  LGUConfig,
  LGUTypeLabels,
} from '@/types/config';

// Import JSON config files
import siteConfig from '../../config/site.json';
import officialsConfig from '../../config/officials.json';
import subdivisionsConfig from '../../config/subdivisions.json';
import hotlinesConfig from '../../config/hotlines.json';
import historyConfig from '../../config/history.json';
import statisticsConfig from '../../config/statistics.json';
import translationsConfig from '../../config/translations.json';

// LGU Type Labels mapping
const MUNICIPALITY_LABELS: LGUTypeLabels = {
  leaderTitle: 'Mayor',
  viceLeaderTitle: 'Vice Mayor',
  legislativeBody: 'Sangguniang Bayan',
  legislativeBodyAbbr: 'SB',
  legislativeMembers: 'SB Members',
  subdivisionType: 'Barangay',
  subdivisionTypePlural: 'Barangays',
  subdivisionLeader: 'Barangay Captain',
  deptPrefix: 'Municipal',
  hallName: 'Municipal Hall',
  lguTypeLabel: 'Municipality',
};

const PROVINCE_LABELS: LGUTypeLabels = {
  leaderTitle: 'Governor',
  viceLeaderTitle: 'Vice Governor',
  legislativeBody: 'Sangguniang Panlalawigan',
  legislativeBodyAbbr: 'SP',
  legislativeMembers: 'Board Members',
  subdivisionType: 'Municipality/City',
  subdivisionTypePlural: 'Municipalities/Cities',
  subdivisionLeader: 'Mayor',
  deptPrefix: 'Provincial',
  hallName: 'Provincial Capitol',
  lguTypeLabel: 'Province',
};

/**
 * Get the LGU type labels based on the LGU type
 */
export function getLGUTypeLabels(lguType: LGUType): LGUTypeLabels {
  return lguType === 'province' ? PROVINCE_LABELS : MUNICIPALITY_LABELS;
}

/**
 * Get the LGU name based on the LGU type
 * - For municipality: returns the municipality name
 * - For province: returns the province name
 */
export function getLGUName(site: SiteConfig): string {
  return site.lguType === 'province' ? site.province : site.municipality;
}

export function getLGUAcronym(site: SiteConfig): string {
  return site.municipalityAcronym;
}

/**
 * Get the full location string
 * - For municipality: "Municipality, Province"
 * - For province: "Province, Region"
 */
export function getFullLocation(site: SiteConfig): string {
  if (site.lguType === 'province') {
    return `${site.province}, ${site.region}`;
  }
  return `${site.municipality}, ${site.province}`;
}

/**
 * Get the site config with proper typing
 */
export function getSiteConfig(): SiteConfig {
  return siteConfig as SiteConfig;
}

/**
 * Get the officials config with proper typing
 */
export function getOfficialsConfig(): OfficialsConfig {
  return officialsConfig as unknown as OfficialsConfig;
}

/**
 * Get the subdivisions config with proper typing
 */
export function getSubdivisionsConfig(): SubdivisionsConfig {
  return subdivisionsConfig as SubdivisionsConfig;
}

/**
 * Get the hotlines config with proper typing
 */
export function getHotlinesConfig(): HotlinesConfig {
  return hotlinesConfig as HotlinesConfig;
}

/**
 * Get the history config with proper typing
 */
export function getHistoryConfig(): HistoryConfig {
  return historyConfig as HistoryConfig;
}

/**
 * Get the statistics config with proper typing
 */
export function getStatisticsConfig(): StatisticsConfig {
  return statisticsConfig as StatisticsConfig;
}

/**
 * Get the translation overrides with proper typing
 */
export function getTranslationOverrides(): TranslationOverrides {
  return translationsConfig as TranslationOverrides;
}

/**
 * Get the complete LGU configuration bundle
 */
export function getLGUConfig(): LGUConfig {
  return {
    site: getSiteConfig(),
    officials: getOfficialsConfig(),
    subdivisions: getSubdivisionsConfig(),
    hotlines: getHotlinesConfig(),
    history: getHistoryConfig(),
    statistics: getStatisticsConfig(),
    translations: getTranslationOverrides(),
  };
}

/**
 * Helper functions for common config operations
 */
export const configHelpers = {
  /**
   * Get the site title for metadata
   */
  getSiteTitle: (site: SiteConfig): string => {
    const lguName = getLGUName(site);
    return `Better${lguName}.org`;
  },

  /**
   * Get the full site title with suffix
   */
  getFullSiteTitle: (site: SiteConfig, pageTitle?: string): string => {
    const siteTitle = configHelpers.getSiteTitle(site);
    return pageTitle ? `${pageTitle} | ${siteTitle}` : `${siteTitle} | Official Portal`;
  },

  /**
   * Get the site description for metadata
   */
  getSiteDescription: (site: SiteConfig): string => {
    const lguName = getLGUName(site);
    const labels = getLGUTypeLabels(site.lguType);
    return `Better${lguName}.org - Your digital gateway to LGU ${lguName} services. Access ${labels.lguTypeLabel.toLowerCase()} services, information, and resources.`;
  },

  /**
   * Get the volunteer email
   */
  getVolunteerEmail: (site: SiteConfig): string => {
    const lguName = getLGUName(site).toLowerCase();
    return `volunteer@better${lguName}.org`;
  },

  /**
   * Get the OpenGraph URL
   */
  getOpenGraphUrl: (site: SiteConfig): string => {
    return `https://${site.domain}/`;
  },

  /**
   * Get the map embed URL
   */
  getMapEmbedUrl: (site: SiteConfig): string => {
    const { lat, lng } = site.coordinates;
    const bbox = `${lng - 0.02},${lat - 0.015},${lng + 0.02},${lat + 0.015}`;
    return `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat},${lng}`;
  },

  /**
   * Format a phone number for tel: links
   */
  formatPhoneLink: (phone: string): string => {
    return phone.replace(/[\s()-]/g, '');
  },
};

// Export configs directly for convenience
export const site = getSiteConfig();
export const officials = getOfficialsConfig();
export const subdivisions = getSubdivisionsConfig();
export const hotlines = getHotlinesConfig();
export const history = getHistoryConfig();
export const statistics = getStatisticsConfig();
export const translations = getTranslationOverrides();
export const labels = getLGUTypeLabels(site.lguType);
export const lguName = getLGUName(site);
