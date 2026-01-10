'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { useSiteConfig } from '@/contexts/SiteConfigContext';

export default function NewsPage() {
  const { t } = useLanguage();
  const { lguName, labels } = useSiteConfig();

  // Sample news items - in production, these would come from a CMS or config file
  const newsItems = [
    {
      id: 1,
      title: 'Business Permit Renewal 2025',
      date: 'Nov 28, 2025',
      badge: 'Announcement',
      badgeColor: 'bg-blue-100 text-blue-700',
      description: `Deadline for business permit renewal is set for January 20, 2025. Early renewal is encouraged to avoid long queues and delays. The ${labels.deptPrefix} Business Permits and Licensing Office (BPLO) will be open from 8:00 AM to 5:00 PM on weekdays.`,
    },
    {
      id: 2,
      title: 'New Public Market Wing Opens',
      date: 'Nov 15, 2025',
      badge: 'Project',
      badgeColor: 'bg-green-100 text-green-700',
      description: 'The renovated wing of the Public Market is now open to vendors and the public. The new wing features improved ventilation, modern stalls, and better sanitation facilities.',
    },
    {
      id: 3,
      title: 'Scheduled Power Interruption',
      date: 'Nov 10, 2025',
      badge: 'Advisory',
      badgeColor: 'bg-yellow-100 text-yellow-700',
      description: 'Maintenance scheduled for Dec 1, 8:00 AM - 5:00 PM. Affected areas include the main road and surrounding residential areas. Please prepare accordingly.',
    },
    {
      id: 4,
      title: 'Free Medical Mission',
      date: 'Nov 5, 2025',
      badge: 'Event',
      badgeColor: 'bg-blue-100 text-blue-700',
      description: `The ${labels.deptPrefix} Health Office in partnership with the Department of Health will conduct a free medical mission at the ${labels.deptPrefix} Gymnasium on November 15, 2025.`,
    },
    {
      id: 5,
      title: 'Road Improvement Project Completed',
      date: 'Oct 28, 2025',
      badge: 'Project',
      badgeColor: 'bg-green-100 text-green-700',
      description: 'The road improvement project along the national highway has been completed. The project includes road widening, drainage improvement, and installation of street lights.',
    },
  ];

  return (
    <>
      {/* Breadcrumbs */}
      <div className="container mx-auto px-4">
        <nav className="py-4 text-sm text-gray-500" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-primary-600">{t('nav-home')}</Link>
          <span className="mx-2">/</span>
          <span aria-current="page" className="text-gray-900">News &amp; Announcements</span>
        </nav>
      </div>

      {/* Page Header */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-700 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
              <i className="bi bi-newspaper"></i> News
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">News &amp; Announcements</h1>
            <p className="text-lg text-white/90">Stay updated with the latest news and announcements from the {labels.lguTypeLabel} of {lguName}</p>
          </div>
        </div>
      </section>

      {/* News List */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-6">
            {newsItems.map((item) => (
              <article key={item.id} className="bg-white border border-gray-200 rounded-xl p-6 transition-all duration-200 hover:border-primary-500 hover:shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${item.badgeColor}`}>{item.badge}</span>
                  <span className="text-gray-400 text-sm flex items-center gap-1">
                    <i className="bi bi-calendar3"></i> {item.date}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h2>
                <p className="text-gray-600 mb-4 leading-relaxed">{item.description}</p>
                <Link href={`/news/${item.id}`} className="text-primary-600 font-medium flex items-center gap-1 hover:gap-2 transition-all">
                  Read More <i className="bi bi-arrow-right"></i>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
