'use client';

import PartnerLogos from '@/components/ui/PartnerLogos';

const logos = [
  { src: '/images/partners/logo01.png', name: 'Syrmania e.V.' },
  { src: '/images/partners/logo01.png', name: 'Syrmania e.V.' },
  { src: '/images/partners/logo01.png', name: 'Syrmania e.V.' },
  { src: '/images/partners/logo01.png', name: 'Syrmania e.V.' },
  { src: '/images/partners/logo01.png', name: 'Syrmania e.V.' },
  { src: '/images/partners/logo01.png', name: 'Syrmania e.V.' },
  { src: '/images/partners/logo01.png', name: 'Syrmania e.V.' },
  { src: '/images/partners/logo01.png', name: 'Syrmania e.V.' }
];

const PartnerLogosSection = () => {
  return (
    <section className="bg-white py-16 overflow-hidden">
      {/* Titel und Subtitel */}
      <div className="text-center mb-10">
        <h2 className="text-2xl font-bold text-[#0d2c45] mb-2">
          Unsere Unterstützer
        </h2>
        <p className="text-gray-600">
          Offizielle Partner und befreundete Organisationen
        </p>
      </div>

      {/* Logos */}
      <PartnerLogos logos={logos} />
    </section>
  );
};

export default PartnerLogosSection;
