'use client';

import Image from 'next/image';

interface LogoItem {
  src: string;
  name: string;
}

interface PartnerLogosProps {
  logos: LogoItem[];
}

const PartnerLogos = ({ logos }: PartnerLogosProps) => {
  return (
    <section className="bg-white py-3 overflow-hidden">
      <div className="relative w-full overflow-hidden group">
        <div className=" flex gap-12 w-max">
          {logos.map((logo, idx) => (
            <div
              key={idx}
              className="animate-slide flex-shrink-0  transition duration-900"
              title={logo.name}
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={160}
                height={100}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerLogos;
