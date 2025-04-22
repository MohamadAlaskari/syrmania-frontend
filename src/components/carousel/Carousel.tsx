'use client';

import React, { useRef, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import CarouselCard from './CarouselCard';

const Carousel = () => {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const items = Array.from({ length: 6 }).map((_, i) => ({
    title: t('carousel.title'),
    description: t('carousel.description'),
    image: `/images/pic0${(i % 6) + 1}.jpg`,
  }));

  const handleScroll = () => {
    if (!containerRef.current) return;
    const scrollLeft = containerRef.current.scrollLeft;
    const itemWidth = containerRef.current.offsetWidth / 4;
    const index = Math.round(scrollLeft / itemWidth);
    setActiveIndex(index);
  };

  const scrollTo = (index: number) => {
    if (!containerRef.current) return;
    const itemWidth = containerRef.current.offsetWidth / 4;
    containerRef.current.scrollTo({
      left: index * itemWidth,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <section className="w-full px-4 relative">
  {/* السهم الأيسر */}
  <button
    onClick={() => scrollTo(activeIndex - 1)}
    className="hidden md:flex items-center justify-center absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow transition"
  >
    ‹
  </button>

  {/* السلايدر */}
  <div
    ref={containerRef}
    className="flex snap-x snap-mandatory overflow-x-auto scrollbar-hide scroll-smooth gap-4"
  >
    {items.map((item, index) => (
      <div key={index} className="w-1/4 flex-shrink-0 snap-center">
        <CarouselCard
          title={item.title}
          description={item.description}
          image={item.image}
        />
      </div>
    ))}
  </div>

  {/* السهم الأيمن */}
  <button
    onClick={() => scrollTo(activeIndex + 1)}
    className="hidden md:flex items-center justify-center absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow transition"
  >
    ›
  </button>

  {/* النقاط */}
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
