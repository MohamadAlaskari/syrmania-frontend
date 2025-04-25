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
  image,
  fallback,
  loading = false,
}: TeamMemberProps) => {
  const [imgError, setImgError] = useState(false);
  const { t } = useTranslation();

  if (loading) {
    return (
      <div className="p-4 text-center animate-pulse flex flex-col items-center">
        <div className="w-24 h-24 rounded-full bg-gray-200 mb-4" />
        <div className="h-4 bg-gray-300 rounded w-1/2 mb-2" />
        <div className="h-3 bg-gray-200 rounded w-1/3" />
      </div>
    );
  }

  return (
    <div className="p-4 text-center flex flex-col items-center">
      {!imgError && image ? (
        <img
          src={image}
          alt={name || fallback.name}
          onError={() => setImgError(true)}
          className="w-24 h-24 object-cover rounded-full mb-4"
        />
      ) : (
        <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center mb-4">
          <span className="text-gray-400 text-sm">{t('teams.noImage')}</span>
        </div>
      )}

      <h3 className="text-base font-semibold text-gray-900">
        {name || <span className="text-gray-400">{fallback.name}</span>}
      </h3>
      <p className="text-sm text-gray-500">
        {role || <span className="text-gray-400">{fallback.role}</span>}
      </p>
    </div>
  );
};

export default TeamMemberCard;
