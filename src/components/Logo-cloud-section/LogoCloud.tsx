'use client';

import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface Logo {
  name: string;
  src: string;
}

const logos: Logo[] = [
  { name: 'Syrmania', src: '/images/partners/logo02.svg' },
  { name: 'Syrmania', src: '/images/partners/logo02.svg' },
  { name: 'Syrmania', src: '/images/partners/logo02.svg' },
  { name: 'Syrmania', src: '/images/partners/logo02.svg' },
  { name: 'Syrmania', src: '/images/partners/logo02.svg' },
  { name: 'Syrmania', src: '/images/partners/logo02.svg' },

  
];

const LogoCloud = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="bg-white py-20">
      <div
        ref={ref}
        className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
      >
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {loading ? (
            <div className="space-y-4 animate-pulse">
              <div className="h-8 w-3/4 bg-gray-300 rounded" />
              <div className="h-8 w-2/3 bg-gray-300 rounded" />
              <div className="h-4 w-full bg-gray-200 rounded" />
              <div className="h-4 w-5/6 bg-gray-200 rounded" />
              <div className="flex gap-4 mt-6">
                <div className="h-10 w-32 bg-gray-300 rounded" />
                <div className="h-10 w-32 bg-gray-200 rounded" />
              </div>
            </div>
          ) : (
            <>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0d2c45] mb-6">
                {t('trust.title', 'Trusted by the most innovative teams')}
              </h2>
              <p className="text-gray-600 text-base leading-relaxed mb-6">
                {t(
                  'trust.description',
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue.'
                )}
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#"
                  className="px-6 py-3 rounded-md bg-[#0d2c45] hover:bg-[#103956] text-white font-semibold  transition"
                >
                  {t('trust.primaryButton', 'Create account')}
                </a>
                <a
                  href="#"
                  className="px-6 py-3 rounded-md text-[#0d2c45] font-medium hover:underline"
                >
                  {t('trust.secondaryButton', 'Contact us →')}
                </a>
              </div>
            </>
          )}
        </motion.div>

        {/* Right Side Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 gap-6 place-items-center"
        >
          {(loading ? Array(6).fill(null) : logos).map((logo, idx) => (
            <div
              key={idx}
              className="w-full h-12 flex items-center justify-center grayscale hover:grayscale-0 transition"
            >
              {loading ? (
                <div className="w-28 h-8 bg-gray-200 animate-pulse rounded" />
              ) : (
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={100}
                  height={40}
                  className="object-contain max-h-10"
                />
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LogoCloud;
