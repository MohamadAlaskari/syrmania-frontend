'use client';

import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaChevronLeft, FaChevronRight, FaSpinner } from 'react-icons/fa';
import { AnimatePresence, motion } from 'framer-motion';
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

  const tabsRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    tabsRef.current?.scrollBy({ left: -150, behavior: 'smooth' });
  };

  const scrollRight = () => {
    tabsRef.current?.scrollBy({ left: 150, behavior: 'smooth' });
  };

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
              <h2 className="text-3xl font-bold text-[#0d2c45] mb-2">{t('teams.title')}</h2>
              <p className="text-gray-600 text-lg">{t('teams.subtitle')}</p>
            </>
          )}
        </header>

        {/* Tabs with Arrows */}
        {!loading && (
          <div className="flex items-center gap-2 mb-8">
            {/* Left Arrow */}
            <button
              onClick={scrollLeft}
              className="text-[#0d2c45] hover:bg-gray-100 p-2 rounded-full border"
            >
              <FaChevronLeft />
            </button>

            {/* Tabs Container */}
            <div
              ref={tabsRef}
              className="flex overflow-x-auto gap-3 flex-1 scrollbar-hide scroll-smooth"
            >
              {departments.map((dept, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedTab(i)}
                  className={`flex-shrink-0 whitespace-nowrap px-4 py-2 rounded border text-sm font-medium transition-all duration-200 ${
                    selectedTab === i
                      ? 'bg-[#0d2c45] text-white shadow'
                      : 'bg-white text-[#0d2c45] border-[#0d2c45] hover:bg-[#e8edf1]'
                  }`}
                >
                  {dept.name}
                </button>
              ))}
            </div>

            {/* Right Arrow */}
            <button
              onClick={scrollRight}
              className="text-[#0d2c45] hover:bg-gray-100 p-2 rounded-full border"
            >
              <FaChevronRight />
            </button>
          </div>
        )}

        {/* Beschreibung */}
        {!loading && currentDept?.description && (
          <p className="text-center text-sm text-gray-600 mb-8 max-w-2xl mx-auto">
            {currentDept.description}
          </p>
        )}

        {/* Mitglieder */}
        {loading ? (
          <>
            <div className="flex justify-center mb-8">
              <FaSpinner className="animate-spin text-2xl text-gray-400" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
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
