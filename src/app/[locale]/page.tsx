// src/app/[locale]/page.tsx
'use client';

import { useTranslation } from 'react-i18next';
import '@/i18n/config';
import MainLayout from '@/components/layout/MainLayout';
import TeamSection from '@/components/team-section/TeamSection';
import ProjectSection from '@/components/project-section/ProjectSection';
import AboutSection from '@/components/about/AboutSection';
import SidebarButtons from '@/components/sidebar/SidebarButtons';
import StatsGrid from '@/components/ui/StatsGrid';
import PartnerLogosSection from '@/components/partner-logos-section/PartnerLogosSection';

export default function HomePage() {
  const { t } = useTranslation();
  const stats = t('stats.items', { returnObjects: true }) as { value: string; label: string }[];
  return (
    <MainLayout>
      <AboutSection />
      <ProjectSection />
      <PartnerLogosSection />
      <StatsGrid stats={stats} title={t('stats.title')} />

      <TeamSection />
      <SidebarButtons />

    </MainLayout>
  );
}