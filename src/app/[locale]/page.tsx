// src/app/[locale]/page.tsx
'use client';

import '@/i18n/config';
import MainLayout from '@/components/layout/MainLayout';
import Banner from '@/components/banner/Banner';
import Carousel from '@/components/carousel/Carousel';
import TeamSection from '@/components/team-section/TeamSection';
import ProjectSection from '@/components/project-section/ProjectSection';

export default function HomePage() {
  return (
    <MainLayout>
      <Banner />
      <Carousel />
      <ProjectSection />
      <TeamSection />
    </MainLayout>
  );
}