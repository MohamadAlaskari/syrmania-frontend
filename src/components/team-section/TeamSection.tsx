'use client';

import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaSpinner } from 'react-icons/fa';
import TeamMemberCard from './TeamMemberCard';
import { TeamMember } from '@/types/TeamMember';
import { getTeamFallback } from '@/utils/getFallbacks';

interface Department {
  name: string;
  description?: string;
  members: TeamMember[];
}

const TeamSection = () => {
  const { t } = useTranslation();
  const [departments, setDepartments] = useState<Department[]>([]);
  const [loading, setLoading] = useState(true);

  const fallback = getTeamFallback(t);

  useEffect(() => {
    const data = t('teams.departments', { returnObjects: true }) as Department[];
    setDepartments(data);
    setLoading(false);
  }, [t]);

  return (
    <section id="teams" className="bg-white py-16">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Haupttitel */}
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

        {/* Abteilungen */}
        {loading ? (
          <div className="flex justify-center mb-8">
            <FaSpinner className="animate-spin text-2xl text-gray-400" />
          </div>
        ) : null}

        {loading
          ? Array.from({ length: 2 }).map((_, deptIdx) => (
              <div key={deptIdx} className="mb-12">
                <div className="h-6 bg-gray-300 rounded w-1/4 mb-2 animate-pulse" />
                <div className="h-4 bg-gray-200 rounded w-1/2 mb-6 animate-pulse" />
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {Array.from({ length: 3 }).map((_, idx) => (
                    <TeamMemberCard key={idx} loading fallback={fallback} />
                  ))}
                </div>
              </div>
            ))
          : departments.map((dept, deptIdx) => (
              <div key={deptIdx} className="mb-12">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">{dept.name}</h3>
                {dept.description && (
                  <p className="text-gray-600 mb-6">{dept.description}</p>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {dept.members.map((member, idx) => (
                    <TeamMemberCard key={idx} {...member} fallback={fallback} />
                  ))}
                </div>
              </div>
            ))}
      </div>
    </section>
  );
};

export default TeamSection;
