'use client';

import Link from 'next/link';
import { useTranslation } from '@/hooks/useTranslation';

interface ServiceCard {
  href: string;
  icon: string;
  titleKey: string;
  descKey: string;
  isViewAll?: boolean;
}

const services: ServiceCard[] = [
  { href: '/services/certificates', icon: 'bi-file-earmark-text-fill', titleKey: 'service-certificates', descKey: 'service-certificates-desc' },
  { href: '/services/business', icon: 'bi-shop', titleKey: 'service-business', descKey: 'service-business-desc' },
  { href: '/services/tax-payments', icon: 'bi-cash-coin', titleKey: 'service-tax', descKey: 'service-tax-desc' },
  { href: '/services/social-services', icon: 'bi-people-fill', titleKey: 'service-social', descKey: 'service-social-desc' },
  { href: '/services/health', icon: 'bi-heart-pulse-fill', titleKey: 'service-health', descKey: 'service-health-desc' },
  { href: '/services', icon: 'bi-grid-fill', titleKey: 'btn-view-all-services', descKey: '', isViewAll: true },
];

export default function PopularServices() {
  const { t } = useTranslation();

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">{t('section-popular')}</h2>
          <p className="text-gray-500">Quick access to frequently requested municipal services</p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link
              key={service.href + service.titleKey}
              href={service.href}
              className={`group flex items-center gap-4 p-6 bg-white border rounded-xl no-underline transition-all duration-200 ${
                service.isViewAll
                  ? 'bg-primary-600 border-transparent text-white hover:shadow-lg'
                  : 'border-gray-200 text-gray-800 hover:border-primary-500 hover:shadow-md'
              }`}
            >
              {/* Icon */}
              <div className={`w-12 h-12 flex items-center justify-center rounded-lg text-xl shrink-0 ${
                service.isViewAll
                  ? 'bg-white/20 text-white'
                  : 'bg-gray-100 text-primary-600'
              }`}>
                <i className={`bi ${service.icon}`} />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h3 className={`text-base font-semibold m-0 mb-1 ${service.isViewAll ? 'text-white' : 'text-gray-900'}`}>
                  {t(service.titleKey)}
                </h3>
                {service.descKey && (
                  <p className={`text-[0.8125rem] m-0 ${service.isViewAll ? 'text-white/80' : 'text-gray-500'}`}>
                    {t(service.descKey)}
                  </p>
                )}
                {service.isViewAll && (
                  <p className="text-[0.8125rem] m-0 text-white/80">Browse complete directory</p>
                )}
              </div>

              {/* Arrow */}
              <i className={`bi bi-arrow-right transition-all duration-200 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 ${
                service.isViewAll ? 'text-white' : 'text-gray-400'
              }`} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
