'use client';

import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from 'react-icons/fa';

const Footer = () => {
  const { t, i18n } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);
  const currentLang = i18n.language;
  const languages = ['de', 'ar'];

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <footer className="bg-[#0d2c45] text-white pt-12 pb-6 mt-12">
      <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Logo + About Text */}
        <div className="col-span-2 flex flex-col md:flex-row gap-8 items-start">
          {/* Logo */}
          {isLoading ? (
            <div className="animate-pulse w-24 h-14 bg-white/20 rounded" />
          ) : (
            <img
              src="/images/logo/png/Syrmania-logo-07.png"
              alt="Syrmania Logo"
              className="h-35"
            />
          )}

          {/* About Text */}
          <div className="text-sm text-white/80 max-w-xs mt-4 md:mt-0">
            <p className="font-semibold">{t('footer.about.title')}</p>
            <p className="mt-2">{t('footer.about.text1')}</p>
            <p className="mt-1">{t('footer.about.text2')}</p>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">{t('footer.links.title')}</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#about" className="hover:underline text-white/80">{t('nav.about')}</a></li>
            <li><a href="#projects" className="hover:underline text-white/80">{t('nav.projects')}</a></li>
            <li><a href="#teams" className="hover:underline text-white/80">{t('nav.teams')}</a></li>
            <li><a href="#contact" className="hover:underline text-white/80">{t('nav.contact')}</a></li>
          </ul>
        </div>

        {/* Social Icons + Language */}
        <div className="flex flex-col gap-6">
          {/* Social */}
          <div>
            <h3 className="text-lg font-semibold mb-2">{t('footer.social.title')}</h3>
            <div className="flex gap-3">
              <a href="mailto:info@syrmania.org" className="social-icon">
                <FaEnvelope size={18} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-icon">
                <FaTwitter size={18} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-icon">
                <FaFacebookF size={18} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-icon">
                <FaInstagram size={18} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-icon">
                <FaLinkedinIn size={18} />
              </a>
            </div>
          </div>

          {/* Language Switcher */}
          <div>
            <h3 className="text-lg font-semibold mb-2">{t('footer.language.title')}</h3>
            <div className="flex gap-3 text-sm">
              {languages.map((lng) => (
                <Link
                  key={lng}
                  href={`/${lng}`}
                  className={`underline-offset-4 ${
                    currentLang === lng
                      ? 'font-bold underline'
                      : 'hover:underline text-white/60'
                  }`}
                >
                  {lng.toUpperCase()}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-white/60 mt-8">
        {t('footer.copyright')}
      </div>

      {/* Styles for icons */}
      <style jsx>{`
        .social-icon {
          background-color: white;
          color: #0d2c45;
          width: 40px;
          height: 40px;
          border-radius: 9999px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease-in-out;
        }
        .social-icon:hover {
          background-color: #e2e8f0;
          color: #0d2c45;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
