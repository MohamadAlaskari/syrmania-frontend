'use client';

import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaSpinner } from 'react-icons/fa';
import TeamMemberCard from './TeamMemberCard';
import { TeamMember } from '@/types/TeamMember';
import { getTeamFallback } from '@/utils/getFallbacks';

const TeamSection = () => {
  const { t } = useTranslation();
  const [members, setMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);

  const fallback = getTeamFallback(t);

  useEffect(() => {
    const data = t('teams.members', { returnObjects: true }) as TeamMember[];
    setMembers(data);
    setLoading(false);
  }, [t]);

  return (
    <section id="teams" className="bg-white py-16">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* العنوان */}
        <header className="text-center mb-12">
          {loading ? (
            <div className="flex flex-col items-center justify-center space-y-4 animate-pulse">
              <div className="h-8 w-1/3 bg-gray-300 rounded" />
              <div className="h-4 w-2/3 bg-gray-200 rounded" />
            </div>
          ) : (
            <>
              <h2 className="text-3xl font-bold mb-2">{t('teams.title')}</h2>
              <p className="text-gray-600 text-lg">{t('teams.subtitle')}</p>
            </>
          )}
        </header>

        {/* القائمة */}
        {loading ? (
          <>
            <div className="flex justify-center mb-8">
              <FaSpinner className="animate-spin text-2xl text-gray-400" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {Array.from({ length: 6 }).map((_, idx) => (
                <TeamMemberCard key={idx} loading fallback={fallback} />
              ))}
            </div>
          </>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {members.map((member, idx) => (
              <TeamMemberCard
                key={idx}
                {...member}
                fallback={fallback}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default TeamSection;
