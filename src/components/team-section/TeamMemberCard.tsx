'use client';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { TeamMember } from '@/types/TeamMember';

interface TeamMemberProps extends TeamMember {
  fallback: TeamMember;
  loading?: boolean;
}

const TeamMemberCard = ({
  name,
  role,
  description,
  image,
  fallback,
  loading = false,
}: TeamMemberProps) => {
  const [imgError, setImgError] = useState(false);
  const { t } = useTranslation();

  if (loading) {
    return (
      <article className="bg-white rounded-lg shadow-md overflow-hidden text-center animate-pulse">
        <div className="w-full h-64 bg-gray-200" />
        <div className="p-4 space-y-2">
          <div className="h-4 bg-gray-300 rounded w-2/3 mx-auto" />
          <div className="h-3 bg-gray-200 rounded w-1/2 mx-auto" />
          <div className="h-3 bg-gray-200 rounded w-4/5 mx-auto" />
        </div>
      </article>
    );
  }

  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden text-center">
      {!imgError && image ? (
        <img
          src={image}
          alt={name || fallback.name}
          onError={() => setImgError(true)}
          className="w-full h-64 object-cover"
        />
      ) : (
        <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
          <span className="text-gray-400 text-sm">{t('teams.noImage')}</span>
        </div>
      )}

      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-800 mb-2">
          {name || <span className="text-gray-400">{fallback.name}</span>}
        </h3>
        <p className="text-sm text-gray-500 font-semibold">
          {role || <span className="text-gray-400">{fallback.role}</span>}
        </p>
        <p className="text-sm text-gray-600 mt-2">
          {description || <span className="text-gray-400">{fallback.description}</span>}
        </p>
      </div>
    </article>
  );
};

export default TeamMemberCard;
