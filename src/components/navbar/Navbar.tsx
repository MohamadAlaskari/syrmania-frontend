'use client';

import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import LanguageToggle from '@/components/language-toggle/LanguageToggle';

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <nav id="nav" className="flex justify-center gap-6 py-4">
      <Link href="/">{t('nav.home')}</Link>
      <Link href="#teams">{t('nav.teams')}</Link>
      <Link href="#projects">{t('nav.projects')}</Link>
      <Link href="#banner">{t('nav.about')}</Link>
      <Link href="/contact">{t('nav.contact')}</Link>
      <LanguageToggle />
    </nav>
  );
};

export default Navbar;
