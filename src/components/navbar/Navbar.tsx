// src/components/navbar/Navbar.tsx
'use client';

import styles from './Navbar.module.css';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import LanguageToggle from '@/components/language-toggle/LanguageToggle';

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <nav id="nav" className={styles.nav}>
      <ul className={styles.navList}>
        <li className={styles.navItem}><Link href="/">{t('nav.home')}</Link></li>
        <li className={styles.navItem}><Link href="#teams">{t('nav.teams')}</Link></li>
        <li className={styles.navItem}><Link href="#projects">{t('nav.projects')}</Link></li>
        <li className={styles.navItem}><Link href="#banner">{t('nav.about')}</Link></li>
        <li className={styles.navItem}><Link href="/contact">{t('nav.contact')}</Link></li>
        <li className={styles.navItem}><LanguageToggle /></li>
      </ul>
    </nav>
  );
};

export default Navbar;
