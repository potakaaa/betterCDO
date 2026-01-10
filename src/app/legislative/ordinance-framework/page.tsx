'use client';

import Link from 'next/link';
import { useSiteConfig } from '@/contexts/SiteConfigContext';

const ordinanceCategories = [
  { icon: 'bi-cash-coin', label: 'Revenue & Taxation' },
  { icon: 'bi-shop', label: 'Business & Trade' },
  { icon: 'bi-shield-check', label: 'Public Safety' },
  { icon: 'bi-tree', label: 'Environment' },
  { icon: 'bi-signpost-2', label: 'Traffic & Transportation' },
  { icon: 'bi-building', label: 'Zoning & Land Use' },
];

// Sample ordinances - replace with actual data from your LGU
const sampleOrdinances = [
  { no: '2025-05', title: 'An Ordinance Creating the Film Development Council, Providing for Its Powers and Functions', date: 'April 21, 2025' },
  { no: '2025-04', title: 'An Ordinance Prohibiting the Entry of Contraband Items in Public Facilities', date: 'April 21, 2025' },
  { no: '2025-03', title: 'An Ordinance Creating the Municipal Housing Board, Defining its Powers and Functions', date: 'March 3, 2025' },
  { no: '2025-02', title: 'An Ordinance Requiring All Households to Comply with Zero Open Defecation (ZOD)', date: 'February 25, 2025' },
  { no: '2025-01', title: 'An Ordinance Revising the Gender and Development Code', date: 'February 25, 2025' },
];

export default function OrdinanceFrameworkPage() {
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
          <span aria-current="page">Ordinance Framework</span>
        </nav>
      </div>

      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <div className="page-header-content">
            <span className="page-header-badge"><i className="bi bi-journal-text"></i> Legislative</span>
            <h1>Ordinance Framework</h1>
            <p className="page-header-desc">{labels.deptPrefix} ordinances enacted by the {labels.legislativeBody} ng {lguName}</p>
          </div>
        </div>
      </section>

      {/* About Ordinances */}
      <section className="section">
        <div className="container">
          <div className="info-card">
            <div className="info-card-icon"><i className="bi bi-info-circle"></i></div>
            <div className="info-card-content">
              <h3>What is an Ordinance?</h3>
              <p>A {labels.lguTypeLabel.toLowerCase()} ordinance is a local law enacted by the {labels.legislativeBody} ({labels.legislativeBodyAbbr}) that governs the {labels.lguTypeLabel.toLowerCase()} and its residents. Ordinances have the force and effect of law within the territorial jurisdiction of the {labels.lguTypeLabel.toLowerCase()}.</p>
              <p>Ordinances may cover various subjects including but not limited to: taxation, business regulations, public safety, environmental protection, traffic management, and zoning.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ordinance Categories */}
      <section className="section" style={{ background: 'var(--color-bg-alt)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: 'var(--spacing-lg)' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: 'var(--spacing-xs)' }}>Ordinance Categories</h2>
          </div>
          <div className="grid grid-3" style={{ gap: 'var(--spacing-sm)' }}>
            {ordinanceCategories.map((cat) => (
              <div key={cat.label} className="category-tag">
                <i className={`bi ${cat.icon}`}></i> {cat.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Ordinances Table */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 'var(--spacing-lg)' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: 'var(--spacing-xs)' }}>Sample Ordinances</h2>
            <p style={{ color: 'var(--color-text-light)' }}>Sample ordinances — replace with actual data from your {labels.legislativeBody}</p>
          </div>
          <div className="table-responsive">
            <table className="data-table ordinance-table">
              <caption className="sr-only">List of Ordinances from {labels.legislativeBody} ng {lguName}</caption>
              <thead>
                <tr>
                  <th scope="col" style={{ width: '120px' }}>Ordinance No.</th>
                  <th scope="col">Title</th>
                  <th scope="col" style={{ width: '120px' }}>Session Date</th>
                </tr>
              </thead>
              <tbody>
                {sampleOrdinances.map((ord) => (
                  <tr key={ord.no}>
                    <td>{ord.no}</td>
                    <td>{ord.title}</td>
                    <td>{ord.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="text-center" style={{ marginTop: 'var(--spacing-lg)' }}>
            <p style={{ color: 'var(--color-text-light)', fontSize: '0.9rem' }}>
              <i className="bi bi-info-circle"></i> Update this section with actual ordinances from your LGU&apos;s {labels.legislativeBody} website.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
