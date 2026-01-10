'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { useSiteConfig } from '@/contexts/SiteConfigContext';

export default function AccessibilityPage() {
  const { t } = useLanguage();
  const { lguName, getVolunteerEmail } = useSiteConfig();
  const volunteerEmail = getVolunteerEmail();

  const features = [
    { icon: 'bi-keyboard', title: 'Keyboard Navigation', desc: 'All functionality available using only a keyboard.' },
    { icon: 'bi-eye', title: 'Screen Reader Support', desc: 'Compatible with JAWS, NVDA, and VoiceOver.' },
    { icon: 'bi-type', title: 'Text Alternatives', desc: 'All images have descriptive alt text.' },
    { icon: 'bi-palette', title: 'Color Contrast', desc: 'Meets WCAG AA contrast requirements.' },
    { icon: 'bi-phone', title: 'Responsive Design', desc: 'Works on all devices and screen sizes.' },
    { icon: 'bi-hourglass-split', title: 'No Time Limits', desc: 'No time limits on reading or interacting.' },
  ];

  return (
    <>
      {/* Breadcrumbs */}
      <div className="container mx-auto px-4">
        <nav className="py-4 text-sm text-gray-500" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-primary-600">Home</Link>
          <span className="mx-2">/</span>
          <span aria-current="page" className="text-gray-900">Accessibility</span>
        </nav>
      </div>

      {/* Page Header */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-700 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
              <i className="bi bi-universal-access"></i> Accessibility
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{t('access-title') || 'Accessibility Statement'}</h1>
            <p className="text-lg text-white/90">{t('access-subtitle') || 'Our commitment to digital accessibility for all citizens'}</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-8">
            {/* Conformance Badge */}
            <div className="flex justify-center">
              <div className="inline-flex items-center gap-4 bg-green-50 border border-green-200 px-6 py-4 rounded-xl">
                <i className="bi bi-check-circle-fill text-3xl text-green-600"></i>
                <div>
                  <span className="block text-xs font-semibold text-green-700 uppercase tracking-wide">WCAG 2.1 Level AA</span>
                  <span className="block text-lg font-bold text-green-800">Conformant</span>
                </div>
              </div>
            </div>

            {/* Commitment */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">{t('access-commitment') || 'Our Commitment'}</h2>
              <p className="text-gray-600 leading-relaxed">Better {lguName} is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.</p>
            </div>

            {/* Features Grid */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">{t('access-features') || 'Accessibility Features'}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="text-center p-4">
                    <i className={`bi ${feature.icon} text-3xl text-primary-600 mb-3 block`}></i>
                    <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-500">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Known Limitations */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">{t('access-limitations') || 'Known Limitations'}</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-600">
                  <i className="bi bi-exclamation-circle text-yellow-500 mt-0.5"></i>
                  <span>Some PDF documents may not be fully accessible to screen readers</span>
                </li>
                <li className="flex items-start gap-3 text-gray-600">
                  <i className="bi bi-exclamation-circle text-yellow-500 mt-0.5"></i>
                  <span>Some third-party embedded content may have accessibility issues</span>
                </li>
              </ul>
            </div>

            {/* Alternative Access */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">{t('access-alternative') || 'Alternative Access'}</h2>
              <p className="text-gray-600 mb-4">If you encounter difficulty accessing any information, contact us:</p>
              <a href={`mailto:${volunteerEmail}`} className="inline-flex items-center gap-3 p-4 bg-primary-50 border border-primary-200 rounded-xl text-primary-700 font-medium hover:bg-primary-100 transition-colors">
                <i className="bi bi-envelope-fill text-xl"></i>
                <span>{volunteerEmail}</span>
              </a>
            </div>

            {/* Technical Specs */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">{t('access-technical') || 'Technical Specifications'}</h2>
              <div className="flex flex-wrap gap-2">
                {['HTML5', 'CSS3', 'JavaScript', 'ARIA'].map(tag => (
                  <span key={tag} className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">{tag}</span>
                ))}
              </div>
            </div>

            {/* Promise Card */}
            <div className="bg-primary-50 border border-primary-200 rounded-2xl p-8 flex items-start gap-4">
              <i className="bi bi-heart-fill text-3xl text-primary-600 shrink-0"></i>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{t('access-promise') || 'Our Promise'}</h3>
                <p className="text-gray-600">Better {lguName} is committed to ensuring that our digital services are accessible to all citizens, regardless of ability. We view accessibility not as a feature, but as a fundamental right.</p>
              </div>
            </div>

            <p className="text-sm text-gray-400 text-center">Last updated: November 29, 2025</p>
          </div>
        </div>
      </section>
    </>
  );
}
