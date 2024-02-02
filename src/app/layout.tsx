import type { Metadata } from 'next';
import './globals.css';
import { Header, Footer } from '@/components';
import { roboto } from '@/fonts/fonts';

export const metadata: Metadata = {
  title: 'Prime Web Solutions',
  description: `Prime Web Solutions, a software development company, is committed to crafting top-tier web applications that elevate businesses through impactful digital interactions. Our team specializes in delivering high-quality custom websites and internal applications tailored to fuel growth and success. Explore our innovative approach to software and web development, designed to provide businesses with the competitive edge they need in today's dynamic digital landscape. Elevate your online presence with Prime Web Solutions - where excellence meets technology to redefine the digital experience for your business.`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${roboto.className}`}>
        <Header />
        <main className="grow relative w-full flex flex-col tracking-wider">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
