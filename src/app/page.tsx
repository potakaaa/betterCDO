'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { useSiteConfig } from '@/contexts/SiteConfigContext';
import { Hero, PopularServices, QuickStats, WeatherMap, History } from '@/components/home';

export default function HomePage() {
  const { t } = useLanguage();
  const {
    site,
    lguName,
    fullLocation,
    labels,
    officials,
    getLeaderTitle,
    getViceLeaderTitle,
    getHallName,
    formatPhoneLink,
  } = useSiteConfig();

  // Get executive officials (mayor/governor and vice)
  const leader = officials.executive.find(o => o.position === 'mayor' || o.position === 'governor');
  const viceLeader = officials.executive.find(o => o.position === 'vice_mayor' || o.position === 'vice_governor');

  return (
    <>
      {/* Hero Section - Uses migrated component */}
      <Hero />

      {/* Popular Services - Uses migrated component */}
      <PopularServices />

      {/* Quick Stats - Uses migrated component */}
      <QuickStats />

      {/* Weather & Map - Uses migrated component */}
      <WeatherMap />

      {/* Brief History - Uses migrated component */}
      <History />

      {/* Latest Updates */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{t('section-updates')}</h2>
            </div>
            <Link href="/news" className="text-primary-600 font-medium flex items-center gap-1 hover:underline">
              <span>{t('btn-view-all')}</span> <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <article className="bg-white border border-gray-200 rounded-xl p-6 transition-all duration-200 hover:border-primary-500 hover:shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">Announcement</span>
                <span className="text-gray-400 text-sm">Coming Soon</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                <Link href="/news" className="hover:text-primary-600 transition-colors">Latest Announcements</Link>
              </h3>
              <p className="text-gray-500 text-sm">Stay tuned for the latest news and announcements from {lguName}.</p>
            </article>
            <article className="bg-white border border-gray-200 rounded-xl p-6 transition-all duration-200 hover:border-primary-500 hover:shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">Project</span>
                <span className="text-gray-400 text-sm">Coming Soon</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                <Link href="/news" className="hover:text-primary-600 transition-colors">Infrastructure Projects</Link>
              </h3>
              <p className="text-gray-500 text-sm">Updates on ongoing and upcoming infrastructure projects in {lguName}.</p>
            </article>
            <article className="bg-white border border-gray-200 rounded-xl p-6 transition-all duration-200 hover:border-primary-500 hover:shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-yellow-100 text-yellow-700 text-xs font-semibold px-3 py-1 rounded-full">Advisory</span>
                <span className="text-gray-400 text-sm">Coming Soon</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                <Link href="/news" className="hover:text-primary-600 transition-colors">Public Advisories</Link>
              </h3>
              <p className="text-gray-500 text-sm">Important advisories and notices for residents of {lguName}.</p>
            </article>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <h2 className="text-2xl font-bold text-gray-900">{t('section-leadership')}</h2>
            <Link href="/government" className="text-primary-600 font-medium flex items-center gap-1 hover:underline">
              <span>{t('btn-view-officials')}</span> <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Leader Card */}
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden transition-all duration-200 hover:border-primary-500 hover:shadow-md">
              <div className="bg-primary-600 text-white p-6 text-center">
                <span className="inline-block bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full mb-2 uppercase tracking-wide">
                  {labels.lguTypeLabel} {getLeaderTitle()}
                </span>
                <h3 className="text-xl font-semibold">{leader?.name ? `Hon. ${leader.name}` : 'To be updated'}</h3>
              </div>
              <div className="p-6 space-y-3">
                {leader?.email && (
                  <a href={`mailto:${leader.email}`} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors">
                    <i className="bi bi-envelope text-primary-600"></i> {leader.email}
                  </a>
                )}
                {leader?.phone && (
                  <a href={`tel:${formatPhoneLink(leader.phone)}`} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors">
                    <i className="bi bi-telephone text-primary-600"></i> {leader.phone}
                  </a>
                )}
              </div>
            </div>

            {/* Vice Leader Card */}
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden transition-all duration-200 hover:border-primary-500 hover:shadow-md">
              <div className="bg-primary-600 text-white p-6 text-center">
                <span className="inline-block bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full mb-2 uppercase tracking-wide">
                  {labels.lguTypeLabel} {getViceLeaderTitle()}
                </span>
                <h3 className="text-xl font-semibold">{viceLeader?.name ? `Hon. ${viceLeader.name}` : 'To be updated'}</h3>
              </div>
              <div className="p-6 space-y-3">
                {viceLeader?.email && (
                  <a href={`mailto:${viceLeader.email}`} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors">
                    <i className="bi bi-envelope text-primary-600"></i> {viceLeader.email}
                  </a>
                )}
                {viceLeader?.phone && (
                  <a href={`tel:${formatPhoneLink(viceLeader.phone)}`} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors">
                    <i className="bi bi-telephone text-primary-600"></i> {viceLeader.phone}
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <h2 className="text-2xl font-bold text-gray-900">{t('section-contact')}</h2>
            <Link href="/contact" className="text-primary-600 font-medium flex items-center gap-1 hover:underline">
              {t('btn-view-all')} <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {site.contact.phone && (
              <a href={`tel:${formatPhoneLink(site.contact.phone)}`} className="group flex items-start gap-4 p-6 bg-white border border-gray-200 rounded-xl no-underline text-gray-800 transition-all duration-200 hover:border-primary-500 hover:shadow-md">
                <div className="w-11 h-11 flex items-center justify-center bg-primary-600 text-white rounded-lg text-lg shrink-0">
                  <i className="bi bi-telephone-fill"></i>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">{t('contact-phone')}</h3>
                  <p className="text-base font-semibold text-gray-900 mb-1">{site.contact.phone}</p>
                  <span className="text-xs text-gray-500">{t('contact-hours')}</span>
                </div>
              </a>
            )}
            {site.contact.email && (
              <a href={`mailto:${site.contact.email}`} className="group flex items-start gap-4 p-6 bg-white border border-gray-200 rounded-xl no-underline text-gray-800 transition-all duration-200 hover:border-primary-500 hover:shadow-md">
                <div className="w-11 h-11 flex items-center justify-center bg-primary-600 text-white rounded-lg text-lg shrink-0">
                  <i className="bi bi-envelope-fill"></i>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">{t('contact-email')}</h3>
                  <p className="text-base font-semibold text-gray-900 mb-1">{site.contact.email}</p>
                  <span className="text-xs text-gray-500">{t('contact-response')}</span>
                </div>
              </a>
            )}
            <div className="flex items-start gap-4 p-6 bg-white border border-gray-200 rounded-xl">
              <div className="w-11 h-11 flex items-center justify-center bg-primary-600 text-white rounded-lg text-lg shrink-0">
                <i className="bi bi-geo-alt-fill"></i>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">{t('contact-address')}</h3>
                <p className="text-base font-semibold text-gray-900 mb-1">{getHallName()}</p>
                <span className="text-xs text-gray-500">{fullLocation} {site.contact.postalCode}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
