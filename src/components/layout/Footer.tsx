'use client';

import {
  SiDiscord,
  SiFacebook,
  SiInstagram,
  SiX,
  SiYoutube,
} from '@icons-pack/react-simple-icons';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { footerNavigation } from '@/data/navigation';
import { useSiteConfig } from '@/contexts/SiteConfigContext';

const Footer: FC = () => {
  const { t } = useTranslation('common');
  const { site, lguName } = useSiteConfig();
  const currentYear = new Date().getFullYear();

  // Logo fallback
  const logoPath = site.logo?.white || '/logos/svg/BetterGov_Icon-White.svg';


  const getSocialIcon = (label: string) => {
    switch (label) {
      case 'Facebook':
        return <SiFacebook className='h-5 w-5' />;
      case 'Twitter':
        return <SiX className='h-5 w-5' />;
      case 'Instagram':
        return <SiInstagram className='h-5 w-5' />;
      case 'YouTube':
        return <SiYoutube className='h-5 w-5' />;
      case 'Discord':
        return <SiDiscord className='h-5 w-5' />;
      default:
        return null;
    }
  };

  // Construct social links from site config to match the map structure of the requested layout
  const socialLinks = [
    { label: 'Facebook', href: site.social.facebook },
    { label: 'Twitter', href: site.social.twitter },
    { label: 'Instagram', href: site.social.instagram },
    { label: 'YouTube', href: site.social.youtube },
    { label: 'Discord', href: site.social.discord },
  ].filter(link => link.href); // Only include existing links

  return (
    <footer className='bg-gray-900 text-white'>
      <div className='container mx-auto px-4 pt-12 pb-8'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8'>
          <div className='col-span-1 md:col-span-2'>
            <div className='flex items-center mb-4'>
              <img
                src={logoPath}
                alt={`Better ${lguName} Logo`}
                className='h-12 w-12 mr-3'
              />

              <div>
                <div className='font-bold'>Better {lguName}</div>
                <div className='text-xs text-gray-400'>BetterGov.ph Portal</div>
              </div>
            </div>
            <p className='text-gray-400 text-sm mb-4'>
              Empowering the people of {lguName} with transparent access to the services, programs, and public funds of LGU {lguName}.
            </p>
            <div className='flex space-x-4'>
              {socialLinks.map(link => (
                <Link
                  key={link.label}
                  href={link.href!}
                  className='text-gray-400 hover:text-white transition-colors'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {getSocialIcon(link.label)}
                </Link>
              ))}
            </div>
          </div>

          {footerNavigation.mainSections.map(section => (
            <div key={section.title}>
              <h3 className='text-lg font-semibold mb-4'>{section.title}</h3>
              <ul className='space-y-2'>
                {section.links.map(link => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className='text-gray-400 hover:text-white text-sm transition-colors'
                      target={link.href.startsWith('http') || link.href.startsWith('mailto') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className='flex justify-center my-24'>
          <p className='text-white text-sm md:text-lg bg-gray-800 p-4 px-12 md:px-8 rounded-full border border-gray-700'>
            Cost to build this site to date:{' '}
            <span className='animate-pulse text-red-500'>₱0</span>. Cost to
            the People of {lguName}:{' '}
            <span className='text-green-500'>₱0</span>.
          </p>
        </div>

        <div className='border-t border-gray-800 mt-8 pt-8'>
          <div className='flex flex-col md:flex-row justify-between items-center'>
            <p className='text-gray-400 text-sm mb-4 md:mb-0'>
              {t('footer.copyright', `© ${currentYear} Better ${lguName}. MIT | CC BY 1.0 All public information sourced from official government portals.`)}
            </p>
            <div className='flex space-x-6'>
              {site.social.github && (
                <Link
                  href={site.social.github}
                  className='text-gray-400 hover:text-white text-sm transition-colors'
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contribute at GitHub
                </Link>
              )}
              <Link
                href='/sitemap-page'
                className='text-gray-400 hover:text-white text-sm transition-colors'
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
