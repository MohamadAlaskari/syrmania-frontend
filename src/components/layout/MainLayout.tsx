'use client';

import styles from './MainLayout.module.css';

import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import { ReactNode, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import '@/i18n/config';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = i18n.language;
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
  }, [i18n.language]);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className={`${styles.header} min-h-screen`}>
        <Navbar />
      </header>

      <main className="flex-grow px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto w-full">
        {children}
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
