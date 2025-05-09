'use client';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Project } from '@/types/project';

interface ProjectCardProps extends Project {
  fallback: Project;
  reverse?: boolean;
  loading?: boolean;
}

const ProjectCard = ({
  title,
  description,
  image,
  button,
  fallback,
  reverse = false,
  loading = false,
}: ProjectCardProps) => {
  const { i18n, t } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const [imgError, setImgError] = useState(false);
  const layoutReverse = reverse ? 'md:flex-row-reverse' : '';

  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false, // ✅ damit es jedes Mal reagiert
  });

  if (loading) {
    return (
      <div className={`flex flex-col md:flex-row items-center gap-8 animate-pulse ${layoutReverse}`}>
        <div className="md:w-1/2 w-full h-64 bg-gray-200 rounded" />
        <div className="md:w-1/2 w-full space-y-4">
          <div className="h-6 w-3/4 bg-gray-300 rounded" />
          <div className="h-4 w-full bg-gray-200 rounded" />
          <div className="h-4 w-5/6 bg-gray-200 rounded" />
          <div className="h-10 w-32 bg-gray-300 rounded" />
        </div>
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`flex flex-col md:flex-row items-center gap-8 ${layoutReverse}`}
    >
      {/* image */}
      <div className="md:w-1/2 w-full">
        {!imgError ? (
          <img
            src={image || fallback.image}
            alt={title || fallback.title}
            loading="lazy"
            className="w-full h-auto rounded shadow"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-64 bg-gray-200 flex items-center justify-center rounded">
            <span className="text-gray-400 text-sm">{t('projects.noImage')}</span>
          </div>
        )}
      </div>

      {/* text */}
      <div className={`md:w-1/2 w-full space-y-4 ${isRTL ? 'text-right' : 'text-left'}`}>
        <h3 className="text-2xl font-bold text-[#0d2c45]">
          {title || <span className="text-gray-400">{fallback.title}</span>}
        </h3>
        <p className="text-gray-700">
          {description || <span className="text-gray-400">{fallback.description}</span>}
        </p>
        <a
          href="#"
          className="inline-block mt-4 bg-[#0d2c45] hover:bg-[#103956] text-white px-6 py-2 rounded transition"
        >
          {button || fallback.button}
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
