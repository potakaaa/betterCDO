'use client';

import { useSiteConfig } from '@/contexts/SiteConfigContext';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { site, lguName, getVolunteerEmail } = useSiteConfig();

  const logoPath = site.logo?.white || '/assets/images/logo/logo-white.svg';
  const volunteerEmail = getVolunteerEmail();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main-new">
          <div className="footer-brand">
            <img src={logoPath} alt={`Better ${lguName} logo`} className="footer-logo" />
            <p className="footer-tagline">
              Empowering the people of {lguName} with transparent access to the services, programs, and public funds of LGU {lguName}.
            </p>
            <div className="footer-social-new">
              {site.social.facebook && (
                <a href={site.social.facebook} className="footer-social-btn" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <i className="bi bi-facebook"></i>
                </a>
              )}
              {site.social.linkedin && (
                <a href={site.social.linkedin} className="footer-social-btn" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <i className="bi bi-linkedin"></i>
                </a>
              )}
              {site.social.discord && (
                <a href={site.social.discord} className="footer-social-btn" target="_blank" rel="noopener noreferrer" aria-label="Discord">
                  <i className="bi bi-discord"></i>
                </a>
              )}
              {site.social.twitter && (
                <a href={site.social.twitter} className="footer-social-btn" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <i className="bi bi-twitter"></i>
                </a>
              )}
              {site.social.youtube && (
                <a href={site.social.youtube} className="footer-social-btn" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                  <i className="bi bi-youtube"></i>
                </a>
              )}
            </div>
          </div>
          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul className="footer-links-new">
              <li><a href="/sitemap-page">Sitemap</a></li>
              <li><a href="/terms">Terms of Use</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/accessibility">Accessibility</a></li>
              <li><a href="/faq">FAQ</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Resources</h4>
            <ul className="footer-links-new">
              <li><a href="https://data.gov.ph" target="_blank" rel="noopener noreferrer">Open Data Philippines</a></li>
              <li><a href="https://www.foi.gov.ph/" target="_blank" rel="noopener noreferrer">Freedom of Information</a></li>
              <li><a href="https://blgf.gov.ph/" target="_blank" rel="noopener noreferrer">BLGF Portal</a></li>
              <li><a href="https://cmci.dti.gov.ph/" target="_blank" rel="noopener noreferrer">CMCI DTI Portal</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <div className="footer-cost" role="status" aria-label={`Cost to the People of ${lguName}: Zero Pesos`}>
              Cost to the People of {lguName} = <span className="footer-cost-value">₱0</span>
            </div>
            <a href={`mailto:${volunteerEmail}`} className="footer-contribute">
              <i className="bi bi-envelope-heart"></i> Volunteer with us
            </a>
            {site.social.github && (
              <a href={site.social.github} className="footer-contribute" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-github"></i> Contribute code with us
              </a>
            )}
          </div>
        </div>
        <div className="footer-bottom-new">
          <div className="footer-copyright">
            <span>&copy; {currentYear} Better {lguName}. MIT | CC BY 4.0 All public information sourced from official government portals.</span>
            <span className="footer-version"><i className="bi bi-boxes"></i> Ver. 2.0.0</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
