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
      <div className="container">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <span aria-current="page">Contact</span>
        </nav>
      </div>

      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <div className="page-header-content">
            <span className="page-header-badge"><i className="bi bi-envelope-fill"></i> Contact</span>
            <h1>Contact Us</h1>
            <p className="page-header-desc">We&apos;re here to help. Reach out to us through any of these channels.</p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section">
        <div className="container">
          <div className="grid grid-3" style={{ gap: 'var(--spacing-md)' }}>
            {site.contact.email && (
              <a href={`mailto:${site.contact.email}`} className="contact-card">
                <div className="contact-card-icon"><i className="bi bi-envelope-fill"></i></div>
                <div className="contact-card-content">
                  <h3>Email</h3>
                  <p className="contact-card-value">{site.contact.email}</p>
                  <span className="contact-card-note">We&apos;ll respond within 24 hours</span>
                </div>
              </a>
            )}
            {site.contact.mobile && (
              <a href={`tel:${formatPhoneLink(site.contact.mobile)}`} className="contact-card">
                <div className="contact-card-icon"><i className="bi bi-phone-fill"></i></div>
                <div className="contact-card-content">
                  <h3>Mobile</h3>
                  <p className="contact-card-value">{site.contact.mobile}</p>
                  <span className="contact-card-note">Mon-Fri: 8:00 AM - 5:00 PM</span>
                </div>
              </a>
            )}
            {site.contact.phone && (
              <a href={`tel:${formatPhoneLink(site.contact.phone)}`} className="contact-card">
                <div className="contact-card-icon"><i className="bi bi-telephone-fill"></i></div>
                <div className="contact-card-content">
                  <h3>Phone</h3>
                  <p className="contact-card-value">{site.contact.phone}</p>
                  <span className="contact-card-note">Mon-Fri: 8:00 AM - 5:00 PM</span>
                </div>
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Office Hours */}
      <section className="office-hours-section">
        <div className="container">
          <div className="office-hours-inner">
            <div className="office-hours-header">
              <i className="bi bi-clock-fill"></i>
              <h2>Office Hours</h2>
            </div>
            <div className="office-hours-schedule">
              <div className="office-hours-item office-hours-item--open">
                <span className="office-hours-day">Monday - Friday</span>
                <span className="office-hours-time">8:00 AM - 5:00 PM</span>
                <span className="office-hours-status"><i className="bi bi-check-circle-fill"></i> Open</span>
              </div>
              <div className="office-hours-item office-hours-item--break">
                <span className="office-hours-day">Lunch Break</span>
                <span className="office-hours-time">12:00 PM - 1:00 PM</span>
                <span className="office-hours-status"><i className="bi bi-pause-circle-fill"></i> Break</span>
              </div>
              <div className="office-hours-item office-hours-item--closed">
                <span className="office-hours-day">Saturday &amp; Sunday</span>
                <span className="office-hours-time">Closed</span>
                <span className="office-hours-status"><i className="bi bi-x-circle-fill"></i> Closed</span>
              </div>
              <div className="office-hours-item office-hours-item--closed">
                <span className="office-hours-day">National &amp; Local Holidays</span>
                <span className="office-hours-time">Closed</span>
                <span className="office-hours-status"><i className="bi bi-x-circle-fill"></i> Closed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Hotlines */}
      {hotlines.emergency.some(h => h.number) && (
        <section className="section">
          <div className="container">
            <div className="hotlines-header">
              <div className="hotlines-title">
                <span className="hotlines-badge"><i className="bi bi-exclamation-triangle-fill"></i> Emergency</span>
                <h2>Emergency Hotlines</h2>
              </div>
              <p>For emergencies and inquiries, contact these numbers anytime.</p>
            </div>
            <div className="hotlines-grid">
              {hotlines.emergency.filter(h => h.number).map((hotline) => (
                <a key={hotline.id} href={`tel:${formatPhoneLink(hotline.number)}`} className="hotline-card">
                  <i className={`bi ${hotline.icon}`}></i>
                  <span className="hotline-card-label">{hotline.name}</span>
                  <span className="hotline-card-number">{hotline.number}</span>
                </a>
              ))}
              {hotlines.government.filter(h => h.number).map((hotline) => (
                <a key={hotline.id} href={`tel:${formatPhoneLink(hotline.number)}`} className="hotline-card">
                  <i className={`bi ${hotline.icon}`}></i>
                  <span className="hotline-card-label">{hotline.name}</span>
                  <span className="hotline-card-number">{hotline.number}</span>
                </a>
              ))}
              {hotlines.utilities?.filter(h => h.number).map((hotline) => (
                <a key={hotline.id} href={`tel:${formatPhoneLink(hotline.number)}`} className="hotline-card">
                  <i className={`bi ${hotline.icon}`}></i>
                  <span className="hotline-card-label">{hotline.name}</span>
                  <span className="hotline-card-number">{hotline.number}</span>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Medical Emergency Hotlines */}
      {hotlines.medical.some(h => h.number) && (
        <section className="section bg-alt">
          <div className="container">
            <div className="hotlines-header">
              <div className="hotlines-title">
                <span className="hotlines-badge hotlines-badge--medical"><i className="bi bi-hospital-fill"></i> Medical</span>
                <h2>Medical Emergency Hotlines</h2>
              </div>
              <p>For medical emergencies and hospital inquiries.</p>
            </div>
            <div className="hotlines-grid">
              {hotlines.medical.filter(h => h.number).map((hotline) => (
                <a key={hotline.id} href={`tel:${formatPhoneLink(hotline.number)}`} className="hotline-card hotline-card--medical">
                  <i className={`bi ${hotline.icon}`}></i>
                  <span className="hotline-card-label">{hotline.name}</span>
                  <span className="hotline-card-number">{hotline.number}</span>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* No Hotlines Configured Message */}
      {!hotlines.emergency.some(h => h.number) && !hotlines.medical.some(h => h.number) && (
        <section className="section">
          <div className="container">
            <div className="text-center" style={{ padding: 'var(--spacing-xl) 0' }}>
              <i className="bi bi-telephone-fill" style={{ fontSize: '3rem', color: 'var(--color-text-light)', marginBottom: 'var(--spacing-md)', display: 'block' }}></i>
              <h3>Hotlines Coming Soon</h3>
              <p style={{ color: 'var(--color-text-light)' }}>
                Emergency and medical hotlines for {lguName} will be added soon.
              </p>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
