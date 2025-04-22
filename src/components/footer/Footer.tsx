// src/components/footer/Footer.tsx
'use client';

import { useTranslation } from 'react-i18next';
import '@/i18n/config';

const Footer = () => {
  const { t } = useTranslation();

  const socialLinks = [
    {
      href: 'mailto:info@syrmania-assmbly.org',
      icon: 'icon solid fa-envelope',
      label: t('footer.social.email'),
    },
    {
      href: 'https://x.com/SyrmaniaAssmbly',
      icon: 'icon brands fa-twitter',
      label: t('footer.social.twitter'),
    },
    {
      href: 'https://www.facebook.com/groups/615098874424135/user/61570639365468',
      icon: 'icon brands fa-facebook-f',
      label: t('footer.social.facebook'),
    },
    {
      href: 'https://www.instagram.com/syrmania_assembly.e.v/',
      icon: 'icon brands fa-instagram',
      label: t('footer.social.instagram'),
    },
    {
      href: 'https://www.linkedin.com/in/syrmania-assembly-89a817348/',
      icon: 'icon brands fa-linkedin-in',
      label: t('footer.social.linkedin'),
    },
  ];

  return (
    <footer className="bg-gray-100 text-center py-8 text-sm mt-12">
      <section className="mb-4">
        <h3 className="text-lg font-semibold mb-2">{t('footer.contact.title')}</h3>
        <p>{t('footer.contact.description')}</p>
        <div className="flex justify-center gap-4 mt-4">
          {socialLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className={link.icon}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
            >
              <span>{link.label}</span>
            </a>
          ))}
        </div>
      </section>
      <p className="text-gray-500 mt-6">{t('footer.copyright')}</p>
    </footer>
  );
};

export default Footer;
