'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

const countries = [
  { flag: '🇺🇸', name: 'USA' },
  { flag: '🇨🇦', name: 'Canada' },
  { flag: '🇬🇧', name: 'UK' },
  { flag: '🇦🇺', name: 'Australia' },
  { flag: '🇩🇪', name: 'Germany' },
  { flag: '🇳🇿', name: 'New Zealand' },
  { flag: '🇸🇬', name: 'Singapore' },
  { flag: '🇦🇪', name: 'UAE' },
  { flag: '🇫🇷', name: 'France' },
  { flag: '🇯🇵', name: 'Japan' },
]

export default function CountriesRow() {
  return (
    <section className="py-20 px-4 bg-navy-mid overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-gold text-xs font-medium tracking-widest uppercase mb-3">Where We Send You</p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-ivory"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Top Destinations
          </h2>
          <div className="mt-4 w-16 h-0.5 bg-gold mx-auto" />
        </div>

        {/* Horizontal scroll */}
        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide -mx-4 px-4">
          {countries.map((country, i) => (
            <motion.div
              key={country.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="snap-start flex-shrink-0"
            >
              <Link
                href="/countries"
                className="group flex flex-col items-center gap-3 w-28 bg-navy border border-gold/10 rounded-2xl p-5 hover:border-gold/40 hover:-translate-y-2 transition-all duration-300 hover:shadow-lg hover:shadow-gold/10"
              >
                <span className="text-4xl">{country.flag}</span>
                <span
                  className="text-ivory text-sm font-medium text-center group-hover:text-gold transition-colors"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {country.name}
                </span>
                <span className="text-gold/60 text-xs group-hover:text-gold transition-colors">
                  View →
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <Link
            href="/countries"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gold/10 border border-gold/30 text-gold text-sm font-medium rounded-full hover:bg-gold/20 transition-all duration-300 group"
          >
            View All Countries
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}
