// src/components/carousel/CarouselCard.tsx
'use client';

interface CarouselItemProps {
  title: string;
  description: string;
  image: string;
}

const CarouselCard = ({ title, description, image }: CarouselItemProps) => {
  return (
    <article className="flex flex-col items-center justify-center text-center space-y-4">
      <div className="w-full">
        <img src={image} alt={title} className="w-full object-cover rounded" />
      </div>
      <header>
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      </header>
      <p className="text-gray-600 px-4">{description}</p>
    </article>
  );
};

export default CarouselCard;
