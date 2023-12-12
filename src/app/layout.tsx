import type { Metadata } from 'next';
import './globals.css';
import { Header, Footer } from '@/components';
import { oswald, roboto } from '@/fonts/fonts';

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
    <html lang="en">
      <body className={`${roboto.className}`}>
        <div className="flex flex-col h-screen justify-between">
          <Header />
          <main className="grow relative w-full flex flex-col">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
