import type { Metadata } from 'next'
import HeroSection from '@/components/HeroSection'
import ServicesSnapshot from '@/components/ServicesSnapshot'
import WhyChooseUs from '@/components/WhyChooseUs'
import CountriesRow from '@/components/CountriesRow'
import TestimonialsSection from '@/components/TestimonialsSection'
import ConsultationBanner from '@/components/ConsultationBanner'

export const metadata: Metadata = {
  title: 'Elite Hawk — Premium Immigration & Visa Consultants | Kurukshetra, Haryana',
  description:
    'Elite Hawk is Kurukshetra\'s most trusted immigration and visa consultancy with a 98% success rate. Study visa, work visa, PR, tourist visa for USA, Canada, UK, Australia & 30+ countries.',
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSnapshot />
      <WhyChooseUs />
      <CountriesRow />
      <TestimonialsSection />
      <ConsultationBanner />
    </>
  )
}
