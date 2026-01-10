'use client';

import Link from 'next/link';
import { useSiteConfig } from '@/contexts/SiteConfigContext';

export default function PrivacyPage() {
  const { getSiteTitle, getVolunteerEmail } = useSiteConfig();
  const siteTitle = getSiteTitle();
  const volunteerEmail = getVolunteerEmail();

  const sections = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'legal-basis', title: 'Legal Basis' },
    { id: 'information-collected', title: 'Information We Collect' },
    { id: 'how-we-use', title: 'How We Use Information' },
    { id: 'cookies', title: 'Cookies & Analytics' },
    { id: 'data-sharing', title: 'Data Sharing' },
    { id: 'data-security', title: 'Data Security' },
    { id: 'data-retention', title: 'Data Retention' },
    { id: 'your-rights', title: 'Your Rights' },
    { id: 'childrens-privacy', title: "Children's Privacy" },
    { id: 'third-party', title: 'Third-Party Links' },
    { id: 'changes', title: 'Policy Changes' },
    { id: 'contact', title: 'Contact Us' },
  ];

  return (
    <>
      {/* Breadcrumbs */}
      <div className="container mx-auto px-4">
        <nav className="py-4 text-sm text-gray-500" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-primary-600">Home</Link>
          <span className="mx-2">/</span>
          <span aria-current="page" className="text-gray-900">Privacy Policy</span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-700 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
              <i className="bi bi-shield-lock"></i> Privacy
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Privacy Policy</h1>
            <p className="text-lg text-white/90">How we collect, use, and protect your information</p>
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
                  <p className="text-gray-600 mb-4">{siteTitle} (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.</p>
                  <p className="text-gray-600 mb-4">This policy is designed to comply with the <strong>Data Privacy Act of 2012 (Republic Act No. 10173)</strong> of the Philippines and its Implementing Rules and Regulations (IRR).</p>
                  <div className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <i className="bi bi-shield-check text-2xl text-green-600"></i>
                    <span className="text-green-800">We are committed to <strong>transparency</strong> and <strong>data minimization</strong> — we only collect what is necessary.</span>
                  </div>
                </section>

                <section id="legal-basis" className="bg-white border border-gray-200 rounded-xl p-8">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Legal Basis for Processing</h2>
                  <p className="text-gray-600 mb-4">Under the Data Privacy Act of 2012, we process personal information based on the following lawful criteria:</p>
                  <ul className="space-y-2 text-gray-600">
                    <li><strong>Consent:</strong> When you voluntarily provide information through contact forms or email communications</li>
                    <li><strong>Legitimate Interest:</strong> To improve our website, ensure security, and provide better civic services</li>
                    <li><strong>Legal Obligation:</strong> When required by Philippine law or government authorities</li>
                    <li><strong>Public Interest:</strong> To promote transparency and civic engagement in local governance</li>
                  </ul>
                </section>

                <section id="information-collected" className="bg-white border border-gray-200 rounded-xl p-8">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Information We Collect</h2>
                  <h3 className="font-semibold text-gray-800 mt-4 mb-2">Information You Provide Voluntarily</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 mb-4">
                    <li>Email address (when you contact us or submit feedback)</li>
                    <li>Name (if provided in correspondence)</li>
                    <li>Message content and inquiries</li>
                  </ul>
                  <h3 className="font-semibold text-gray-800 mt-4 mb-2">Information Collected Automatically</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    <li>IP address (anonymized where possible)</li>
                    <li>Browser type and version</li>
                    <li>Device type and operating system</li>
                    <li>Pages visited and time spent on pages</li>
                  </ul>
                </section>

                <section id="how-we-use" className="bg-white border border-gray-200 rounded-xl p-8">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    <li>To respond to your inquiries and feedback</li>
                    <li>To improve website functionality and user experience</li>
                    <li>To analyze website traffic and usage patterns</li>
                    <li>To ensure website security and prevent abuse</li>
                    <li>To comply with legal obligations</li>
                  </ul>
                </section>

                <section id="cookies" className="bg-white border border-gray-200 rounded-xl p-8">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Cookies and Analytics</h2>
                  <p className="text-gray-600 mb-4">We use cookies and similar technologies to enhance your browsing experience. We use Google Analytics to collect anonymized data about website usage.</p>
                </section>

                <section id="data-sharing" className="bg-white border border-gray-200 rounded-xl p-8">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Data Sharing and Disclosure</h2>
                  <p className="text-gray-600">We do not sell, trade, or rent your personal information to third parties. We may share information only with service providers, when required by law, or with your explicit consent.</p>
                </section>

                <section id="data-security" className="bg-white border border-gray-200 rounded-xl p-8">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Data Security</h2>
                  <p className="text-gray-600">We implement appropriate technical and organizational measures to protect your personal information, including SSL/TLS encryption, secure hosting infrastructure, and regular security assessments.</p>
                </section>

                <section id="data-retention" className="bg-white border border-gray-200 rounded-xl p-8">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Data Retention</h2>
                  <p className="text-gray-600">We retain personal information only for as long as necessary. Contact information is deleted within 1 year of last contact. Server logs are automatically deleted after 90 days.</p>
                </section>

                <section id="your-rights" className="bg-white border border-gray-200 rounded-xl p-8">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Your Rights Under the Data Privacy Act</h2>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 mb-4">
                    <li><strong>Right to Be Informed</strong></li>
                    <li><strong>Right to Access</strong></li>
                    <li><strong>Right to Object</strong></li>
                    <li><strong>Right to Erasure or Blocking</strong></li>
                    <li><strong>Right to Rectification</strong></li>
                    <li><strong>Right to Data Portability</strong></li>
                    <li><strong>Right to File a Complaint</strong></li>
                  </ul>
                  <p className="text-gray-600">To exercise any of these rights, please contact us at <a href={`mailto:${volunteerEmail}`} className="text-primary-600 hover:underline">{volunteerEmail}</a>.</p>
                </section>

                <section id="childrens-privacy" className="bg-white border border-gray-200 rounded-xl p-8">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Children&apos;s Privacy</h2>
                  <p className="text-gray-600">We do not knowingly collect personal information from children under 18 years of age without parental consent.</p>
                </section>

                <section id="third-party" className="bg-white border border-gray-200 rounded-xl p-8">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Third-Party Links</h2>
                  <p className="text-gray-600">Our website may contain links to external websites. We are not responsible for the privacy practices of these third-party sites.</p>
                </section>

                <section id="changes" className="bg-white border border-gray-200 rounded-xl p-8">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Changes to This Privacy Policy</h2>
                  <p className="text-gray-600">We may update this Privacy Policy from time to time. The &quot;Last Updated&quot; date at the bottom of this page will be revised when changes are made.</p>
                </section>

                <section id="contact" className="bg-white border border-gray-200 rounded-xl p-8">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Contact Us</h2>
                  <p className="text-gray-600 mb-4">If you have questions about this Privacy Policy, please contact us:</p>
                  <a href={`mailto:${volunteerEmail}`} className="inline-flex items-center gap-3 p-4 bg-primary-50 border border-primary-200 rounded-xl text-primary-700 font-medium hover:bg-primary-100 transition-colors">
                    <i className="bi bi-envelope-fill text-xl"></i>
                    <span>{volunteerEmail}</span>
                  </a>
                  <p className="text-sm text-gray-400 mt-8">Last Updated: December 2, 2025</p>
                </section>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
