'use client';

import { Goal } from '@/types/goal';

interface CarouselCardProps extends Goal {
  fallback: Goal;
  loading?: boolean;
  index?: number;
}

const colors = [
  'bg-green-100 text-green-800',
  'bg-indigo-100 text-indigo-800',
  'bg-yellow-100 text-yellow-800',
  'bg-pink-100 text-pink-800',
  'bg-blue-100 text-blue-800',
  'bg-purple-100 text-purple-800',
  'bg-teal-100 text-teal-800',
];

const CarouselCard = ({
  title,
  description,
  fallback,
  loading = false,
  index = 0,
}: CarouselCardProps) => {
  const colorClass = colors[index % colors.length];

  if (loading) {
    return (
      <article className="bg-white shadow rounded-lg w-[300px] min-h-[300px] p-6 animate-pulse flex flex-col items-center text-center justify-center space-y-4">
        <div className="w-12 h-12 rounded-full bg-gray-300" />
        <div className="h-4 w-3/4 bg-gray-200 rounded" />
        <div className="h-3 w-2/3 bg-gray-100 rounded" />
      </article>
    );
  }

  return (
    <article
      className={`rounded-lg shadow-md w-[300px] min-h-[300px] flex flex-col justify-center items-center text-center p-6 ${colorClass}`}
    >
      {/* Icon */}
      <div className="text-4xl mb-4">★</div>

      {/* Title */}
      <h3 className="text-lg font-bold mb-2">
        {title || <span className="text-gray-400">{fallback.title}</span>}
      </h3>

      {/* Description */}
      <p className="text-sm text-gray-600">
        {description || <span className="text-gray-400">{fallback.description}</span>}
      </p>
    </article>
  );
};

export default CarouselCard;
