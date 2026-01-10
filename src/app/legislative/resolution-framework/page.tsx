'use client';

import Link from 'next/link';
import { useSiteConfig } from '@/contexts/SiteConfigContext';

const resolutionTypes = [
  { icon: 'bi-award', label: 'Commendation' },
  { icon: 'bi-envelope-paper', label: 'Request/Appeal' },
  { icon: 'bi-hand-thumbs-up', label: 'Support/Endorsement' },
  { icon: 'bi-exclamation-circle', label: 'Condolence' },
  { icon: 'bi-clipboard-check', label: 'Authorization' },
];

// Sample resolutions - replace with actual data from your LGU
const sampleResolutions = [
  { no: '2025-205', title: 'A Resolution Authorizing the Local Chief Executive to Enter into a Memorandum of Agreement with DOLE for Youth Employment Program', date: 'April 21, 2025' },
  { no: '2025-204', title: 'A Resolution Approving the Municipal and Barangay Council for the Protection of Children Work and Financial Plan', date: 'April 21, 2025' },
  { no: '2025-203', title: 'A Resolution Authorizing the Local Chief Executive to Enter Into Contract for Road Network Improvement', date: 'April 7, 2025' },
  { no: '2025-202', title: 'A Resolution Authorizing Procurement of Agricultural Equipment for Distribution to Local Farmers', date: 'April 7, 2025' },
  { no: '2025-201', title: 'A Resolution Expressing Full Support to the Implementation of Enhanced Community Learning Centers', date: 'March 24, 2025' },
  { no: '2025-200', title: 'A Resolution Commending the Philippine National Police for Exemplary Performance', date: 'March 24, 2025' },
  { no: '2025-199', title: 'A Resolution Requesting DPWH to Expedite Road Rehabilitation Projects', date: 'March 10, 2025' },
  { no: '2025-198', title: 'A Resolution Approving the Annual Budget for the SK Federation for Fiscal Year 2025', date: 'March 10, 2025' },
];

export default function ResolutionFrameworkPage() {
  const { lguName, labels } = useSiteConfig();

  return (
    <>
      {/* Breadcrumbs */}
      <div className="container">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/legislative">Legislative</Link>
          <span>/</span>
          <span aria-current="page">Resolution Framework</span>
        </nav>
      </div>

      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <div className="page-header-content">
            <span className="page-header-badge"><i className="bi bi-file-earmark-text"></i> Legislative</span>
            <h1>Resolution Framework</h1>
            <p className="page-header-desc">Resolutions passed by the {labels.legislativeBody} ng {lguName}</p>
          </div>
        </div>
      </section>

      {/* About Resolutions */}
      <section className="section">
        <div className="container">
          <div className="info-card">
            <div className="info-card-icon"><i className="bi bi-info-circle"></i></div>
            <div className="info-card-content">
              <h3>What is a Resolution?</h3>
              <p>A resolution is a formal expression of the opinion or will of the {labels.legislativeBody}. Unlike ordinances, resolutions do not have the force and effect of law but serve as official statements of the legislative body.</p>
              <p>Resolutions are commonly used for: commendations, requests to higher government agencies, expressions of support or opposition, and administrative matters of the {labels.legislativeBody}.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Resolution Types */}
      <section className="section" style={{ background: 'var(--color-bg-alt)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: 'var(--spacing-lg)' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: 'var(--spacing-xs)' }}>Types of Resolutions</h2>
          </div>
          <div className="grid grid-3" style={{ gap: 'var(--spacing-sm)' }}>
            {resolutionTypes.map((type) => (
              <div key={type.label} className="category-tag">
                <i className={`bi ${type.icon}`}></i> {type.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Resolutions Table */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 'var(--spacing-lg)' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: 'var(--spacing-xs)' }}>Sample Resolutions</h2>
            <p style={{ color: 'var(--color-text-light)' }}>Sample resolutions — replace with actual data from your {labels.legislativeBody}</p>
          </div>
          <div className="table-responsive">
            <table className="data-table resolution-table">
              <caption className="sr-only">List of Resolutions from {labels.legislativeBody} ng {lguName}</caption>
              <thead>
                <tr>
                  <th scope="col" style={{ width: '130px' }}>Resolution No.</th>
                  <th scope="col">Title</th>
                  <th scope="col" style={{ width: '120px' }}>Session Date</th>
                </tr>
              </thead>
              <tbody>
                {sampleResolutions.map((res) => (
                  <tr key={res.no}>
                    <td>{res.no}</td>
                    <td>{res.title}</td>
                    <td>{res.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="text-center" style={{ marginTop: 'var(--spacing-lg)' }}>
            <p style={{ color: 'var(--color-text-light)', fontSize: '0.9rem' }}>
              <i className="bi bi-info-circle"></i> Update this section with actual resolutions from your LGU&apos;s {labels.legislativeBody} website.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
