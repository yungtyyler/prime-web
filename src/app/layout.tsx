import type { Metadata } from 'next'
import './globals.css'
import { Header, Footer } from '@/components'

export const metadata: Metadata = {
  title: 'Prime Web Solutions',
  description: 'Prime Web Solutions is a software development company dedicated to building high quality web applications to help grow businesses through meaningful digital experiences.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className='font-sen-bold'>
        <Header />
          <div className='max-w-6xl mx-auto h-[100vh] flex flex-col'>
            {children}
          </div>
        <Footer />
      </body>
    </html>
  )
}
