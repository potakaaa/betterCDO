'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { useSiteConfig } from '@/contexts/SiteConfigContext';

export default function FAQPage() {
  const { t } = useLanguage();
  const { lguName, getSiteTitle, getVolunteerEmail, getHallName } = useSiteConfig();
  const siteTitle = getSiteTitle();
  const volunteerEmail = getVolunteerEmail();
  const hallName = getHallName();

  const faqCategories = [
    {
      icon: 'bi-info-circle-fill',
      title: t('faq-general') || 'General Questions',
      items: [
        { q: `What are the office hours of the ${hallName}?`, a: `The ${hallName} is open Monday to Friday, 8:00 AM to 5:00 PM, with a lunch break from 12:00 PM to 1:00 PM. We are closed on weekends and national/local holidays.` },
        { q: 'How can I contact a specific municipal office?', a: 'Visit our <a href="/government">Government Directory</a> page to find contact information for all municipal offices and department heads.' },
        { q: 'Can I request services online?', a: 'Currently, most services require in-person applications. However, we are working on implementing online services for select transactions. Check individual service pages for updates.' },
      ]
    },
    {
      icon: 'bi-file-earmark-text-fill',
      title: t('faq-certificates') || 'Certificates & Documents',
      items: [
        { q: 'How long does it take to get a birth certificate?', a: `For birth certificates registered in ${lguName}, it typically takes 15-30 minutes while you wait, provided the record is readily available.` },
        { q: 'Can someone else request my certificate for me?', a: 'Yes, but they must bring: an authorization letter signed by you, valid ID of both you and the representative, and a photocopy of your valid ID.' },
        { q: 'What is the difference between PSA and local civil registrar certificates?', a: 'Both are certified true copies. PSA certificates are the nationally-recognized version required for passport and visa applications. Local civil registrar certificates are accepted for most local transactions and are often processed faster.' },
      ]
    },
    {
      icon: 'bi-shop',
      title: t('faq-business') || 'Business & Permits',
      items: [
        { q: 'When should I renew my business permit?', a: 'Business permits must be renewed annually, preferably in January. The deadline for penalty-free renewal is typically January 20th of each year.' },
        { q: `What do I need to start a new business in ${lguName}?`, a: 'To start a new business, you\'ll need: DTI Registration (for sole proprietorship) or SEC Registration (for corporation), Barangay Clearance, Community Tax Certificate (Cedula), Location Sketch/Map, and Contract of Lease (if renting). Visit our <a href="/services/business">Business Permit page</a> for complete details.' },
      ]
    },
    {
      icon: 'bi-cash-coin',
      title: t('faq-payments') || 'Payments & Fees',
      items: [
        { q: 'What payment methods are accepted?', a: 'Currently, we accept cash payments at the Municipal Treasurer\'s Office. We are working on implementing online payment options for taxes and fees.' },
        { q: 'How can I pay my real property tax?', a: `Visit the Municipal Treasurer's Office at the ${hallName} with your Tax Declaration or latest Official Receipt. Payment is in cash. Property taxes are due quarterly, but you may pay annually to avail of discounts.` },
      ]
    },
    {
      icon: 'bi-people-fill',
      title: t('faq-social') || 'Social Services',
      items: [
        { q: 'How do I apply for a Senior Citizen ID?', a: 'Go to the Municipal Social Welfare and Development Office (MSWDO) with: Birth Certificate or any valid ID showing your age (60 and above), 1x1 ID photo, and Barangay Residence Certificate. The ID is issued for free.' },
        { q: 'What benefits do senior citizens receive?', a: 'Senior citizens enjoy 20% discount and VAT exemption on purchases (with a minimum purchase amount per establishment), priority lanes, and access to special programs and medical assistance from the municipality.' },
      ]
    },
    {
      icon: 'bi-gear-fill',
      title: t('faq-technical') || 'Technical Questions',
      items: [
        { q: 'I found a broken link or error on this website. How do I report it?', a: `Thank you for helping us improve! Please send us message at <a href="mailto:${volunteerEmail}">${volunteerEmail}</a> and write "Website Issue" as the subject. Describe the problem and include the page URL if possible.` },
        { q: 'Is this website mobile-friendly?', a: `Yes! Better ${lguName} is fully responsive and optimized for mobile phones, tablets, and desktop computers.` },
      ]
    },
    {
      icon: 'bi-person-badge-fill',
      title: 'About This Project',
      items: [
        { q: `Who developed ${siteTitle}?`, a: `This website is based on the <a href="https://github.com/BetterSolano/bettersolano" target="_blank" rel="noopener noreferrer">BetterSolano</a> project, originally developed by <a href="https://ramonloganjr.com/" target="_blank" rel="noopener noreferrer">Ramon Logan Jr.</a> as part of the <a href="https://bettergov.ph" target="_blank" rel="noopener noreferrer">BetterGov.ph</a> civic-tech initiative. The project is open source under MIT | CC BY 1.0 to empower community-driven development.` },
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
          <span aria-current="page" className="text-gray-900">FAQ</span>
        </nav>
      </div>

      {/* Page Header */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-700 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
              <i className="bi bi-question-circle-fill"></i> FAQ
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{t('faq-title') || 'Frequently Asked Questions'}</h1>
            <p className="text-lg text-white/90">{t('faq-subtitle') || 'Find answers to common questions about municipal services'}</p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-8">
            {faqCategories.map((category, catIndex) => (
              <div key={catIndex} className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
                <div className="flex items-center gap-3 p-6 border-b border-gray-200 bg-gray-50">
                  <i className={`bi ${category.icon} text-2xl text-primary-600`}></i>
                  <h2 className="text-xl font-bold text-gray-900 m-0">{category.title}</h2>
                </div>
                <div className="divide-y divide-gray-100">
                  {category.items.map((item, itemIndex) => (
                    <details key={itemIndex} className="group">
                      <summary className="flex items-center justify-between cursor-pointer p-6 text-left font-medium text-gray-900 hover:bg-gray-50 transition-colors">
                        <span>{item.q}</span>
                        <i className="bi bi-chevron-down text-gray-400 transition-transform group-open:rotate-180"></i>
                      </summary>
                      <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                        <div dangerouslySetInnerHTML={{ __html: item.a }} />
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            ))}

            {/* Still Have Questions */}
            <div className="bg-primary-50 border border-primary-200 rounded-2xl p-8 text-center">
              <i className="bi bi-chat-dots-fill text-4xl text-primary-600 mb-4 block"></i>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('faq-still-questions') || 'Still have questions?'}</h3>
              <p className="text-gray-600 mb-6">{t('faq-contact-help') || "If you didn't find the answer you were looking for, please don't hesitate to contact us."}</p>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:bg-primary-700">
                Contact Us <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
