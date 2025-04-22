'use client';

import { useTranslation } from 'react-i18next';
import '@/i18n/config';

const Banner = () => {
  const { t } = useTranslation();

  return (
    <section id="banner">
      <header className="text-center my-10">
        <h2 className="text-3xl font-bold">{t('banner.title')}</h2>
        <p className="text-lg mt-2">{t('banner.description')}</p>
      </header>
    </section>
  );
};

export default Banner;
