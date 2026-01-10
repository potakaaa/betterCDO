'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { useSiteConfig } from '@/contexts/SiteConfigContext';
import SearchAutocomplete from '@/components/SearchAutocomplete';

export default function HomePage() {
  const { t } = useLanguage();
  const { 
    site, 
    lguName, 
    fullLocation,
    labels,
    officials, 
    statistics, 
    history,
    getMapEmbedUrl,
    getLeaderTitle,
    getViceLeaderTitle,
    getHallName,
    formatPhoneLink,
  } = useSiteConfig();

  // Get executive officials (mayor/governor and vice)
  const leader = officials.executive.find(o => o.position === 'mayor' || o.position === 'governor');
  const viceLeader = officials.executive.find(o => o.position === 'vice_mayor' || o.position === 'vice_governor');

  return (
    <>
      {/* Hero Section */}
      <section className="home-hero-v2">
        <div className="container">
          <div className="home-hero-v2-inner">
            <div className="home-hero-v2-text">
              <h1>{t('hero-welcome')}</h1>
              <p>{t('hero-subtitle')}</p>
              <div className="home-hero-v2-actions">
                <Link href="/services" className="btn btn-primary">Browse Services <i className="bi bi-arrow-right"></i></Link>
                <Link href="/contact" className="btn btn-outline">Contact Us</Link>
              </div>
            </div>
            <div className="home-hero-v2-search">
              <div className="home-search-box">
                <h2><i className="bi bi-search"></i> {t('hero-find-service')}</h2>
                <form className="search-form" role="search" onSubmit={(e) => e.preventDefault()}>
                  <div className="search-input-wrapper">
                    <SearchAutocomplete placeholder="e.g., birth certificate, business permit" />
                    <button type="submit" className="search-submit-btn" aria-label="Search"><i className="bi bi-arrow-right"></i></button>
                  </div>
                </form>
                <div className="home-search-tags">
                  <span>Popular:</span>
                  <Link href="/service-details/birth-certificate">Birth Certificate</Link>
                  <Link href="/service-details/business-permits-licensing">Business Permit</Link>
                  <Link href="/service-details/municipal-treasurer">Real Property Tax</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Services */}
      <section className="section">
        <div className="container">
          <div className="home-section-header">
            <h2>{t('section-popular')}</h2>
            <p>Quick access to frequently requested {labels.lguTypeLabel.toLowerCase()} services</p>
          </div>
          <div className="home-services-grid">
            <Link href="/services/certificates" className="home-service-card">
              <div className="home-service-icon"><i className="bi bi-file-earmark-text-fill"></i></div>
              <div className="home-service-content">
                <h3>{t('service-certificates')}</h3>
                <p>{t('service-certificates-desc')}</p>
              </div>
              <i className="bi bi-arrow-right home-service-arrow"></i>
            </Link>
            <Link href="/services/business" className="home-service-card">
              <div className="home-service-icon"><i className="bi bi-shop"></i></div>
              <div className="home-service-content">
                <h3>{t('service-business')}</h3>
                <p>{t('service-business-desc')}</p>
              </div>
              <i className="bi bi-arrow-right home-service-arrow"></i>
            </Link>
            <Link href="/services/tax-payments" className="home-service-card">
              <div className="home-service-icon"><i className="bi bi-cash-coin"></i></div>
              <div className="home-service-content">
                <h3>{t('service-tax')}</h3>
                <p>{t('service-tax-desc')}</p>
              </div>
              <i className="bi bi-arrow-right home-service-arrow"></i>
            </Link>
            <Link href="/services/social-services" className="home-service-card">
              <div className="home-service-icon"><i className="bi bi-people-fill"></i></div>
              <div className="home-service-content">
                <h3>{t('service-social')}</h3>
                <p>{t('service-social-desc')}</p>
              </div>
              <i className="bi bi-arrow-right home-service-arrow"></i>
            </Link>
            <Link href="/services/health" className="home-service-card">
              <div className="home-service-icon"><i className="bi bi-heart-pulse-fill"></i></div>
              <div className="home-service-content">
                <h3>{t('service-health')}</h3>
                <p>{t('service-health-desc')}</p>
              </div>
              <i className="bi bi-arrow-right home-service-arrow"></i>
            </Link>
            <Link href="/services" className="home-service-card home-service-card--all">
              <div className="home-service-icon"><i className="bi bi-grid-fill"></i></div>
              <div className="home-service-content">
                <h3>{t('btn-view-all-services')}</h3>
                <p>Browse complete directory</p>
              </div>
              <i className="bi bi-arrow-right home-service-arrow"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="home-stats-v2">
        <div className="container">
          <div className="home-stats-v2-header">
            <h2>{lguName} at a Glance</h2>
            <Link href="/statistics" className="home-section-link">View Statistics <i className="bi bi-arrow-right"></i></Link>
          </div>
          <div className="home-stats-v2-grid">
            <Link href="/statistics" className="home-stat-card">
              <div className="home-stat-card-icon"><i className="bi bi-people-fill"></i></div>
              <div className="home-stat-card-content">
                <span className="home-stat-card-value">{statistics.population.count.toLocaleString() || '---'}</span>
                <span className="home-stat-card-label">Population</span>
                <span className="home-stat-card-source">{statistics.population.year} {statistics.population.source}</span>
              </div>
            </Link>
            <Link href="/government" className="home-stat-card">
              <div className="home-stat-card-icon"><i className="bi bi-geo-alt-fill"></i></div>
              <div className="home-stat-card-content">
                <span className="home-stat-card-value">{statistics.subdivisions.count || '---'}</span>
                <span className="home-stat-card-label">{statistics.subdivisions.type}</span>
                <span className="home-stat-card-source">{statistics.subdivisions.source || 'Administrative Units'}</span>
              </div>
            </Link>
            <Link href="/budget" className="home-stat-card">
              <div className="home-stat-card-icon"><i className="bi bi-award-fill"></i></div>
              <div className="home-stat-card-content">
                <span className="home-stat-card-value">{statistics.incomeClass.class || '---'}</span>
                <span className="home-stat-card-label">{statistics.incomeClass.description}</span>
                <span className="home-stat-card-source">{statistics.incomeClass.source || 'Income Classification'}</span>
              </div>
            </Link>
            <Link href="/statistics" className="home-stat-card">
              <div className="home-stat-card-icon"><i className="bi bi-rulers"></i></div>
              <div className="home-stat-card-content">
                <span className="home-stat-card-value">{statistics.landArea.value ? `${statistics.landArea.value} ${statistics.landArea.unit}` : '---'}</span>
                <span className="home-stat-card-label">Land Area</span>
                <span className="home-stat-card-source">{statistics.landArea.source || `Total ${labels.lguTypeLabel} Area`}</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Weather & Map */}
      <section className="section weather-map-section">
        <div className="container">
          <div className="home-stats-v2-header">
            <h2>Weather and Map of {lguName}</h2>
          </div>
          <div className="weather-map-grid">
            <div className="weather-column">
              <div id="weather-container" aria-live="polite">
                <div className="weather-widget" role="region" aria-label={`Current weather in ${lguName}`}>
                  <div className="weather-current">
                    <div className="weather-current-icon"><i className="bi bi-cloud-sun-fill"></i></div>
                    <div className="weather-current-info">
                      <div className="weather-current-temp">29°C</div>
                      <div className="weather-current-condition">Mainly clear</div>
                      <div className="weather-current-location"><i className="bi bi-geo-alt"></i> {fullLocation}</div>
                    </div>
                  </div>
                  <div className="weather-stats">
                    <div className="weather-stat"><i className="bi bi-droplet"></i><span>65%</span></div>
                    <div className="weather-stat"><i className="bi bi-wind"></i><span>12 km/h</span></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="map-column">
              <div className="map-card">
                <div id="map-container" role="application" aria-label={`Interactive map of ${fullLocation}`} className="map-container-iframe">
                  <iframe 
                    width="100%" 
                    height="300" 
                    frameBorder="0" 
                    scrolling="no" 
                    src={getMapEmbedUrl()} 
                    className="map-iframe" 
                    title={`Map of ${lguName}`} 
                    loading="lazy"
                  ></iframe>
                </div>
                <p className="map-attribution">
                  <i className="bi bi-geo-alt" aria-hidden="true"></i> {site.contact.address || `${getHallName()}, ${fullLocation}`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brief History */}
      {history.timeline.length > 0 && history.timeline[0].year && (
        <section className="section history-section">
          <div className="container">
            <div className="home-stats-v2-header">
              <h2><i className="bi bi-book" aria-hidden="true"></i> Brief History of {lguName}</h2>
            </div>
            <div className="history-content">
              <div className="history-timeline">
                {history.timeline.map((event, index) => (
                  <div key={index} className="timeline-item" data-year={event.year}>
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                      <span className="timeline-year">{event.year}</span>
                      <p dangerouslySetInnerHTML={{ __html: event.description }}></p>
                    </div>
                  </div>
                ))}
              </div>
              {history.facts.length > 0 && (
                <div className="history-summary">
                  {history.facts.map((fact) => (
                    <div key={fact.id} className="history-card">
                      <div className="history-card-icon"><i className={`bi ${fact.icon}`}></i></div>
                      <div className="history-card-content">
                        <h4>{fact.title}</h4>
                        <p>{fact.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <style jsx>{`
            .history-section { background: linear-gradient(180deg, var(--color-bg-alt) 0%, var(--color-bg) 100%); }
            .history-section .home-stats-v2-header h2 { display: flex; align-items: center; gap: 10px; }
            .history-section .home-stats-v2-header h2 i { color: var(--color-primary); }
            .history-content { display: grid; grid-template-columns: 1fr 340px; gap: 32px; align-items: start; }
            .history-timeline { position: relative; padding-left: 28px; }
            .history-timeline::before { content: ''; position: absolute; left: 6px; top: 8px; bottom: 8px; width: 2px; background: var(--color-primary); border-radius: 2px; }
            .timeline-item { position: relative; padding-bottom: 20px; opacity: 0; animation: fadeInUp 0.5s ease forwards; }
            .timeline-item:nth-child(1) { animation-delay: 0.1s; }
            .timeline-item:nth-child(2) { animation-delay: 0.2s; }
            .timeline-item:nth-child(3) { animation-delay: 0.3s; }
            .timeline-item:nth-child(4) { animation-delay: 0.4s; }
            .timeline-item:nth-child(5) { animation-delay: 0.5s; }
            .timeline-item:nth-child(6) { animation-delay: 0.6s; }
            .timeline-item:nth-child(7) { animation-delay: 0.7s; }
            .timeline-item:last-child { padding-bottom: 0; }
            .timeline-marker { position: absolute; left: -28px; top: 4px; width: 14px; height: 14px; background: var(--color-bg); border: 3px solid var(--color-primary); border-radius: 50%; transition: all 0.3s ease; z-index: 1; }
            .timeline-item:hover .timeline-marker { background: var(--color-primary); transform: scale(1.2); box-shadow: 0 0 0 4px rgba(0,50,160,0.15); }
            .timeline-content { background: var(--color-bg); border: 1px solid rgba(0,0,0,0.06); border-radius: 10px; padding: 16px 18px; transition: all 0.3s ease; }
            .timeline-item:hover .timeline-content { border-color: var(--color-primary); box-shadow: 0 4px 16px rgba(0,50,160,0.1); transform: translateX(4px); }
            .timeline-year { display: inline-block; background: var(--color-primary); color: white; font-size: 0.75rem; font-weight: 700; padding: 3px 10px; border-radius: 20px; margin-bottom: 8px; }
            .timeline-content p { font-size: 0.875rem; color: var(--color-text); margin: 0; line-height: 1.6; }
            .history-summary { display: flex; flex-direction: column; gap: 16px; position: sticky; top: 100px; }
            .history-card { background: var(--color-bg); border: 1px solid rgba(0,0,0,0.06); border-radius: 12px; padding: 20px; display: flex; gap: 14px; align-items: flex-start; transition: all 0.3s ease; }
            .history-card:hover { border-color: var(--color-primary); box-shadow: 0 4px 16px rgba(0,50,160,0.1); transform: translateY(-2px); }
            .history-card-icon { width: 44px; height: 44px; background: var(--color-primary); border-radius: 10px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
            .history-card-icon i { color: white; font-size: 1.25rem; }
            .history-card-content h4 { font-size: 0.9375rem; font-weight: 600; color: var(--color-text); margin: 0 0 6px 0; }
            .history-card-content p { font-size: 0.8125rem; color: var(--color-text-light); margin: 0; line-height: 1.5; }
            @keyframes fadeInUp { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
            @media (max-width: 900px) { .history-content { grid-template-columns: 1fr; } .history-summary { position: static; flex-direction: row; flex-wrap: wrap; } .history-card { flex: 1 1 280px; } }
            @media (max-width: 575px) { .history-summary { flex-direction: column; } .history-card { flex: 1 1 100%; } }
          `}</style>
        </section>
      )}

      {/* Latest Updates */}
      <section className="section">
        <div className="container">
          <div className="home-section-header">
            <h2>{t('section-updates')}</h2>
            <Link href="/news" className="home-section-link"><span>{t('btn-view-all')}</span> <i className="bi bi-arrow-right"></i></Link>
          </div>
          <div className="home-news-grid">
            <article className="home-news-card">
              <div className="home-news-meta">
                <span className="home-news-badge home-news-badge--info">Announcement</span>
                <span className="home-news-date">Coming Soon</span>
              </div>
              <h3><Link href="/news">Latest Announcements</Link></h3>
              <p>Stay tuned for the latest news and announcements from {lguName}.</p>
            </article>
            <article className="home-news-card">
              <div className="home-news-meta">
                <span className="home-news-badge home-news-badge--success">Project</span>
                <span className="home-news-date">Coming Soon</span>
              </div>
              <h3><Link href="/news">Infrastructure Projects</Link></h3>
              <p>Updates on ongoing and upcoming infrastructure projects in {lguName}.</p>
            </article>
            <article className="home-news-card">
              <div className="home-news-meta">
                <span className="home-news-badge home-news-badge--warning">Advisory</span>
                <span className="home-news-date">Coming Soon</span>
              </div>
              <h3><Link href="/news">Public Advisories</Link></h3>
              <p>Important advisories and notices for residents of {lguName}.</p>
            </article>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section home-leadership-section">
        <div className="container">
          <div className="home-section-header">
            <h2>{t('section-leadership')}</h2>
            <Link href="/government" className="home-section-link"><span>{t('btn-view-officials')}</span> <i className="bi bi-arrow-right"></i></Link>
          </div>
          <div className="home-leadership-grid">
            <div className="home-leader-card">
              <div className="home-leader-badge">{labels.lguTypeLabel} {getLeaderTitle()}</div>
              <h3>{leader?.name ? `Hon. ${leader.name}` : 'To be updated'}</h3>
              <div className="home-leader-contacts">
                {leader?.email && (
                  <a href={`mailto:${leader.email}`}><i className="bi bi-envelope"></i> {leader.email}</a>
                )}
                {leader?.phone && (
                  <a href={`tel:${formatPhoneLink(leader.phone)}`}><i className="bi bi-telephone"></i> {leader.phone}</a>
                )}
              </div>
            </div>
            <div className="home-leader-card">
              <div className="home-leader-badge">{labels.lguTypeLabel} {getViceLeaderTitle()}</div>
              <h3>{viceLeader?.name ? `Hon. ${viceLeader.name}` : 'To be updated'}</h3>
              <div className="home-leader-contacts">
                {viceLeader?.email && (
                  <a href={`mailto:${viceLeader.email}`}><i className="bi bi-envelope"></i> {viceLeader.email}</a>
                )}
                {viceLeader?.phone && (
                  <a href={`tel:${formatPhoneLink(viceLeader.phone)}`}><i className="bi bi-telephone"></i> {viceLeader.phone}</a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section">
        <div className="container">
          <div className="home-section-header">
            <h2>{t('section-contact')}</h2>
            <Link href="/contact" className="home-section-link">{t('btn-view-all')} <i className="bi bi-arrow-right"></i></Link>
          </div>
          <div className="home-contact-v2-grid">
            {site.contact.phone && (
              <a href={`tel:${formatPhoneLink(site.contact.phone)}`} className="home-contact-v2-card">
                <div className="home-contact-v2-icon"><i className="bi bi-telephone-fill"></i></div>
                <div className="home-contact-v2-content">
                  <h3>{t('contact-phone')}</h3>
                  <p className="home-contact-v2-value">{site.contact.phone}</p>
                  <span className="home-contact-v2-note">{t('contact-hours')}</span>
                </div>
              </a>
            )}
            {site.contact.email && (
              <a href={`mailto:${site.contact.email}`} className="home-contact-v2-card">
                <div className="home-contact-v2-icon"><i className="bi bi-envelope-fill"></i></div>
                <div className="home-contact-v2-content">
                  <h3>{t('contact-email')}</h3>
                  <p className="home-contact-v2-value">{site.contact.email}</p>
                  <span className="home-contact-v2-note">{t('contact-response')}</span>
                </div>
              </a>
            )}
            <div className="home-contact-v2-card">
              <div className="home-contact-v2-icon"><i className="bi bi-geo-alt-fill"></i></div>
              <div className="home-contact-v2-content">
                <h3>{t('contact-address')}</h3>
                <p className="home-contact-v2-value">{getHallName()}</p>
                <span className="home-contact-v2-note">{fullLocation} {site.contact.postalCode}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
