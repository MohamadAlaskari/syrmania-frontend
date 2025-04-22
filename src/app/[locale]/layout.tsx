// src/app/[locale]/layout.tsx
import { dir } from 'i18next';
import { languages } from '@/i18n/settings';
import type { Metadata } from 'next';
import '../globals.css'; // تأكد إنه أول استدعاء في الملف


export const metadata: Metadata = {
  title: 'Syrmania Assembly e.V.',
  description: 'Multilingual website for Syrmania.',
};

export async function generateStaticParams() {
  return languages.map((lng) => ({ locale: lng }));
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const lang = params.locale;
  const direction = dir(lang);

  return (
    <html lang={lang} dir={direction}>
      <body>{children}</body>
    </html>
  );
}
