'use client';

import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import Image from 'next/image';
import MemberCard from '@/components/ui/MemberCard';
import { Founder } from '@/types/founder';
import { getFounderFallback } from '@/utils/getFallbacks';

const AboutSection = () => {
  const { t } = useTranslation();
  const fallback = getFounderFallback(t);
  const [founders, setFounders] = useState<Founder[]>([]);
  const [loading, setLoading] = useState(true);

  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: false });

  useEffect(() => {
    const data = t('about.founders', { returnObjects: true }) as Founder[];
    setFounders(data);
    setLoading(false);
  }, [t]);

  return (
    <section id="about" className="bg-white py-16">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col lg:flex-row gap-12">
        {/* Bild links */}
        <motion.div
  initial={{ opacity: 0, x: -40 }}
  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="flex-shrink-0 w-full lg:w-[40%] rounded-3xl bg-gray-200 overflow-hidden relative flex items-center justify-center"
>
  {loading ? (
    <div className="w-full h-full bg-gray-300 animate-pulse" />
  ) : (
    <>
      {true ? ( // Hier prüfen ob Bild da ist oder nicht
        <Image
          src="/images/about/about-main.jpg"
          alt="About Syrmania"
          fill
          className="object-cover"
        />
      ) : (
        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
          <span className="text-gray-400 text-sm">{t('teams.noImage')}</span>
        </div>
      )}
    </>
  )}
</motion.div>


        {/* Text & Inhalt */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
          className="flex-1"
        >
          {loading ? (
            <div className="space-y-4 animate-pulse">
              <div className="h-8 w-3/4 bg-gray-300 rounded" />
              <div className="h-4 w-full bg-gray-200 rounded" />
              <div className="h-4 w-5/6 bg-gray-200 rounded" />
              <div className="h-10 w-32 bg-gray-300 rounded mt-4" />
            </div>
          ) : (
            <>
              <h2 className="text-3xl font-bold text-[#0d2c45] mb-4 ">
                {t('about.title')}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">{t('about.description')}</p>
              <a
                href="#"
                className="inline-block bg-[#0d2c45] hover:bg-[#103956] text-white px-5 py-2 rounded-md shadow  transition"
              >
                {t('about.cta')}
              </a>
            </>
          )}

          {/* Divider & Intro */}
          {!loading && (
            <>
              <hr className="my-8 border-gray-300" />
              <p className="text-gray-600 text-sm mb-6">{t('about.foundersIntro')}</p>
            </>
          )}

          {/* Gründer als MemberCard */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {(loading ? Array(3).fill(null) : founders).map((person, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
              >
                <MemberCard
                  name={person?.name}
                  role={person?.role}
                  image={person?.image}
                  fallback={fallback}
                  loading={loading}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
