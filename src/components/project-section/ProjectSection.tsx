// src/components/project-section/ProjectSection.tsx
'use client';

import { useTranslation } from 'react-i18next';
import '@/i18n/config';

const ProjectSection = () => {
  const { t } = useTranslation();

  return (
    <section id="projects" className="bg-gray-50 py-16">
      <div className="max-w-screen-xl mx-auto px-4">
        <header className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{t('projects.title')}</h2>
          <p className="text-gray-700 text-base max-w-3xl mx-auto">
            {t('projects.description')}
          </p>
        </header>
        <div className="flex justify-center">
          <div className="max-w-xl">
            <img
              src="/images/pic06.jpg"
              alt={t('projects.title')}
              className="rounded-md shadow-md w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
