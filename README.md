# Syrmania Web – React + TypeScript + Vite + i18n + Tailwind CSS

![Vite](https://img.shields.io/badge/Vite-6.2.0-blueviolet?logo=vite)
![React](https://img.shields.io/badge/React-19.0.0-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-4.0-38B2AC?logo=tailwindcss)
![i18next](https://img.shields.io/badge/i18next-localization-yellow?logo=i18next)
![License](https://img.shields.io/badge/License-Private-lightgrey)
![Status](https://img.shields.io/badge/status-active-brightgreen)

This project is a multilingual, RTL-compatible web application built for the **Syrmania Assembly e.V.**.  
It uses modern technologies and follows clean code principles for scalability, maintainability, and performance.

---

## 🔧 Tech Stack

- **React 19** with **TypeScript**
- **Vite** for blazing-fast development and bundling
- **Tailwind CSS 4** for utility-first styling
- **i18next** with `react-i18next` for multilingual support (Arabic 🇸🇾 / German 🇩🇪)
- **Font Awesome** for iconography
- **Modular architecture**: reusable components, layout system, and typed data models

---

## 🌐 Features

- Fully multilingual: AR / DE with dynamic toggle
- RTL support for Arabic layout
- Clean project structure: `components`, `pages`, `utils`, `types`
- Responsive and accessible layout
- Dynamic rendering of teams, carousel, and project data

---

## 📁 Project Structure
```plaintext
📦src
 ┣ 📂components
 ┃ ┣ 📂layout
 ┃ ┃ ┗ 📜MainLayout.tsx
 ┃ ┣ 📜Banner.tsx
 ┃ ┣ 📜Carousel.tsx
 ┃ ┣ 📜CarouselCard.tsx
 ┃ ┣ 📜Footer.tsx
 ┃ ┣ 📜LanguageToggle.tsx
 ┃ ┣ 📜Navbar.tsx
 ┃ ┣ 📜ProjectSection.tsx
 ┃ ┣ 📜TeamMemberCard.tsx
 ┃ ┗ 📜TeamSection.tsx
 ┣ 📂locales
 ┃ ┣ 📜ar.json
 ┃ ┗ 📜de.json
 ┣ 📂pages
 ┃ ┗ 📜HomePage.tsx
 ┣ 📂types
 ┃ ┣ 📜BannerContent.ts
 ┃ ┣ 📜CarouselItem.ts
 ┃ ┣ 📜Project.ts
 ┃ ┣ 📜SocialLink.ts
 ┃ ┗ 📜TeamMember.ts
 ┣ 📂utils
 ┃ ┗ 📜languageToggle.ts
 ┣ 📜App.css
 ┣ 📜App.tsx
 ┣ 📜i18n.js
 ┣ 📜index.css
 ┣ 📜main.tsx
 ┗ 📜vite-env.d.ts
```

---

## 🛠️ Setup & Development

# Install dependencies
```bash
npm install
```

# Start the development server
```bash
npm run dev
```

# Build for production
```bash
npm run build
```

## 📄 License
This project is developed for internal use by Syrmania Assembly e.V..
Please contact the maintainers for reuse or contributions.

## ✨ Authors

This project is developed and maintained by the Syrmania Assembly e.V. Web Team:


| Name              | Role         | Website                | GitHub                            |
|-------------------|--------------|------------------------|------------------------------------|
| Syrmania Assembly | Team Lead    | [website.com](#)       | [@SyrmaniaAssembly](#)            |
| Anas Baaj         | Developer    | [website.com](#)       | [@anasAB](https://github.com/anasAB) |
| Najma Islam       | Developer    | [website.com](#)       | [@najmaIslam](https://github.com/najmaIslam) |
| Mohamad Alaskari  | Developer    | [mohamadalaskari.com](https://mohamadalaskari.com) | [@MohamadAlaskari](https://github.com/MohamadAlaskari) |
| Mohamed Latifa    | Developer    | [website.com](#)       | [@Mo5005](https://github.com/Mo5005) |
| Fadi Makhoul      | Developer    | [website.com](#)       | [@fadimakhoul](https://github.com/fadimakhoul) |
| Redwan Obid       | Developer    | [website.com](#)       | [@RedwanObid](https://github.com/RedwanObid) |
| [Name 5]          | Developer    | [website.com](#)       | [@fhrd9394](https://github.com/fhrd9394) |

Want to join the team or contribute?
Contact us or open a pull request on GitHub.



This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


