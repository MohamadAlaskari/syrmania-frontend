// src/app/[locale]/page.tsx
'use client';

import '@/i18n/config';
import MainLayout from '@/components/layout/MainLayout';
import TeamSection from '@/components/team-section/TeamSection';
import ProjectSection from '@/components/project-section/ProjectSection';
import AboutSection from '@/components/about/AboutSection';

export default function HomePage() {
  return (
    <MainLayout>
      <AboutSection />
      <ProjectSection />
      <TeamSection />
    </MainLayout>
  );
}