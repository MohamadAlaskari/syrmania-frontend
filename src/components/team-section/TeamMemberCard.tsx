// src/components/team-section/TeamMemberCard.tsx
'use client';

interface TeamMemberProps {
  name: string;
  role: string;
  description: string;
  image: string;
}

const TeamMemberCard = ({ name, role, description, image }: TeamMemberProps) => {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden text-center">
      <img src={image} alt={name} className="w-full h-64 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{name}</h3>
        <p className="text-sm text-gray-500 font-semibold">{role}</p>
        <p className="text-sm text-gray-600 mt-2">{description}</p>
      </div>
    </article>
  );
};

export default TeamMemberCard;
