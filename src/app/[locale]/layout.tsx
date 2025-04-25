// src/app/[locale]/layout.tsx
import { dir } from 'i18next';
import { languages } from '@/i18n/settings';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import '../globals.css';

export const metadata: Metadata = {
  title: 'Syrmania Assembly e.V.',
  description: 'Multilingual website for Syrmania.',
  icons: {
    icon: '/favicon/favicon.ico',
    shortcut: '/favicon/favicon-96x96.png',
    apple: '/favicon/apple-touch-icon.png',
  },
};

// ✅ نحدد صراحة أنه async function ترجع Promise
export async function generateStaticParams(): Promise<{ locale: string }[]> {
  return languages.map((lng) => ({ locale: lng }));
}

// ✅ نوع واضح للـ Props
interface LocaleLayoutProps {
  children: ReactNode;
  params: {
    locale: string;
  };
}
export default function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const lang = params.locale;
  const direction = dir(lang);

  return (
    <html lang={lang} dir={direction}>
      <body>{children}</body>
    </html>
  );
}