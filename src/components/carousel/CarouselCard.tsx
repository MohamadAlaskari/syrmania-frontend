// src/components/carousel/CarouselCard.tsx
'use client';

interface CarouselItemProps {
  title: string;
  description: string;
  image: string;
}

const CarouselCard = ({ title, description, image }: CarouselItemProps) => {
  return (
    <article className="bg-white shadow-md rounded-md overflow-hidden w-[300px] min-h-[360px] flex flex-col items-center text-center">
      <div className="w-full h-48 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-4 animate-fade-in transition-opacity duration-700 ease-in-out">
        <h3 className="text-lg font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </article>
  );
};

export default CarouselCard;