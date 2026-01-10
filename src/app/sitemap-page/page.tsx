'use client';

import Link from 'next/link';
import { useSiteConfig } from '@/contexts/SiteConfigContext';

export default function SitemapPage() {
  const { lguName, site, labels } = useSiteConfig();

  const sections = [
    {
      icon: 'bi-house-door',
      title: 'Main Navigation',
      links: [
        { href: '/', label: 'Home' },
        { href: '/services', label: 'Services' },
        { href: '/government', label: 'Government' },
        { href: '/statistics', label: 'Statistics' },
        { href: '/legislative', label: 'Legislative' },
        { href: '/budget', label: 'Transparency' },
        { href: '/contact', label: 'Contact' },
        { href: '/news', label: 'News' },
        { href: '/faq', label: 'FAQ' },
        { href: '/accessibility', label: 'Accessibility' },
      ]
    },
    {
      icon: 'bi-grid-3x3-gap',
      title: 'Service Categories',
      links: [
        { href: '/services/certificates', label: 'Certificates & Vital Records' },
        { href: '/services/business', label: 'Business Services' },
        { href: '/services/social-services', label: 'Social Services' },
        { href: '/services/health', label: 'Health & Wellness' },
        { href: '/services/tax-payments', label: 'Tax & Payments' },
        { href: '/services/agriculture', label: 'Agriculture' },
        { href: '/services/infrastructure', label: 'Infrastructure' },
        { href: '/services/education', label: 'Education' },
        { href: '/services/environment', label: 'Environment' },
        { href: '/services/public-safety', label: 'Public Safety' },
      ]
    },
    {
      icon: 'bi-building',
      title: `${labels.deptPrefix} Offices`,
      cols: 4,
      links: [
        { href: '/service-details/civil-registrar', label: 'Local Civil Registrar' },
        { href: '/service-details/municipal-treasurer', label: "Treasurer's Office" },
        { href: '/service-details/municipal-assessor', label: "Assessor's Office" },
        { href: '/service-details/municipal-budget', label: 'Budget Office' },
        { href: '/service-details/municipal-accounting', label: 'Accounting Office' },
        { href: '/service-details/municipal-engineering', label: 'Engineering Office' },
        { href: '/service-details/municipal-planning', label: 'Planning Office' },
        { href: '/service-details/municipal-agriculture', label: 'Agriculture Office' },
        { href: '/service-details/mswdo-services', label: 'MSWDO' },
        { href: '/service-details/business-permits-licensing', label: 'BPLS Office' },
        { href: '/service-details/general-services', label: 'General Services' },
        { href: '/service-details/human-resource-management', label: 'HR Management' },
      ]
    },
    {
      icon: 'bi-bank',
      title: 'Government & Legislative',
      links: [
        { href: '/government', label: 'Government Structure' },
        { href: '/government/officials', label: 'Elected Officials' },
        { href: '/legislative', label: 'Legislative Documents' },
        { href: '/legislative/ordinance-framework', label: 'Ordinance Framework' },
        { href: '/legislative/resolution-framework', label: 'Resolution Framework' },
      ]
    },
    {
      icon: 'bi-link-45deg',
      title: 'Resources & Legal',
      links: [
        ...(site.social.facebook ? [{ href: site.social.facebook, label: 'Facebook Page', external: true as const }] : []),
        { href: '/terms', label: 'Terms of Use', external: false as const },
        { href: '/privacy', label: 'Privacy Policy', external: false as const },
      ]
    },
  ];

  return (
    <>
      {/* Breadcrumbs */}
      <div className="container mx-auto px-4">
        <nav className="py-4 text-sm text-gray-500" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-primary-600">Home</Link>
          <span className="mx-2">/</span>
          <span aria-current="page" className="text-gray-900">Sitemap</span>
        </nav>
      </div>

      {/* Page Header */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-700 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
              <i className="bi bi-diagram-3-fill"></i> Navigation
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Sitemap</h1>
            <p className="text-lg text-white/90">Navigate all pages and services of Better {lguName}</p>
          </div>
        </div>
      </section>

      {/* Sitemap Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="space-y-8">
            {sections.map((section, sectionIndex) => (
              <div key={sectionIndex} className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
                <div className="flex items-center gap-3 p-6 border-b border-gray-200 bg-gray-50">
                  <span className="w-10 h-10 flex items-center justify-center bg-primary-100 text-primary-600 rounded-lg">
                    <i className={`bi ${section.icon} text-lg`}></i>
                  </span>
                  <h2 className="text-lg font-bold text-gray-900 m-0">{section.title}</h2>
                </div>
                <div className={`p-6 grid gap-3 ${section.cols === 4 ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4' : 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3'}`}>
                  {section.links.map((link, linkIndex) => (
                    'external' in link && link.external ? (
                      <a
                        key={linkIndex}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 p-3 rounded-lg text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                      >
                        <i className="bi bi-box-arrow-up-right text-sm"></i> {link.label}
                      </a>
                    ) : (
                      <Link
                        key={linkIndex}
                        href={link.href}
                        className="flex items-center gap-2 p-3 rounded-lg text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                      >
                        <i className="bi bi-arrow-right text-sm"></i> {link.label}
                      </Link>
                    )
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
