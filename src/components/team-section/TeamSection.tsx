// src/components/team-section/TeamSection.tsx
'use client';

import { useTranslation } from 'react-i18next';
import '@/i18n/config';
import TeamMemberCard from './TeamMemberCard';

const TeamSection = () => {
  const { t } = useTranslation();

  const members = Array.from({ length: 9 }).map(() => ({
    name: t('teams.member.name'),
    role: t('teams.member.role'),
    description: t('teams.member.description'),
    image: `/images/pic07.jpg`,
  }));

  return (
    <section id="teams" className="bg-white py-16">
      <div className="max-w-screen-xl mx-auto px-4">
        <header className="text-center mb-12">
          <h2 className="text-3xl font-bold">{t('teams.title')}</h2>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {members.map((member, idx) => (
            <TeamMemberCard key={idx} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
