'use client';

import React, { useRef, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FaSpinner } from 'react-icons/fa';
import CarouselCard from './CarouselCard';
import { Goal } from '@/types/goal';
import { getGoalFallback } from '@/utils/getFallbacks';

const Carousel = () => {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const fallback = getGoalFallback(t);

  const items: Goal[] = Array.from({ length: 7 }).map((_, i) => {
    const key = `goals.items.goal${i + 1}`;
    return {
      title: t(`${key}.title`),
      description: t(`${key}.description`),
      image: t(`${key}.image`),
    };
  });

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timeout);
  }, []);

  const handleScroll = () => {
    if (!containerRef.current) return;
    const scrollLeft = containerRef.current.scrollLeft;
    const itemWidth = containerRef.current.offsetWidth / 1.2;
    const index = Math.round(scrollLeft / itemWidth);
    setActiveIndex(index);
  };

  const scrollTo = (index: number) => {
    if (!containerRef.current) return;
    const itemWidth = containerRef.current.offsetWidth / 1.2;
    containerRef.current.scrollTo({
      left: index * itemWidth,
      behavior: 'smooth',
    });
  };

  return (
    <section className="w-full px-4 relative">
      {/* العنوان */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">{t('goals.title')}</h2>
        <p className="text-gray-600 mt-2">{t('goals.subtitle')}</p>
      </div>

      {/* مؤشر تحميل */}
      {isLoading && (
        <div className="flex justify-center items-center py-8">
          <FaSpinner className="animate-spin text-gray-500 text-3xl" />
        </div>
      )}

      {/* ← زر السابق */}
      {!isLoading && (
        <button
          onClick={() => scrollTo(activeIndex - 1)}
          className="hidden md:flex items-center justify-center absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow transition"
        >
          ‹
        </button>
      )}

      {/* قائمة البطاقات */}
      <div
        ref={containerRef}
        className="flex snap-x snap-mandatory overflow-x-auto scrollbar-hide scroll-smooth gap-4 pb-4"
        onScroll={handleScroll}
      >
        {isLoading
          ? Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[85%] sm:w-[60%] md:w-[45%] lg:w-[25%] snap-center"
              >
                <CarouselCard fallback={fallback} loading />
              </div>
            ))
          : items.map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[85%] sm:w-[60%] md:w-[45%] lg:w-[25%] snap-center"
              >
                <CarouselCard
                   title={item.title}
                   description={item.description}
                   image={item.image}
                   fallback={fallback}
                   index={index}
                />
              </div>
            ))}
      </div>

      {/* → زر التالي */}
      {!isLoading && (
        <button
          onClick={() => scrollTo(activeIndex + 1)}
          className="hidden md:flex items-center justify-center absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow transition"
        >
          ›
        </button>
      )}

      {/* نقاط التنقل */}
      <div className="flex justify-center gap-2 mt-4">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`w-3 h-3 rounded-full ${
              index === activeIndex ? 'bg-gray-700' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Carousel;
