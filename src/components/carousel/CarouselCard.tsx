'use client';

import { useState } from 'react';
import { Goal } from '@/types/goal';
import { useTranslation } from 'react-i18next';

interface CarouselItemProps extends Goal {
  fallback: Goal;
  loading?: boolean;
}

const CarouselCard = ({
  title,
  description,
  image,
  fallback,
  loading = false,
}: CarouselItemProps) => {
  const [imgError, setImgError] = useState(false);
  const { t } = useTranslation();

  if (loading) {
    return (
      <article className="bg-white shadow-md rounded-md overflow-hidden w-[300px] min-h-[360px] flex flex-col items-center text-center animate-pulse">
        <div className="w-full h-48 bg-gray-200" />
        <div className="p-4 w-full space-y-2">
          <div className="h-4 bg-gray-300 rounded w-3/4 mx-auto" />
          <div className="h-3 bg-gray-200 rounded w-2/3 mx-auto" />
        </div>
      </article>
    );
  }

  return (
    <article className="bg-white shadow-md rounded-md overflow-hidden w-[300px] min-h-[360px] flex flex-col items-center text-center">
      {/* صورة أو نص بديل */}
      <div className="w-full h-48 overflow-hidden bg-gray-200 flex items-center justify-center">
        {image && !imgError ? (
          <img
            src={image}
            alt={title || fallback.title}
            className="w-full h-full object-cover"
            onError={() => setImgError(true)}
            loading="lazy"
          />
        ) : (
          <span className="text-sm text-gray-400">
            {t('goals.noImage')}
          </span>
        )}
      </div>

      {/* النص */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800 mb-2">
          {title || <span className="text-gray-400">{fallback.title}</span>}
        </h3>
        <p className="text-gray-600 text-sm">
          {description || <span className="text-gray-400">{fallback.description}</span>}
        </p>
      </div>
    </article>
  );
};

export default CarouselCard;
