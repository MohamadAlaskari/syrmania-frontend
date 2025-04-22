// src/components/carousel/Carousel.tsx
'use client';

import { useTranslation } from 'react-i18next';
import CarouselCard from './CarouselCard';
import '@/i18n/config';

const Carousel = () => {
  const { t } = useTranslation();

  const items = Array.from({ length: 6 }).map((_, i) => ({
    title: t('carousel.title'),
    description: t('carousel.description'),
    image: `/images/pic0${(i % 6) + 1}.jpg`,
  }));

  return (
    <section className="w-full py-8 bg-white">
      <div className="overflow-x-auto px-4">
        <div className="flex gap-6 w-max">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[300px] flex flex-col items-center text-center space-y-4"
            >
              <CarouselCard {...item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;
