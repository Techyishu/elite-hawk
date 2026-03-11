'use client'

import Link from 'next/link'
import { GraduationCap, Briefcase, Plane, Home, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

const services = [
  {
    icon: GraduationCap,
    title: 'Study Visa',
    desc: 'Secure admission and visa for top universities in USA, Canada, UK, Australia & Europe.',
    href: '/services',
  },
  {
    icon: Briefcase,
    title: 'Work Visa',
    desc: 'Skilled worker and employer-sponsored visas for global career advancement.',
    href: '/services',
  },
  {
    icon: Plane,
    title: 'Tourist Visa',
    desc: 'Hassle-free holiday and leisure visas for individuals and families worldwide.',
    href: '/services',
  },
  {
    icon: Home,
    title: 'PR & Immigration',
    desc: 'Points-based permanent residency pathways for Canada, Australia & New Zealand.',
    href: '/services',
  },
]

export default function ServicesSnapshot() {
  return (
    <section className="py-20 px-4 bg-navy-mid">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="text-gold text-xs font-medium tracking-widest uppercase mb-3">What We Offer</p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-ivory"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Our Core Services
          </h2>
          <div className="mt-4 w-16 h-0.5 bg-gold mx-auto" />
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                href={service.href}
                className="group block bg-navy border border-gold/10 rounded-2xl p-7 hover:border-gold/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-gold/10 h-full"
              >
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors">
                  <service.icon size={24} className="text-gold" />
                </div>
                <h3
                  className="text-ivory font-semibold text-lg mb-3"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {service.title}
                </h3>
                <p className="text-slate text-sm leading-relaxed mb-4">{service.desc}</p>
                <span className="inline-flex items-center gap-1 text-gold text-xs font-medium group-hover:gap-2 transition-all">
                  Learn More <ArrowRight size={12} />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-gold text-sm font-medium hover:text-gold-light transition-colors group"
          >
            View All Services
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}
