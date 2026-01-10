'use client';

import Link from 'next/link';
import { useSiteConfig } from '@/contexts/SiteConfigContext';

export default function QuickStats() {
  const { lguName, statistics, labels } = useSiteConfig();

  const stats = [
    {
      href: '/statistics',
      icon: 'bi-people-fill',
      value: statistics.population.count > 0 ? statistics.population.count.toLocaleString() : '—',
      label: 'Population',
      source: statistics.population.source || `${statistics.population.year} Census`
    },
    {
      href: '/government',
      icon: 'bi-geo-alt-fill',
      value: statistics.subdivisions.count > 0 ? statistics.subdivisions.count.toString() : '—',
      label: labels.subdivisionTypePlural,
      source: statistics.subdivisions.source || 'Administrative Units'
    },
    {
      href: '/budget',
      icon: 'bi-award-fill',
      value: statistics.incomeClass.class || '—',
      label: labels.lguTypeLabel,
      source: statistics.incomeClass.source || 'Income Classification'
    },
    {
      href: '/statistics',
      icon: 'bi-rulers',
      value: statistics.landArea.value > 0 ? `${statistics.landArea.value} ${statistics.landArea.unit}` : '—',
      label: 'Land Area',
      source: statistics.landArea.source || 'Total Area'
    },
  ];

  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <h2 className="text-xl font-bold text-gray-900 m-0">{lguName} at a Glance</h2>
          <Link href="/statistics" className="text-primary-600 font-medium flex items-center gap-1 hover:underline">
            View Statistics <i className="bi bi-arrow-right" />
          </Link>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <Link
              key={stat.label}
              href={stat.href}
              className="group relative flex items-center gap-4 p-6 bg-white border border-gray-200 rounded-xl no-underline text-gray-800 transition-all duration-300 overflow-hidden hover:border-primary-500 hover:shadow-lg hover:-translate-y-0.5"
            >
              {/* Left accent bar (hidden by default, shows on hover) */}
              <div className="absolute top-0 left-0 w-1 h-full bg-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-lg text-primary-600 text-xl shrink-0 transition-all duration-300 group-hover:bg-primary-600 group-hover:text-white">
                <i className={`bi ${stat.icon}`} />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <span className="block text-2xl font-bold text-primary-600 leading-tight transition-colors duration-300 group-hover:text-primary-700">
                  {stat.value}
                </span>
                <span className="block text-sm font-medium text-gray-800 mt-0.5">
                  {stat.label}
                </span>
                <span className="block text-xs text-gray-500 mt-1">
                  {stat.source}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
