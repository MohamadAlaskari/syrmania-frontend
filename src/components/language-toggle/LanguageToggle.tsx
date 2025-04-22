'use client';

import { usePathname } from 'next/navigation';

const LanguageToggle = () => {
  const pathname = usePathname();

  const toggleLanguage = () => {
    const segments = pathname.split('/');
    const currentLang = segments[1];
    const newLang = currentLang === 'ar' ? 'de' : 'ar';

    segments[1] = newLang;
    const newPath = segments.join('/');

    // إعادة تحميل كاملة حتى تطبق الترجمة
    window.location.href = newPath;
  };

  return (
    <button
      onClick={toggleLanguage}
      className="underline text-sm text-blue-500 hover:text-blue-700"
    >
      🌐
    </button>
  );
};

export default LanguageToggle;
