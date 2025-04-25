'use client';

interface StatItem {
  value: string;
  label: string;
}

interface StatsGridProps {
  stats: StatItem[];
  title?: string;
}

const StatsGrid = ({ stats, title }: StatsGridProps) => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-screen-xl mx-auto px-4 text-center">
        {title && (
          <h2 className="text-3xl font-bold text-[#0d2c45] mb-10">
            {title}
          </h2>
        )}

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-3xl sm:text-4xl font-extrabold text-[#0d2c45]">
                {stat.value}
              </div>
              <div className="mt-2 text-sm text-gray-500">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsGrid;
