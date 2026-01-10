import type { Metadata, Viewport } from 'next';
import './globals.css';
import React from 'react';
import HotlineBar from '@/components/layout/HotlineBar';
import Header from '@/components/layout/Header';
import InfoBar from '@/components/layout/InfoBar';
import Footer from '@/components/layout/Footer';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { SiteConfigProvider } from '@/contexts/SiteConfigContext';
import {
  site,
  lguName,
  labels,
  configHelpers
} from '@/lib/config';

export const viewport: Viewport = {
  themeColor: site.themeColor,
};

const siteTitle = configHelpers.getSiteTitle(site);
const siteDescription = configHelpers.getSiteDescription(site);
const openGraphUrl = configHelpers.getOpenGraphUrl(site);

export const metadata: Metadata = {
  title: {
    default: `${siteTitle} | Official Portal`,
    template: `%s | ${siteTitle}`
  },
  description: siteDescription,
  keywords: [
    siteTitle,
    `${lguName} ${site.province}`,
    `LGU ${lguName}`,
    `${labels.lguTypeLabel.toLowerCase()} services`,
    site.province,
    site.region,
  ],
  authors: [{ name: 'BetterGov Community' }],
  openGraph: {
    type: 'website',
    locale: 'en_PH',
    url: openGraphUrl,
    siteName: siteTitle,
    title: `${siteTitle} | Official Portal`,
    description: `Empowering the people of ${lguName} with transparent access to services.`,
    images: [{ url: `${openGraphUrl}assets/images/banners/opengraph.png`, width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image' },
  icons: {
    icon: site.logo?.favicon || '/assets/images/logo/favicon.svg',
    apple: site.logo?.favicon || '/assets/images/logo/favicon.svg'
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css" />
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
      </head>
      <body>
        <SiteConfigProvider>
          <LanguageProvider>
            <a href="#main-content" className="skip-link">Skip to main content</a>
            <HotlineBar />
            <Header />
            <InfoBar />
            <main id="main-content">{children}</main>
            <Footer />
          </LanguageProvider>
        </SiteConfigProvider>
      </body>
    </html>
  );
}
