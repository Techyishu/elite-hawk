import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-heading',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Elite Hawk — Premium Immigration & Visa Consultants | Kurukshetra',
  description:
    'Elite Hawk is Kurukshetra\'s most trusted immigration and visa consultancy. Study visa, work visa, PR, and tourist visa services for USA, Canada, UK, Australia & 30+ countries.',
  keywords: 'visa consultant Kurukshetra, immigration consultant Haryana, study visa, Canada PR, UK work visa',
  openGraph: {
    title: 'Elite Hawk — Premium Visa Consultants',
    description: 'Your gateway to global opportunities. Trusted immigration experts in Kurukshetra.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${dmSans.variable}`}
    >
      <body className="bg-navy text-ivory font-body antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
