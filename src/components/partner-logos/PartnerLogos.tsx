'use client';

import Image from 'next/image';

const logos = [
  { src: '/images/partners/clubdesk.png', name: 'ClubDesk Partner' },
  { src: '/images/partners/hilfswerk.png', name: 'Helfende Hände e.V.' },
  { src: '/images/partners/supporters.png', name: 'Syrian Supporters' },
  { src: '/images/partners/bruecken.png', name: 'BrückenBauer' },
  { src: '/images/partners/solidar.png', name: 'SolidarNetz' },
];

const PartnerLogos = () => {
  return (
    <section className="bg-white py-16 overflow-hidden">
      {/* Titel */}
      <div className="text-center mb-10">
        <h2 className="text-2xl font-bold text-[#0d2c45] mb-2">Unsere Unterstützer</h2>
        <p className="text-gray-600">Offizielle Partner und befreundete Organisationen</p>
      </div>

      {/* Logos mit Auto Scroll & Pause on Hover */}
      <div className="relative w-full overflow-hidden group">
        <div className="animate-slide flex gap-12 w-max">
          {[...logos, ...logos].map((logo, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 grayscale hover:grayscale-0 transition duration-300"
              title={logo.name}
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={120}
                height={60}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-10">
        <a
          href="#kontakt"
          className="inline-block bg-[#0d2c45] hover:bg-[#103956] text-white font-medium px-6 py-3 rounded transition"
        >
          Partner werden
        </a>
      </div>
    </section>
  );
};

export default PartnerLogos;
