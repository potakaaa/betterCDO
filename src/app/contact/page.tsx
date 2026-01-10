'use client';

import Link from 'next/link';
import { useSiteConfig } from '@/contexts/SiteConfigContext';

export default function ContactPage() {
  const {
    site,
    lguName,
    hotlines,
    formatPhoneLink,
  } = useSiteConfig();

  return (
    <>
      {/* Breadcrumbs */}
      <div className="container mx-auto px-4">
        <nav className="py-4 text-sm text-gray-500" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-primary-600">Home</Link>
          <span className="mx-2">/</span>
          <span aria-current="page" className="text-gray-900">Contact</span>
        </nav>
      </div>

      {/* Page Header */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-700 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
              <i className="bi bi-envelope-fill"></i> Contact
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Contact Us</h1>
            <p className="text-lg text-white/90">We&apos;re here to help. Reach out to us through any of these channels.</p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {site.contact.email && (
              <a href={`mailto:${site.contact.email}`} className="group flex items-start gap-4 p-6 bg-white border border-gray-200 rounded-xl no-underline text-gray-800 transition-all duration-200 hover:border-primary-500 hover:shadow-lg">
                <div className="w-12 h-12 flex items-center justify-center bg-primary-600 text-white rounded-xl text-xl shrink-0">
                  <i className="bi bi-envelope-fill"></i>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-1">Email</h3>
                  <p className="text-lg font-semibold text-gray-900 mb-1">{site.contact.email}</p>
                  <span className="text-sm text-gray-500">We&apos;ll respond within 24 hours</span>
                </div>
              </a>
            )}
            {site.contact.mobile && (
              <a href={`tel:${formatPhoneLink(site.contact.mobile)}`} className="group flex items-start gap-4 p-6 bg-white border border-gray-200 rounded-xl no-underline text-gray-800 transition-all duration-200 hover:border-primary-500 hover:shadow-lg">
                <div className="w-12 h-12 flex items-center justify-center bg-primary-600 text-white rounded-xl text-xl shrink-0">
                  <i className="bi bi-phone-fill"></i>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-1">Mobile</h3>
                  <p className="text-lg font-semibold text-gray-900 mb-1">{site.contact.mobile}</p>
                  <span className="text-sm text-gray-500">Mon-Fri: 8:00 AM - 5:00 PM</span>
                </div>
              </a>
            )}
            {site.contact.phone && (
              <a href={`tel:${formatPhoneLink(site.contact.phone)}`} className="group flex items-start gap-4 p-6 bg-white border border-gray-200 rounded-xl no-underline text-gray-800 transition-all duration-200 hover:border-primary-500 hover:shadow-lg">
                <div className="w-12 h-12 flex items-center justify-center bg-primary-600 text-white rounded-xl text-xl shrink-0">
                  <i className="bi bi-telephone-fill"></i>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-1">Phone</h3>
                  <p className="text-lg font-semibold text-gray-900 mb-1">{site.contact.phone}</p>
                  <span className="text-sm text-gray-500">Mon-Fri: 8:00 AM - 5:00 PM</span>
                </div>
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Office Hours */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-white rounded-2xl border border-gray-200 overflow-hidden">
            <div className="flex items-center gap-3 p-6 border-b border-gray-200 bg-gray-50">
              <i className="bi bi-clock-fill text-2xl text-primary-600"></i>
              <h2 className="text-xl font-bold text-gray-900 m-0">Office Hours</h2>
            </div>
            <div className="divide-y divide-gray-100">
              <div className="flex items-center justify-between p-4 bg-green-50">
                <span className="font-medium text-gray-900">Monday - Friday</span>
                <span className="text-gray-600">8:00 AM - 5:00 PM</span>
                <span className="inline-flex items-center gap-1 text-green-600 text-sm font-medium">
                  <i className="bi bi-check-circle-fill"></i> Open
                </span>
              </div>
              <div className="flex items-center justify-between p-4 bg-yellow-50">
                <span className="font-medium text-gray-900">Lunch Break</span>
                <span className="text-gray-600">12:00 PM - 1:00 PM</span>
                <span className="inline-flex items-center gap-1 text-yellow-600 text-sm font-medium">
                  <i className="bi bi-pause-circle-fill"></i> Break
                </span>
              </div>
              <div className="flex items-center justify-between p-4 bg-red-50">
                <span className="font-medium text-gray-900">Saturday &amp; Sunday</span>
                <span className="text-gray-600">Closed</span>
                <span className="inline-flex items-center gap-1 text-red-600 text-sm font-medium">
                  <i className="bi bi-x-circle-fill"></i> Closed
                </span>
              </div>
              <div className="flex items-center justify-between p-4 bg-red-50">
                <span className="font-medium text-gray-900">National &amp; Local Holidays</span>
                <span className="text-gray-600">Closed</span>
                <span className="inline-flex items-center gap-1 text-red-600 text-sm font-medium">
                  <i className="bi bi-x-circle-fill"></i> Closed
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Hotlines */}
      {hotlines.emergency.some(h => h.number) && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <span className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-3">
                <i className="bi bi-exclamation-triangle-fill"></i> Emergency
              </span>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Emergency Hotlines</h2>
              <p className="text-gray-500">For emergencies and inquiries, contact these numbers anytime.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {hotlines.emergency.filter(h => h.number).map((hotline) => (
                <a key={hotline.id} href={`tel:${formatPhoneLink(hotline.number)}`} className="flex flex-col items-center gap-2 p-6 bg-red-50 border border-red-200 rounded-xl no-underline text-center transition-all duration-200 hover:border-red-400 hover:shadow-md">
                  <i className={`bi ${hotline.icon} text-3xl text-red-600`}></i>
                  <span className="text-sm font-medium text-gray-700">{hotline.name}</span>
                  <span className="text-lg font-bold text-red-600">{hotline.number}</span>
                </a>
              ))}
              {hotlines.government.filter(h => h.number).map((hotline) => (
                <a key={hotline.id} href={`tel:${formatPhoneLink(hotline.number)}`} className="flex flex-col items-center gap-2 p-6 bg-blue-50 border border-blue-200 rounded-xl no-underline text-center transition-all duration-200 hover:border-blue-400 hover:shadow-md">
                  <i className={`bi ${hotline.icon} text-3xl text-blue-600`}></i>
                  <span className="text-sm font-medium text-gray-700">{hotline.name}</span>
                  <span className="text-lg font-bold text-blue-600">{hotline.number}</span>
                </a>
              ))}
              {hotlines.utilities?.filter(h => h.number).map((hotline) => (
                <a key={hotline.id} href={`tel:${formatPhoneLink(hotline.number)}`} className="flex flex-col items-center gap-2 p-6 bg-gray-50 border border-gray-200 rounded-xl no-underline text-center transition-all duration-200 hover:border-gray-400 hover:shadow-md">
                  <i className={`bi ${hotline.icon} text-3xl text-gray-600`}></i>
                  <span className="text-sm font-medium text-gray-700">{hotline.name}</span>
                  <span className="text-lg font-bold text-gray-600">{hotline.number}</span>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Medical Emergency Hotlines */}
      {hotlines.medical.some(h => h.number) && (
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <span className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-3">
                <i className="bi bi-hospital-fill"></i> Medical
              </span>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Medical Emergency Hotlines</h2>
              <p className="text-gray-500">For medical emergencies and hospital inquiries.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {hotlines.medical.filter(h => h.number).map((hotline) => (
                <a key={hotline.id} href={`tel:${formatPhoneLink(hotline.number)}`} className="flex flex-col items-center gap-2 p-6 bg-green-50 border border-green-200 rounded-xl no-underline text-center transition-all duration-200 hover:border-green-400 hover:shadow-md">
                  <i className={`bi ${hotline.icon} text-3xl text-green-600`}></i>
                  <span className="text-sm font-medium text-gray-700">{hotline.name}</span>
                  <span className="text-lg font-bold text-green-600">{hotline.number}</span>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* No Hotlines Configured Message */}
      {!hotlines.emergency.some(h => h.number) && !hotlines.medical.some(h => h.number) && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-md mx-auto">
              <i className="bi bi-telephone-fill text-5xl text-gray-300 mb-4 block"></i>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Hotlines Coming Soon</h3>
              <p className="text-gray-500">
                Emergency and medical hotlines for {lguName} will be added soon.
              </p>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
