'use client'

import Link from 'next/link'
import { useState } from 'react'
import { GraduationCap, Briefcase, Plane, Home, Building2, Users, ChevronDown, ChevronUp, ArrowRight, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { services } from '@/lib/data'
import ConsultationBanner from '@/components/ConsultationBanner'

const iconMap: Record<string, React.ElementType> = {
  GraduationCap,
  Briefcase,
  Plane,
  Home,
  Building2,
  Users,
}

const processSteps = [
  { num: '01', title: 'Free Consultation', desc: 'Discuss your goals and get expert guidance on the best visa pathway for your profile.' },
  { num: '02', title: 'Document Review', desc: 'Our specialists prepare and verify every document to meet embassy requirements.' },
  { num: '03', title: 'Application Filing', desc: 'We submit your application and track its status with regular updates.' },
  { num: '04', title: 'Visa Approval 🎉', desc: 'Receive your visa and get pre-departure orientation from our team.' },
]

function AccordionSection({ title, items }: { title: string; items: string[] }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-gold/15 rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 bg-navy-light/50 text-ivory text-sm font-medium hover:bg-navy-light transition-colors"
      >
        {title}
        {open ? <ChevronUp size={16} className="text-gold" /> : <ChevronDown size={16} className="text-gold" />}
      </button>
      <div className={`transition-all duration-300 ${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
        <ul className="px-5 py-4 space-y-2 bg-navy-light/20">
          {items.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-slate text-sm">
              <span className="text-gold mt-0.5">•</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-4 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-mid/50 to-transparent" />
        <div className="relative max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-slate text-sm mb-4">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <span className="text-gold/40">/</span>
            <span className="text-ivory">Services</span>
          </div>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-ivory mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Our <span className="text-gold">Visa Services</span>
          </h1>
          <p className="text-slate text-lg max-w-2xl">
            Comprehensive immigration solutions tailored to your goals. From study visas to permanent residency — we handle it all.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 bg-navy">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon]
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (i % 2) * 0.15 }}
                  className="bg-navy-mid border border-gold/10 rounded-2xl p-8 hover:border-gold/30 transition-all duration-300 group"
                >
                  {/* Icon + title */}
                  <div className="flex items-start gap-4 mb-5">
                    <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                      {Icon && <Icon size={28} className="text-gold" />}
                    </div>
                    <div>
                      <h2
                        className="text-ivory text-xl font-bold"
                        style={{ fontFamily: 'var(--font-heading)' }}
                      >
                        {service.title}
                      </h2>
                      <p className="text-slate text-sm mt-1">{service.shortDesc}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="space-y-3 mb-6">
                    {service.description.map((para, j) => (
                      <p key={j} className="text-slate text-sm leading-relaxed">{para}</p>
                    ))}
                  </div>

                  {/* Key benefits */}
                  <div className="mb-5">
                    <h3 className="text-ivory text-sm font-semibold mb-3 uppercase tracking-wider">Key Benefits</h3>
                    <ul className="space-y-2">
                      {service.benefits.map((b, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-slate">
                          <CheckCircle size={14} className="text-gold mt-0.5 flex-shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Documents accordion */}
                  <AccordionSection
                    title="Documents Required"
                    items={service.documents}
                  />

                  {/* CTA */}
                  <Link
                    href="/contact"
                    className="mt-6 w-full flex items-center justify-center gap-2 py-3 bg-gold text-navy text-sm font-semibold rounded-xl hover:bg-gold-light transition-colors group-hover:shadow-lg group-hover:shadow-gold/20"
                  >
                    Apply Now <ArrowRight size={14} />
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-navy-mid">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-gold text-xs font-medium tracking-widest uppercase mb-3">Simple Process</p>
            <h2
              className="text-3xl md:text-4xl font-bold text-ivory"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              How It Works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-10 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-gold/20 via-gold/60 to-gold/20" style={{ left: '12.5%', right: '12.5%' }} />

            {processSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="text-center relative"
              >
                <div className="w-20 h-20 rounded-full bg-gold/10 border-2 border-gold/40 flex items-center justify-center mx-auto mb-5 relative z-10">
                  <span
                    className="text-gold text-xl font-bold"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {step.num}
                  </span>
                </div>
                <h3
                  className="text-ivory font-semibold text-base mb-2"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {step.title}
                </h3>
                <p className="text-slate text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ConsultationBanner />
    </>
  )
}
