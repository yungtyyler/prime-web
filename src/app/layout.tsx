import type { Metadata } from 'next';
import './globals.css';
import { Header, Footer } from '@/components';
import { roboto } from '@/fonts/fonts';
import Analytics from '@/components/3rd-party/Analytics';

export const metadata: Metadata = {
  title: 'Prime Web Solutions',
  description: `Prime Web Solutions, a software development company, is committed to crafting top-tier web applications that elevate businesses through impactful digital interactions. Our team specializes in delivering high-quality custom websites and internal applications tailored to fuel growth and success. Explore our innovative approach to software and web development, designed to provide businesses with the competitive edge they need in today's dynamic digital landscape. Elevate your online presence with Prime Web Solutions - where excellence meets technology to redefine the digital experience for your business.`,
  openGraph: {
    type: 'website',
    url: 'https://primewebsolutions.org',
    title: 'Prime Web Solutions',

    description: `Prime Web Solutions, a software development company, is committed to crafting top-tier web applications that elevate businesses through impactful digital interactions. Our team specializes in delivering high-quality custom websites and internal applications tailored to fuel growth and success. Explore our innovative approach to software and web development, designed to provide businesses with the competitive edge they need in today's dynamic digital landscape. Elevate your online presence with Prime Web Solutions - where excellence meets technology to redefine the digital experience for your business.`,
    images: [
      {
        url: 'https://primewebsolutions.org/black-white.png',
        width: 1200,
        height: 630,
        alt: 'Prime Web Solutions',
      },
    ],
  },
  alternates: {
    canonical: 'https://primewebsolutions.org',
  },
  keywords: [
    'software development',
    'web development',
    'web applications',
    'custom websites',
    'internal applications',
    'digital experience',
    'business growth',
    'software',
    'web',
    'development',
    'applications',
    'websites',
    'internal',
    'digital',
    'experience',
    'business',
    'growth',
  ],
};

const GOOGLE_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID!;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${roboto.className} dark:bg-prime-jet bg-prime-alabaster relative min-h-screen flex flex-col`}
      >
        <Header />
        <main className="grow relative w-full flex flex-col tracking-wider">
          {children}
        </main>
        <Footer />
        <Analytics id={GOOGLE_ID} />
      </body>
    </html>
  );
}
