'use client';

import { useState, FormEvent } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/services?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <section className="bg-gradient-to-br from-primary-600 to-primary-700 py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="lg:text-left text-center">
            <h1 className="text-[2.5rem] md:text-4xl text-white mb-4 leading-tight font-bold">
              {t('hero-welcome')}
            </h1>
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              {t('hero-subtitle')}
            </p>
            <div className="flex gap-4 flex-wrap lg:justify-start justify-center">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:bg-gray-100"
              >
                Browse Services <i className="bi bi-arrow-right" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:bg-white/15"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Search Box */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-primary-500/10 transition-all duration-300 focus-within:shadow-xl focus-within:border-primary-500/20">
            <h2 className="text-base text-gray-800 mb-6 flex items-center gap-2 font-semibold">
              <i className="bi bi-search text-primary-600" /> Find a Service
            </h2>
            <form className="search-form" role="search" onSubmit={handleSearch}>
              <div className="relative flex gap-2">
                <input
                  type="search"
                  id="hero-search"
                  className="flex-1 px-4 py-3.5 border-2 border-gray-200 rounded-lg text-base bg-gray-50 transition-all duration-200 hover:border-gray-300 hover:bg-white focus:outline-none focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 focus:bg-white placeholder:text-gray-400"
                  placeholder="e.g., birth certificate, business permit"
                  aria-label="Search services"
                  autoComplete="off"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button
                  type="submit"
                  className="w-12 h-12 bg-primary-600 text-white border-none rounded-lg cursor-pointer flex items-center justify-center text-lg transition-all duration-200 shadow-md hover:bg-primary-700 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0"
                  aria-label="Search"
                >
                  <i className="bi bi-arrow-right" />
                </button>
              </div>
            </form>
            <div className="mt-4 flex items-center gap-2 flex-wrap text-[0.8125rem]">
              <span className="text-gray-500 font-medium">Popular:</span>
              <Link
                href="/service-details/birth-certificate"
                className="text-primary-600 bg-primary-500/5 px-3 py-1.5 rounded-full no-underline transition-all duration-200 font-medium border border-transparent hover:bg-primary-500/10 hover:border-primary-500/15"
              >
                Birth Certificate
              </Link>
              <Link
                href="/service-details/business-permits-licensing"
                className="text-primary-600 bg-primary-500/5 px-3 py-1.5 rounded-full no-underline transition-all duration-200 font-medium border border-transparent hover:bg-primary-500/10 hover:border-primary-500/15"
              >
                Business Permit
              </Link>
              <Link
                href="/service-details/municipal-treasurer"
                className="text-primary-600 bg-primary-500/5 px-3 py-1.5 rounded-full no-underline transition-all duration-200 font-medium border border-transparent hover:bg-primary-500/10 hover:border-primary-500/15"
              >
                Real Property Tax
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
