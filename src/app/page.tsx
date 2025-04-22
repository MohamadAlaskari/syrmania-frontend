'use client';

import { useTranslation } from 'react-i18next';

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 py-12">
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-6">
        {t('banner.title')}
      </h1>
      <p className="text-lg md:text-xl text-center max-w-3xl text-gray-700 dark:text-gray-300">
        {t('banner.description')}
      </p>
    </main>
  );
}
