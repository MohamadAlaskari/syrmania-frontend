'use client';

import { useTranslation } from 'react-i18next';
import Carousel from '../carousel/Carousel';

const AboutSection = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  return (
    <section id="about" className="w-full bg-white py-20">
      <div className="max-w-screen-xl mx-auto px-4 text-center">

        {/* Title */}
        <h2 className={`text-4xl font-extrabold text-[#0d2c45] mb-6 ${isRTL ? 'rtl' : ''}`}>
          {t('about.title')}
        </h2>

        {/* Description */}
        <p
          className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto text-center"
        >
          {t('about.description')}
        </p>

        {/* Goals Carousel */}
        <Carousel />
        
      </div>
    </section>
  );
};

export default AboutSection;
