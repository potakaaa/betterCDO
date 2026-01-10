'use client';

import { useState, useEffect } from 'react';
import { useSiteConfig } from '@/contexts/SiteConfigContext';

export default function InfoBar() {
  const [dateTime, setDateTime] = useState({ date: '--- --, ----', time: '--:-- --' });
  const { lguName } = useSiteConfig();

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const dateOptions: Intl.DateTimeFormatOptions = { timeZone: 'Asia/Manila', month: 'short', day: '2-digit', year: 'numeric' };
      const timeOptions: Intl.DateTimeFormatOptions = { timeZone: 'Asia/Manila', hour: '2-digit', minute: '2-digit', hour12: true };
      setDateTime({
        date: now.toLocaleDateString('en-US', dateOptions),
        time: now.toLocaleTimeString('en-US', timeOptions),
      });
    };
    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="bg-[#00184d] text-white py-1.5 text-[0.6875rem] font-normal tracking-tight"
      role="complementary"
      aria-label="Real-time information"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-end gap-6 flex-wrap" aria-live="polite" aria-atomic="false">
          {/* Exchange Rates */}
          <div className="inline-flex items-center gap-1.5 text-white" aria-label="Exchange rates">
            <i className="bi bi-currency-exchange text-xs text-yellow-400" aria-hidden="true"></i>
            <span className="inline-block min-w-[110px] text-left">
              <span className="inline-block text-white">1 USD = ₱ 56.50</span>
            </span>
          </div>

          {/* Weather */}
          <div
            className="inline-flex items-center gap-1.5 text-white pl-4 border-l border-white/15"
            aria-label={`Current weather in ${lguName}`}
          >
            <i className="bi bi-thermometer-half text-xs text-yellow-400" aria-hidden="true"></i>
            <span className="font-normal text-white">{lguName}</span>
            <span className="font-normal text-white">29°C</span>
          </div>

          {/* Date & Time */}
          <div
            className="inline-flex items-center gap-1.5 text-white pl-4 border-l border-white/15"
            aria-label="Philippine Date and Time"
          >
            <i className="bi bi-calendar3 text-xs text-yellow-400" aria-hidden="true"></i>
            <span className="font-normal text-white">{dateTime.date}</span>
            <span className="text-white mx-0.5 text-[0.5rem]" aria-hidden="true">•</span>
            <i className="bi bi-clock text-xs text-yellow-400" aria-hidden="true"></i>
            <span className="font-medium text-white">{dateTime.time}</span>
            <span className="font-normal text-white text-[0.625rem] uppercase tracking-wide">PHT</span>
          </div>
        </div>
      </div>
    </div>
  );
}
