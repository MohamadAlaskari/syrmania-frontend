'use client';

import { useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface TabsSliderProps {
  tabs: string[];
  activeIndex: number;
  onChange: (index: number) => void;
  className?: string;
}

const TabsSlider = ({ tabs, activeIndex, onChange, className = '' }: TabsSliderProps) => {
  const tabsRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    tabsRef.current?.scrollBy({ left: -150, behavior: 'smooth' });
  };

  const scrollRight = () => {
    tabsRef.current?.scrollBy({ left: 150, behavior: 'smooth' });
  };

  return (
    <div className={`flex items-center gap-2 mb-6 ${className}`}>
      {/* ← Left */}
      <button
        onClick={scrollLeft}
        className="text-[#0d2c45] hover:bg-gray-100 p-2 rounded-full border"
        aria-label="Scroll left"
      >
        <FaChevronLeft />
      </button>

      {/* Tabs */}
      <div
        ref={tabsRef}
        className="flex overflow-x-auto gap-3 flex-1 scrollbar-hide scroll-smooth"
      >
        {tabs.map((label, index) => (
          <button
            key={index}
            onClick={() => onChange(index)}
            className={`flex-shrink-0 whitespace-nowrap px-4 py-2 rounded border text-sm font-medium transition-all duration-200 ${
              activeIndex === index
                ? 'bg-[#0d2c45] text-white shadow'
                : 'bg-white text-[#0d2c45] border-[#0d2c45] hover:bg-[#e8edf1]'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* → Right */}
      <button
        onClick={scrollRight}
        className="text-[#0d2c45] hover:bg-gray-100 p-2 rounded-full border"
        aria-label="Scroll right"
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default TabsSlider;
