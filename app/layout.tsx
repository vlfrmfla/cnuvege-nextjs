import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Navbar } from './components/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { baseUrl } from './sitemap'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'CNU Vege Homepage',
    template: '%s | CNU Vege Homepage',
  },
  description: 'CNU Vege Homepage.',
  openGraph: {
    title: 'CNU Vege Homepage',
    description: '충남대학교 채소원예학연구실에 오신것을 환영합니다.',
    url: baseUrl,
    siteName: 'CNU Vege Homepage',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cx(
        'text-black bg-white',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="antialiased mx-auto px-4 sm:px-6 mt-8">
        <main className="mx-auto min-w-0 mt-6 flex flex-col px-4 md:px-8 max-w-full md:max-w-[88%]">
          <Navbar />
          <main className="pt-[80px]">
            {children}
          </main>
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  )
}

