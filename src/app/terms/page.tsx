'use client';

import Link from 'next/link';
import { useSiteConfig } from '@/contexts/SiteConfigContext';

export default function TermsPage() {
  const { lguName, getSiteTitle, getVolunteerEmail } = useSiteConfig();
  const siteTitle = getSiteTitle();
  const volunteerEmail = getVolunteerEmail();

  const sections = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'acceptance', title: 'Acceptance of Terms' },
    { id: 'public-domain', title: 'Public Domain Content' },
    { id: 'disclaimer', title: '"As Is" Disclaimer' },
    { id: 'limitation', title: 'Limitation of Liability' },
    { id: 'responsibilities', title: 'User Responsibilities' },
    { id: 'no-advice', title: 'No Professional Advice' },
    { id: 'external-links', title: 'External References' },
    { id: 'availability', title: 'Website Availability' },
    { id: 'modifications', title: 'Modifications' },
    { id: 'governing-law', title: 'Governing Law' },
    { id: 'contact', title: 'Contact Information' },
  ];

  return (
    <>
      {/* Breadcrumbs */}
      <div className="container mx-auto px-4">
        <nav className="py-4 text-sm text-gray-500" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-primary-600">Home</Link>
          <span className="mx-2">/</span>
          <span aria-current="page" className="text-gray-900">Terms of Use</span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-700 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
              <i className="bi bi-file-earmark-text"></i> Legal
            </span>
            <h1 className be for="text-3xl md:text-4xl font-bold text-white mb-4">Terms of Use</h1>
            <p className="text-lg text-white/90">Guidelines for using {siteTitle}</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Table of Contents */}
            <aside className="lg:w-64 shrink-0">
              <div className="sticky top-24 bg-white border border-gray-200 rounded-xl p-6">
                <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <i className="bi bi-list-ul"></i> Contents
                </h4>
                <nav className="space-y-2 text-sm">
                  {sections.map(section => (
                    <a key={section.id} href={`#${section.id}`} className="block text-gray-600 hover:text-primary-600 transition-colors">
                      {section.title}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Main Content */}
            <article className="flex-1 max-w-3xl">
              <div className="space-y-8">
                <section id="introduction" className="bg-white border border-gray-200 rounded-xl p-8">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Introduction</h2>
                  <p className="text-gray-600 mb-4">{siteTitle} is a civic platform dedicated to empowering the people of {lguName} by providing transparent access to the services, programs, and public funds of LGU {lguName}.</p>
                  <div className="flex items-center gap-3 p-4 bg-pink-50 border border-pink-200 rounded-lg">
                    <i className="bi bi-heart-fill text-2xl text-pink-600"></i>
                    <span className="text-pink-800">This platform is provided <strong>free of charge</strong> as a public service.</span>
                  </div>
                </section>

                <section id="acceptance" className="bg-white border border-gray-200 rounded-xl p-8">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Acceptance of Terms</h2>
                  <p className="text-gray-600">By accessing and using this website, you acknowledge and agree to be bound by these terms and conditions. Your continued use of the site signifies your ongoing acceptance of this agreement.</p>
                </section>

                <section id="public-domain" className="bg-white border border-gray-200 rounded-xl p-8">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Public Domain Content and Volunteer Operation</h2>
                  <p className="text-gray-600 mb-4">This website and its content are provided as a public domain resource and are operated entirely by volunteers. All information, data, documents, and materials on this website are in the public domain unless otherwise stated.</p>
                  <div className="flex items-start gap-3 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <i className="bi bi-info-circle text-blue-600 mt-0.5"></i>
                    <p className="text-blue-800 text-sm">As a volunteer-run initiative, this website does not replace official government channels. Residents are encouraged to conduct their own independent research and verification.</p>
                  </div>
                </section>

                <section id="disclaimer" className="bg-white border border-gray-200 rounded-xl p-8">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">&quot;As Is&quot; Disclaimer</h2>
                  <p className="text-gray-600 mb-4">All information on this website is provided &quot;AS IS&quot; without warranty of any kind, including warranties of merchantability, fitness for a particular purpose, accuracy, completeness, or reliability of information.</p>
                </section>

                <section id="limitation" className="bg-white border border-gray-200 rounded-xl p-8">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
                  <p className="text-gray-600">To the fullest extent permitted by law, the website operators, volunteers, and contributors shall not be liable for any direct, indirect, incidental, special, or consequential damages arising from your use of this website.</p>
                </section>

                <section id="responsibilities" className="bg-white border border-gray-200 rounded-xl p-8">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">User Responsibilities</h2>
                  <p className="text-gray-600 mb-4">Users are responsible for independently verifying all information, reviewing source links, and cross-checking with official sources before making decisions.</p>
                </section>

                <section id="no-advice" className="bg-white border border-gray-200 rounded-xl p-8">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">No Professional Advice</h2>
                  <p className="text-gray-600">The information on this website is provided for educational and informational purposes only. It does not constitute legal, medical, financial, or any other form of professional advice.</p>
                </section>

                <section id="external-links" className="bg-white border border-gray-200 rounded-xl p-8">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Source Links and External References</h2>
                  <p className="text-gray-600">This website may provide links to official sources and government documents. The continued availability and accuracy of external links cannot be guaranteed.</p>
                </section>

                <section id="availability" className="bg-white border border-gray-200 rounded-xl p-8">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Website Availability</h2>
                  <p className="text-gray-600">{siteTitle} cannot guarantee that the website will be available or accessible at all times, error-free, or fully compatible with all devices and browsers.</p>
                </section>

                <section id="modifications" className="bg-white border border-gray-200 rounded-xl p-8">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Modifications</h2>
                  <p className="text-gray-600">These terms may be updated or modified from time to time without prior notice. Your continued use of the website after changes are posted constitutes your acceptance of the updated terms.</p>
                </section>

                <section id="governing-law" className="bg-white border border-gray-200 rounded-xl p-8">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Governing Law</h2>
                  <p className="text-gray-600">These terms are governed by and construed in accordance with the laws of the Republic of the Philippines.</p>
                </section>

                <section id="contact" className="bg-white border border-gray-200 rounded-xl p-8">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h2>
                  <p className="text-gray-600 mb-4">For questions about these terms or feedback on civic information, please contact:</p>
                  <a href={`mailto:${volunteerEmail}`} className="inline-flex items-center gap-3 p-4 bg-primary-50 border border-primary-200 rounded-xl text-primary-700 font-medium hover:bg-primary-100 transition-colors">
                    <i className="bi bi-envelope-fill text-xl"></i>
                    <span>{volunteerEmail}</span>
                  </a>
                  <p className="text-sm text-gray-500 mt-8">{siteTitle} provides public domain information to support civic engagement, transparency, and informed participation in local governance.</p>
                </section>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
