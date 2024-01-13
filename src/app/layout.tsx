import type { Metadata } from 'next';
import './globals.css';
import { Header, Footer } from '@/components';
import { roboto } from '@/fonts/fonts';

export const metadata: Metadata = {
  title: 'Prime Web Solutions',
  description:
    'Prime Web Solutions is a software development company dedicated to building high quality web applications to help grow businesses through meaningful digital experiences.',
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
        <main className="relative w-full flex flex-col tracking-wider">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
