'use client';

import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaSpinner } from 'react-icons/fa';
import { AnimatePresence, motion } from 'framer-motion';
import TabsSlider from '@/components/ui/TabsSlider';
import TeamMemberCard from './TeamMemberCard';
import { getTeamFallback } from '@/utils/getFallbacks';
import { TeamMember } from '@/types/TeamMember';

interface Department {
  name: string;
  description?: string;
  members: TeamMember[];
}

const TeamSection = () => {
  const { t } = useTranslation();
  const [departments, setDepartments] = useState<Department[]>([]);
  const [selectedTab, setSelectedTab] = useState(0);
  const [loading, setLoading] = useState(true);

  const fallback = getTeamFallback(t);

  useEffect(() => {
    const data = t('teams.departments', { returnObjects: true }) as Department[];
    setDepartments(data);
    setLoading(false);
  }, [t]);

  const currentDept = departments[selectedTab];

  return (
    <section id="teams" className="bg-white py-16">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Header */}
        <header className="text-center mb-10">
          {loading ? (
            <div className="flex flex-col items-center justify-center space-y-4 animate-pulse">
              <div className="h-8 w-1/3 bg-gray-300 rounded" />
              <div className="h-4 w-2/3 bg-gray-200 rounded" />
            </div>
          ) : (
            <>
              <h2 className="text-3xl font-bold text-[#0d2c45] mb-2">
                {t('teams.title')}
              </h2>
              <p className="text-gray-600 text-lg">{t('teams.subtitle')}</p>
            </>
          )}
        </header>

        {/* Tabs */}
        {!loading && (
          <TabsSlider
            tabs={departments.map((dept) => dept.name)}
            activeIndex={selectedTab}
            onChange={setSelectedTab}
          />
        )}

        {/* Members Grid */}
        {loading ? (
          <>
            <div className="flex justify-center mb-8">
              <FaSpinner className="animate-spin text-2xl text-gray-400" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
              {Array.from({ length: 6 }).map((_, idx) => (
                <TeamMemberCard key={idx} fallback={fallback} loading />
              ))}
            </div>
          </>
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6"
            >
              {currentDept.members.map((member, idx) => (
                <TeamMemberCard key={idx} {...member} fallback={fallback} />
              ))}
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </section>
  );
};

export default TeamSection;
