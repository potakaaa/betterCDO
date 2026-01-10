'use client';

import Link from 'next/link';
import { useSiteConfig } from '@/contexts/SiteConfigContext';

export default function GovernmentPage() {
  const {
    lguName,
    labels,
    officials,
    subdivisions,
    getLeaderTitle,
    getViceLeaderTitle,
    getLegislativeBody,
    getLegislativeMembers,
    getSubdivisionTypePlural,
    getDeptPrefix,
    formatPhoneLink,
  } = useSiteConfig();

  // Get executive officials
  const leader = officials.executive.find(o => o.position === 'mayor' || o.position === 'governor');
  const viceLeader = officials.executive.find(o => o.position === 'vice_mayor' || o.position === 'vice_governor');

  // Get legislative members
  const sbMembers = officials.legislative.filter(o => o.position === 'sb_member' || o.position === 'board_member');
  const ligaPresident = officials.legislative.find(o => o.position === 'liga_president');
  const skPresident = officials.legislative.find(o => o.position === 'sk_president');
  const ipmr = officials.legislative.find(o => o.position === 'ipmr');

  return (
    <>
      {/* Breadcrumbs */}
      <div className="container">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <span aria-current="page">Government</span>
        </nav>
      </div>

      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <div className="page-header-content">
            <span className="page-header-badge"><i className="bi bi-building-fill"></i> Government</span>
            <h1>Government Structure &amp; Officials</h1>
            <p className="page-header-desc">Meet the leadership and offices serving {lguName}</p>
          </div>
        </div>
      </section>

      {/* Executive Branch */}
      <section className="section" style={{ background: 'var(--color-bg-alt)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: 'var(--spacing-xl)' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)', color: 'white', padding: '8px 20px', borderRadius: '50px', fontSize: '0.875rem', marginBottom: 'var(--spacing-sm)' }}>
              <i className="bi bi-star-fill"></i> Executive Branch
            </span>
            <h3 style={{ fontSize: '1.75rem', marginBottom: 'var(--spacing-xs)' }}>{labels.lguTypeLabel} Leadership</h3>
            <p style={{ color: 'var(--color-text-light)' }}>The executive officials leading {lguName}&apos;s governance</p>
          </div>

          <div className="grid grid-2" style={{ gap: 'var(--spacing-lg)' }}>
            <div className="executive-card">
              <div className="executive-card-header">
                <span className="executive-badge">{labels.lguTypeLabel} {getLeaderTitle()}</span>
                <h4 className="executive-name">{leader?.name ? `Hon. ${leader.name}` : 'To be updated'}</h4>
              </div>
              <div className="executive-card-body">
                <div className="executive-contacts">
                  {leader?.email && <a href={`mailto:${leader.email}`}><i className="bi bi-envelope"></i> {leader.email}</a>}
                  {leader?.phone && <a href={`tel:${formatPhoneLink(leader.phone)}`}><i className="bi bi-telephone"></i> {leader.phone}</a>}
                  <span><i className="bi bi-clock"></i> Mon-Fri: 8:00 AM - 5:00 PM</span>
                </div>
              </div>
            </div>

            <div className="executive-card">
              <div className="executive-card-header">
                <span className="executive-badge">{labels.lguTypeLabel} {getViceLeaderTitle()}</span>
                <h4 className="executive-name">{viceLeader?.name ? `Hon. ${viceLeader.name}` : 'To be updated'}</h4>
              </div>
              <div className="executive-card-body">
                <div className="executive-contacts">
                  {viceLeader?.email && <a href={`mailto:${viceLeader.email}`}><i className="bi bi-envelope"></i> {viceLeader.email}</a>}
                  {viceLeader?.phone && <a href={`tel:${formatPhoneLink(viceLeader.phone)}`}><i className="bi bi-telephone"></i> {viceLeader.phone}</a>}
                  <span><i className="bi bi-clock"></i> Mon-Fri: 8:00 AM - 5:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legislative Branch */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 'var(--spacing-xl)' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'linear-gradient(135deg, var(--color-success) 0%, #05c793 100%)', color: 'white', padding: '8px 20px', borderRadius: '50px', fontSize: '0.875rem', marginBottom: 'var(--spacing-sm)' }}>
              <i className="bi bi-people-fill"></i> Legislative Branch
            </span>
            <h3 style={{ fontSize: '1.75rem', marginBottom: 'var(--spacing-xs)' }}>{getLegislativeBody()} Members</h3>
            <p style={{ color: 'var(--color-text-light)' }}>{getLegislativeMembers()} serving the people of {lguName}</p>
          </div>

          <div className="grid grid-3" style={{ gap: 'var(--spacing-md)' }}>
            {sbMembers.map((member) => (
              <div key={member.id} className="councilor-card">
                <h4 className="councilor-name">{member.name ? `Hon. ${member.name}` : 'To be updated'}</h4>
                <span className="councilor-badge">{getLegislativeMembers().replace('s', '')}</span>
                {member.committees && <p className="councilor-committees">{member.committees}</p>}
              </div>
            ))}
            {ligaPresident && (
              <div className="councilor-card councilor-card--liga">
                <h4 className="councilor-name">{ligaPresident.name ? `Hon. ${ligaPresident.name}` : 'To be updated'}</h4>
                <span className="councilor-badge councilor-badge--liga">{ligaPresident.title}</span>
                {ligaPresident.committees && <p className="councilor-committees">{ligaPresident.committees}</p>}
              </div>
            )}
            {skPresident && (
              <div className="councilor-card councilor-card--sk">
                <h4 className="councilor-name">{skPresident.name ? `Hon. ${skPresident.name}` : 'To be updated'}</h4>
                <span className="councilor-badge councilor-badge--sk">{skPresident.title}</span>
                {skPresident.committees && <p className="councilor-committees">{skPresident.committees}</p>}
              </div>
            )}
            {ipmr && (
              <div className="councilor-card councilor-card--ipmr">
                <h4 className="councilor-name">{ipmr.name ? `Hon. ${ipmr.name}` : 'To be updated'}</h4>
                <span className="councilor-badge councilor-badge--ipmr">IPMR</span>
                {ipmr.committees && <p className="councilor-committees">{ipmr.committees}</p>}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Department Heads */}
      <section className="section" style={{ background: 'var(--color-bg-alt)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: 'var(--spacing-xl)' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'linear-gradient(135deg, var(--color-info) 0%, #0099cc 100%)', color: 'white', padding: '8px 20px', borderRadius: '50px', fontSize: '0.875rem', marginBottom: 'var(--spacing-sm)' }}>
              <i className="bi bi-building-fill"></i> {getDeptPrefix()} Offices
            </span>
            <h3 style={{ fontSize: '1.75rem', marginBottom: 'var(--spacing-xs)' }}>Department Heads &amp; Key Offices</h3>
            <p style={{ color: 'var(--color-text-light)' }}>{getDeptPrefix()} offices providing services to citizens</p>
          </div>

          <div className="grid grid-3" style={{ gap: 'var(--spacing-md)' }}>
            {officials.departments.map((dept) => (
              <Link key={dept.id} href={`/service-details/${dept.slug}`} className="dept-card dept-card-link-wrap">
                <div className="dept-card-icon"><i className={`bi ${dept.icon}`}></i></div>
                <div className="dept-card-content">
                  <h4 className="dept-card-title">{dept.department}</h4>
                  <p className="dept-card-desc">{dept.description}</p>
                  <div className="dept-card-contacts">
                    {dept.phone && <span><i className="bi bi-telephone"></i> {dept.phone}</span>}
                    {dept.email && <span><i className="bi bi-envelope"></i> {dept.email}</span>}
                  </div>
                  <span className="dept-card-link">View Services <i className="bi bi-arrow-right"></i></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Subdivisions */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 'var(--spacing-xl)' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)', color: 'white', padding: '8px 20px', borderRadius: '50px', fontSize: '0.875rem', marginBottom: 'var(--spacing-sm)' }}>
              <i className="bi bi-geo-alt-fill"></i> {getSubdivisionTypePlural()}
            </span>
            <h3 style={{ fontSize: '1.75rem', marginBottom: 'var(--spacing-xs)' }}>{getSubdivisionTypePlural()} of {lguName}</h3>
            <p style={{ color: 'var(--color-text-light)' }}>{subdivisions.count} {getSubdivisionTypePlural()} serving our community</p>
          </div>

          <div className="grid grid-4" style={{ gap: 'var(--spacing-sm)' }}>
            {subdivisions.items.map((item) => (
              <a 
                key={item.id} 
                href={item.phone ? `tel:${formatPhoneLink(item.phone)}` : '#'} 
                className="barangay-card"
              >
                <div className="barangay-card-header">
                  <i className="bi bi-geo-alt-fill"></i>
                  <span className="barangay-name">{item.name}</span>
                </div>
                <div className="barangay-card-body">
                  <span className="barangay-captain">{item.leader}</span>
                  {item.phone && <span className="barangay-contact"><i className="bi bi-telephone"></i> {item.phone}</span>}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
