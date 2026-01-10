'use client';

import {
  ChevronDownIcon,
  GlobeIcon,
  MenuIcon,
  SearchIcon,
  XIcon,
} from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { mainNavigation } from '@/data/navigation';
import { useLanguage } from '@/contexts/LanguageContext';
import { useSiteConfig } from '@/contexts/SiteConfigContext';

// Define language types locally since we don't have the external file
const LANGUAGES = {
  en: { nativeName: 'English' },
  fil: { nativeName: 'Filipino' },
  ilo: { nativeName: 'Ilocano' }
};

type LanguageType = keyof typeof LANGUAGES;

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [hoveredDropdown, setHoveredDropdown] = useState<string | null>(null);

  const pathname = usePathname();
  const { language, setLanguage, t } = useLanguage();
  const { site, lguName } = useSiteConfig();

  // Normalize path using Next.js pathname logic
  // pathname in Next.js usually doesn't have trailing slash unless root,
  // but let's be safe and consistent with the user's snippet logic if needed.
  // Actually, Next.js pathname is already cleaner.

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      setActiveMenu(null);
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
    setActiveMenu(null);
  };

  const toggleSubmenu = (label: string) => {
    setActiveMenu(activeMenu === label ? null : label);
  };

  const changeLanguage = (newLanguage: LanguageType) => {
    setLanguage(newLanguage);
  };

  // Helper to check if route is active
  const isActiveRoute = (href: string) => {
    if (!href) return false;
    if (href === '/' && pathname === '/') return true;
    if (href !== '/' && pathname.startsWith(href)) return true;
    return false;
  };

  const isActiveChildRoute = (href: string) => {
    if (!href) return false;
    return pathname === href;
  };

  const handleDropdownMouseEnter = (label: string) => {
    setHoveredDropdown(label);
  };

  const handleDropdownMouseLeave = () => {
    setHoveredDropdown(null);
  };

  return (
    <nav className='bg-white shadow-xs sticky top-0 z-50'>
      {/* Top bar with language switcher and additional links */}
      <div className='border-b border-gray-200'>
        <div className='container mx-auto px-4 flex justify-end items-center h-10'>
          <div className='flex items-center space-x-4'>
            <Link
              href='/join-us'
              className='text-xs leading-12 text-primary-600 hover:text-primary-700 font-semibold transition-colors'
            >
              🚀 Join Us
            </Link>
            <Link
              href='/about'
              className='text-xs leading-12 text-gray-800 hover:text-primary-600 transition-colors'
            >
              About <span className='hidden md:inline'>BetterGov.ph</span>
            </Link>
            <a
              href='https://www.gov.ph'
              className='text-xs leading-12 text-gray-800 hover:text-primary-600 transition-colors'
              target='_blank'
              rel='noreferrer'
            >
              Official Gov.ph
            </a>

            <Link
              href='/philippines/hotlines'
              className='text-xs leading-12 text-gray-800 hover:text-primary-600 transition-colors'
            >
              Hotlines
            </Link>
            <div className='hidden md:block'>
              <select
                value={language}
                onChange={e => changeLanguage(e.target.value as LanguageType)}
                className='text-xs border border-gray-300 rounded-sm px-2 py-1 bg-white text-gray-700 hover:border-primary-600 focus:outline-hidden focus:ring-1 focus:ring-primary-600 focus:border-primary-600'
              >
                {Object.entries(LANGUAGES).map(([code, lang]) => (
                  <option key={code} value={code}>
                    {lang.nativeName}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className='container mx-auto px-4'>
        <div className='flex justify-between items-center py-4'>
          <div className='flex items-center'>
            <Link href='/' className='flex items-center'>
              <img
                src={site.logo?.main || '/logos/svg/BetterGov_Icon-Primary.svg'}
                alt={`${lguName} Logo`}
                className='h-12 w-12 mr-3'
              />
              <div>
                <div className='text-black font-bold'>Better{lguName}</div>
                <div className='text-xs text-gray-800'>
                  A community-run portal for the Philippines
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className='hidden lg:flex items-center lg:space-x-4 xl:space-x-8 lg:pr-6 xl:pr-24 lg:leading-10'>
            {mainNavigation.map(item => {
              const isActive = isActiveRoute(item.href);
              return (
                <div
                  key={item.label}
                  className='relative group'
                  onMouseEnter={() => handleDropdownMouseEnter(item.label)}
                  onMouseLeave={handleDropdownMouseLeave}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center font-medium transition-colors pb-1 border-b-2 whitespace-nowrap ${
                      isActive
                        ? 'text-primary-600 border-primary-600'
                        : 'text-gray-700 hover:text-primary-600 border-transparent'
                    }`}
                  >
                    {t(`nav-${item.label.toLowerCase()}`, { defaultValue: item.label })}
                    {item.children && (
                      <ChevronDownIcon
                        className={`ml-1 h-4 w-4 transition-colors ${
                          isActive
                            ? 'text-primary-600'
                            : 'text-gray-800 group-hover:text-primary-600'
                        }`}
                      />
                    )}
                  </Link>
                  {item.children && (
                    <div
                      className={`absolute left-0 mt-2 lg:mt-0 w-56 rounded-md shadow-lg bg-white ring-1 ring-black/5 transition-all duration-200 z-50 ${
                        hoveredDropdown === item.label
                          ? 'opacity-100 visible'
                          : 'opacity-0 invisible'
                      }`}
                    >
                      <div
                        className='py-1'
                        role='menu'
                        aria-orientation='vertical'
                      >
                        {item.children.map(child => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className={`text-left block px-4 py-2 text-sm ${
                              isActiveChildRoute(child.href)
                                ? 'bg-primary-500 text-primary-50 hover:bg-primary-500 hover:text-primary-50'
                                : 'text-gray-700 hover:bg-primary-50 hover:text-primary-600'
                            }`}
                            role='menuitem'
                            target={child.href.startsWith('http') ? '_blank' : undefined}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <div className='hidden lg:flex items-center space-x-6'>
            <Link
              href='/search'
              className='flex items-center text-gray-700 hover:text-primary-600 font-medium transition-colors'
            >
              <SearchIcon className='h-4 w-4 mr-1' />
              Search
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className='lg:hidden flex items-center'>
            <button
              onClick={toggleMenu}
              className='inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary-500 hover:bg-gray-100 focus:outline-hidden focus:ring-2 focus:ring-inset focus:ring-primary-500'
            >
              <span className='sr-only'>Open main menu</span>
              {isOpen ? (
                <XIcon className='block h-6 w-6' aria-hidden='true' />
              ) : (
                <MenuIcon className='block h-6 w-6' aria-hidden='true' />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className='container mx-auto px-2 pt-2 pb-4 space-y-1 border-t border-gray-200 bg-white'>
          {mainNavigation.map(item => {
            const isActive = isActiveRoute(item.href);
            return (
              <div key={item.label}>
                <button
                  onClick={() => toggleSubmenu(item.label)}
                  className={`w-full flex justify-between items-center px-4 py-2 text-base font-medium transition-colors ${
                    isActive
                      ? 'text-primary-600 bg-primary-50'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-primary-500'
                  }`}
                >
                  {t(`nav-${item.label.toLowerCase()}`, { defaultValue: item.label })}
                  {item.children && (
                    <ChevronDownIcon
                      className={`h-5 w-5 transition-transform ${
                        activeMenu === item.label ? 'transform rotate-180' : ''
                      } ${isActive ? 'text-primary-600' : ''}`}
                    />
                  )}
                </button>
                {item.children && activeMenu === item.label && (
                  <div className='pl-6 py-2 space-y-1 bg-gray-50'>
                    {item.children.map(child => (
                      <Link
                        key={child.label}
                        href={child.href}
                        onClick={closeMenu}
                        className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary-500'
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
          <Link
            href='/join-us'
            onClick={closeMenu}
            className='block px-4 py-2 text-base font-semibold text-primary-600 hover:bg-primary-50 hover:text-primary-700'
          >
            🚀 Join Us
          </Link>
          <Link
            href='/about'
            onClick={closeMenu}
            className='block px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-primary-500'
          >
            About
          </Link>
          <Link
            href='/search'
            onClick={closeMenu}
            className='block px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-primary-500'
          >
            Search
          </Link>
          <Link
            href='/sitemap'
            onClick={closeMenu}
            className='block px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-primary-500'
          >
            Sitemap
          </Link>
          <div className='px-4 py-3 border-t border-gray-200'>
            <div className='flex items-center'>
              <GlobeIcon className='h-5 w-5 text-gray-800 mr-2' />
              <select
                value={language}
                onChange={e => changeLanguage(e.target.value as LanguageType)}
                className='text-sm border border-gray-300 rounded-sm px-2 py-1 bg-white text-gray-700 hover:border-primary-600 focus:outline-hidden focus:ring-1 focus:ring-primary-600 focus:border-primary-600'
              >
                {Object.entries(LANGUAGES).map(([code, lang]) => (
                  <option key={code} value={code}>
                    {lang.nativeName}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
