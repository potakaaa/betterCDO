'use client';

import { useSiteConfig } from '@/contexts/SiteConfigContext';

export default function HotlineBar() {
  const { hotlines, formatPhoneLink } = useSiteConfig();

  // Get the first few emergency hotlines to display in the bar
  const displayHotlines = [
    ...hotlines.emergency.slice(0, 4),
    ...hotlines.medical.slice(0, 1),
    ...hotlines.government.slice(0, 1),
  ].filter(h => h.number); // Only show hotlines with numbers

  // If no hotlines configured, show a placeholder message
  if (displayHotlines.length === 0) {
    return (
      <div className="bg-gradient-to-br from-red-600 to-red-700 text-white py-2 text-[0.8125rem]">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-6 flex-wrap md:justify-start justify-center">
            <div className="flex items-center gap-4 flex-wrap md:justify-start justify-center">
              <span className="inline-flex items-center gap-1 text-white bg-white/15 px-2.5 py-1 rounded-full whitespace-nowrap">
                <i className="bi bi-telephone-fill text-xs" aria-hidden="true"></i>
                <span>Emergency hotlines coming soon</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-red-600 to-red-700 text-white py-2 text-[0.8125rem]">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-6 flex-wrap md:justify-start justify-center">
          <div className="flex items-center gap-4 flex-wrap md:justify-start justify-center">
            {displayHotlines.map((hotline) => (
              <a
                key={hotline.id}
                href={`tel:${formatPhoneLink(hotline.number)}`}
                className="inline-flex items-center gap-1 text-white bg-white/15 px-2.5 py-1 rounded-full whitespace-nowrap transition-all duration-200 hover:bg-white/30 hover:-translate-y-0.5"
              >
                <i className={`bi ${hotline.icon} text-xs`} aria-hidden="true"></i>
                <span>{hotline.name}: {hotline.number}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
