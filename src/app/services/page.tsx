'use client';

import { Suspense } from 'react';
import Link from 'next/link';
import SearchAutocomplete from '@/components/SearchAutocomplete';
import { useLanguage } from '@/contexts/LanguageContext';

function ServicesContent() {
  const { t } = useLanguage();

  const categories = [
    { href: '/services/certificates', icon: 'bi-file-earmark-text-fill', titleKey: 'cat-certificates', descKey: 'cat-certificates-desc' },
    { href: '/services/business', icon: 'bi-shop', titleKey: 'cat-business', descKey: 'cat-business-desc' },
    { href: '/services/social-services', icon: 'bi-people-fill', titleKey: 'cat-social', descKey: 'cat-social-desc' },
    { href: '/services/health', icon: 'bi-heart-pulse-fill', titleKey: 'cat-health', descKey: 'cat-health-desc' },
    { href: '/services/tax-payments', icon: 'bi-cash-coin', titleKey: 'cat-tax', descKey: 'cat-tax-desc' },
    { href: '/services/agriculture', icon: 'bi-tree-fill', titleKey: 'cat-agriculture', descKey: 'cat-agriculture-desc' },
    { href: '/services/infrastructure', icon: 'bi-building-fill-gear', titleKey: 'cat-infrastructure', descKey: 'cat-infrastructure-desc' },
    { href: '/services/education', icon: 'bi-mortarboard-fill', titleKey: 'cat-education', descKey: 'cat-education-desc' },
    { href: '/services/public-safety', icon: 'bi-shield-fill-check', titleKey: 'cat-safety', descKey: 'cat-safety-desc' },
    { href: '/services/environment', icon: 'bi-globe-americas', titleKey: 'cat-environment', descKey: 'cat-environment-desc' },
  ];

  const lifeEvents = [
    { href: '/services/business', icon: 'bi-shop', labelKey: 'life-starting-business' },
    { href: '/services/certificates', icon: 'bi-heart', labelKey: 'life-getting-married' },
    { href: '/services/certificates', icon: 'bi-emoji-smile', labelKey: 'life-having-baby' },
    { href: '/services/social-services', icon: 'bi-wallet2', labelKey: 'life-financial-help' },
    { href: '/services/social-services', icon: 'bi-person-badge', labelKey: 'life-senior' },
    { href: '/services/social-services', icon: 'bi-universal-access', labelKey: 'life-pwd' },
    { href: '/services/infrastructure', icon: 'bi-hammer', labelKey: 'life-building' },
    { href: '/services/public-safety', icon: 'bi-question-circle', labelKey: 'life-trouble' },
  ];

  return (
    <>
      {/* Breadcrumbs */}
      <div className="container mx-auto px-4">
        <nav className="py-4 text-sm text-gray-500" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-primary-600">Home</Link>
          <span className="mx-2">/</span>
          <span aria-current="page" className="text-gray-900">{t('nav-services')}</span>
        </nav>
      </div>

      {/* Page Header */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-700 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
              <i className="bi bi-grid-fill"></i> {t('nav-services')}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{t('services-title')}</h1>
            <p className="text-lg text-white/90 mb-8">{t('services-subtitle')}</p>
            {/* Search Box */}
            <div className="max-w-xl mx-auto">
              <form className="relative" role="search" onSubmit={(e) => e.preventDefault()}>
                <div className="relative flex items-center">
                  <i className="bi bi-search absolute left-4 text-gray-400"></i>
                  <SearchAutocomplete
                    placeholder="Search services (e.g., birth certificate, business permit)"
                    className="w-full pl-12 pr-4 py-4 rounded-xl text-base border-0 shadow-lg focus:ring-2 focus:ring-primary-300"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                className="group flex items-start gap-4 p-6 bg-white border border-gray-200 rounded-xl no-underline text-gray-800 transition-all duration-200 hover:border-primary-500 hover:shadow-lg"
              >
                <div className="w-14 h-14 flex items-center justify-center bg-primary-50 rounded-xl text-primary-600 text-2xl shrink-0 transition-all duration-200 group-hover:bg-primary-600 group-hover:text-white">
                  <i className={`bi ${cat.icon}`}></i>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{t(cat.titleKey)}</h3>
                  <p className="text-sm text-gray-500 mb-3">{t(cat.descKey)}</p>
                  <span className="text-primary-600 font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                    View Services <i className="bi bi-arrow-right"></i>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Browse by Life Event */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{t('life-events-title')}</h2>
            <p className="text-gray-500">{t('life-events-subtitle')}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {lifeEvents.map((event) => (
              <Link
                key={event.labelKey}
                href={event.href}
                className="flex flex-col items-center gap-3 p-6 bg-white border border-gray-200 rounded-xl no-underline text-gray-800 text-center transition-all duration-200 hover:border-primary-500 hover:shadow-md hover:-translate-y-1"
              >
                <i className={`bi ${event.icon} text-3xl text-primary-600`}></i>
                <span className="text-sm font-medium">{t(event.labelKey)}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default function ServicesPage() {
  return (
    <Suspense fallback={<div className="container mx-auto px-4 py-12"><p>Loading...</p></div>}>
      <ServicesContent />
    </Suspense>
  );
}
