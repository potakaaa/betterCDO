'use client';

import { useSiteConfig } from '@/contexts/SiteConfigContext';

export default function History() {
  const { lguName, history } = useSiteConfig();

  // Only render if there's history content
  if (!history.timeline || history.timeline.length === 0) {
    return null;
  }

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl font-bold text-gray-900 m-0 flex items-center gap-2">
            <i className="bi bi-book text-primary-600" aria-hidden="true" /> Brief History of {lguName}
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative pl-8 border-l-2 border-primary-200">
          {history.timeline.map((item, index) => (
            <div
              key={item.year || index}
              className="relative mb-8 last:mb-0"
              data-year={item.year}
            >
              {/* Marker */}
              <div className="absolute -left-[25px] top-1 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-sm" />

              {/* Content */}
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
                <span className="inline-block bg-primary-100 text-primary-700 text-sm font-semibold px-3 py-1 rounded-full mb-3">
                  {item.year}
                </span>
                <p className="text-gray-700 m-0 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
