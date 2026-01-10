'use client';

import { createContext, useContext, ReactNode, useMemo } from 'react';
import {
  LGUType,
  SiteConfig,
  OfficialsConfig,
  SubdivisionsConfig,
  HotlinesConfig,
  HistoryConfig,
  StatisticsConfig,
  LGUTypeLabels,
} from '@/types/config';
import {
  getSiteConfig,
  getOfficialsConfig,
  getSubdivisionsConfig,
  getHotlinesConfig,
  getHistoryConfig,
  getStatisticsConfig,
  getLGUTypeLabels,
  getLGUName,
  getFullLocation,
  configHelpers,
} from '@/lib/config';

interface SiteConfigContextType {
  // Raw configs
  site: SiteConfig;
  officials: OfficialsConfig;
  subdivisions: SubdivisionsConfig;
  hotlines: HotlinesConfig;
  history: HistoryConfig;
  statistics: StatisticsConfig;

  // Derived values
  lguType: LGUType;
  lguName: string;
  fullLocation: string;
  labels: LGUTypeLabels;

  // Helper functions
  getLeaderTitle: () => string;
  getViceLeaderTitle: () => string;
  getLegislativeBody: () => string;
  getLegislativeBodyAbbr: () => string;
  getLegislativeMembers: () => string;
  getSubdivisionType: () => string;
  getSubdivisionTypePlural: () => string;
  getSubdivisionLeader: () => string;
  getDeptPrefix: () => string;
  getHallName: () => string;
  getLGUTypeLabel: () => string;

  // Utility functions
  getSiteTitle: () => string;
  getFullSiteTitle: (_pageTitle?: string) => string;
  getSiteDescription: () => string;
  getVolunteerEmail: () => string;
  getOpenGraphUrl: () => string;
  getMapEmbedUrl: () => string;
  formatPhoneLink: (_phone: string) => string;
}

const SiteConfigContext = createContext<SiteConfigContextType | undefined>(undefined);

export function SiteConfigProvider({ children }: { children: ReactNode }) {
  const contextValue = useMemo(() => {
    const site = getSiteConfig();
    const officials = getOfficialsConfig();
    const subdivisions = getSubdivisionsConfig();
    const hotlines = getHotlinesConfig();
    const history = getHistoryConfig();
    const statistics = getStatisticsConfig();
    const labels = getLGUTypeLabels(site.lguType);
    const lguName = getLGUName(site);
    const fullLocation = getFullLocation(site);

    return {
      // Raw configs
      site,
      officials,
      subdivisions,
      hotlines,
      history,
      statistics,

      // Derived values
      lguType: site.lguType,
      lguName,
      fullLocation,
      labels,

      // LGU Type label helper functions
      getLeaderTitle: () => labels.leaderTitle,
      getViceLeaderTitle: () => labels.viceLeaderTitle,
      getLegislativeBody: () => labels.legislativeBody,
      getLegislativeBodyAbbr: () => labels.legislativeBodyAbbr,
      getLegislativeMembers: () => labels.legislativeMembers,
      getSubdivisionType: () => labels.subdivisionType,
      getSubdivisionTypePlural: () => labels.subdivisionTypePlural,
      getSubdivisionLeader: () => labels.subdivisionLeader,
      getDeptPrefix: () => labels.deptPrefix,
      getHallName: () => labels.hallName,
      getLGUTypeLabel: () => labels.lguTypeLabel,

      // Utility functions
      getSiteTitle: () => configHelpers.getSiteTitle(site),
      getFullSiteTitle: (pageTitle?: string) => configHelpers.getFullSiteTitle(site, pageTitle),
      getSiteDescription: () => configHelpers.getSiteDescription(site),
      getVolunteerEmail: () => configHelpers.getVolunteerEmail(site),
      getOpenGraphUrl: () => configHelpers.getOpenGraphUrl(site),
      getMapEmbedUrl: () => configHelpers.getMapEmbedUrl(site),
      formatPhoneLink: configHelpers.formatPhoneLink,
    };
  }, []);

  return (
    <SiteConfigContext.Provider value={contextValue}>
      {children}
    </SiteConfigContext.Provider>
  );
}

export function useSiteConfig() {
  const context = useContext(SiteConfigContext);
  if (context === undefined) {
    throw new Error('useSiteConfig must be used within a SiteConfigProvider');
  }
  return context;
}

// Export a hook for getting just the labels
export function useLGULabels() {
  const { labels } = useSiteConfig();
  return labels;
}

// Export a hook for getting just the site config
export function useSite() {
  const { site } = useSiteConfig();
  return site;
}

// Export a hook for getting the LGU name and type
export function useLGU() {
  const { lguName, lguType, fullLocation, labels } = useSiteConfig();
  return { lguName, lguType, fullLocation, lguTypeLabel: labels.lguTypeLabel };
}
