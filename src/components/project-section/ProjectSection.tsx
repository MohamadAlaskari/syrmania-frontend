'use client';

import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaSpinner } from 'react-icons/fa';
import ProjectCard from './ProjectCard';
import { Project } from '@/types/project';
import { getProjectFallback } from '@/utils/getFallbacks';

const ProjectSection = () => {
  const { t } = useTranslation();
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  const fallback = getProjectFallback(t);

  useEffect(() => {
    const data = t('projects.items', { returnObjects: true }) as Project[];
    setProjects(data);
    setLoading(false);
  }, [t]);

  return (
    <section id="projects" className="py-16 bg-white">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* العنوان */}
        <header className="text-center mb-12">
          {loading ? (
            <SkeletonHeader />
          ) : (
            <>
              <h2 className="text-3xl font-bold">{t('projects.title')}</h2>
              <p className="text-gray-600 text-lg">{t('projects.subtitle')}</p>
            </>
          )}
        </header>

        {/* قائمة المشاريع */}
        {loading ? (
          <>
            <div className="flex justify-center mb-8">
              <FaSpinner className="animate-spin text-2xl text-gray-400" />
            </div>
            <div className="space-y-24">
              {[...Array(2)].map((_, idx) => (
                <ProjectCard key={idx} fallback={fallback} loading />
              ))}
            </div>
          </>
        ) : (
          <div className="space-y-24">
            {projects.map((proj, index) => (
              <ProjectCard
                key={index}
                {...proj}
                fallback={fallback}
                reverse={index % 2 !== 0}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

const SkeletonHeader = () => (
  <div className="flex flex-col items-center space-y-4 animate-pulse">
    <div className="h-8 w-1/3 bg-gray-300 rounded" />
    <div className="h-4 w-2/3 bg-gray-200 rounded" />
  </div>
);

export default ProjectSection;
