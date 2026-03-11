'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { countries, type Country } from '@/lib/data'
import ConsultationBanner from '@/components/ConsultationBanner'
import { Clock } from 'lucide-react'

const regions = ['All', 'Europe', 'Asia', 'Americas', 'Oceania', 'Middle East'] as const

const difficultyConfig = {
  Easy: { color: 'text-emerald-400', bg: 'bg-emerald-400/10 border-emerald-400/30' },
  Medium: { color: 'text-amber-400', bg: 'bg-amber-400/10 border-amber-400/30' },
  Complex: { color: 'text-red-400', bg: 'bg-red-400/10 border-red-400/30' },
}

export default function CountriesPage() {
  const [activeRegion, setActiveRegion] = useState<string>('All')

  const filtered = activeRegion === 'All'
    ? countries
    : countries.filter((c) => c.region === activeRegion)

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-4 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-mid/50 to-transparent" />
        <div className="relative max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-slate text-sm mb-4">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <span className="text-gold/40">/</span>
            <span className="text-ivory">Countries</span>
          </div>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-ivory mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            <span className="text-gold">Top Destinations</span>
          </h1>
          <p className="text-slate text-lg max-w-2xl">
            We provide expert visa guidance for 30+ countries. Explore your dream destination below.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="py-8 px-4 bg-navy-mid border-b border-gold/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3">
            {regions.map((region) => (
              <button
                key={region}
                onClick={() => setActiveRegion(region)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeRegion === region
                    ? 'bg-gold text-navy shadow-lg shadow-gold/20'
                    : 'bg-navy border border-gold/20 text-slate hover:border-gold/50 hover:text-ivory'
                }`}
              >
                {region}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Countries Grid */}
      <section className="py-16 px-4 bg-navy">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filtered.map((country, i) => {
                const diff = difficultyConfig[country.difficulty]
                return (
                  <motion.div
                    key={country.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3, delay: i * 0.04 }}
                    className="bg-navy-mid border border-gold/10 rounded-2xl p-6 hover:border-gold/40 hover:-translate-y-1.5 transition-all duration-300 group flex flex-col"
                  >
                    {/* Flag + name */}
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-5xl">{country.flag}</span>
                      <div>
                        <h3
                          className="text-ivory font-bold text-xl group-hover:text-gold transition-colors"
                          style={{ fontFamily: 'var(--font-heading)' }}
                        >
                          {country.name}
                        </h3>
                        <span className="text-xs text-slate/70 px-2 py-0.5 bg-navy-light rounded-full border border-gold/10">
                          {country.region}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-slate text-sm leading-relaxed mb-4 flex-1">{country.description}</p>

                    {/* Visa types */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {country.visaTypes.map((vt) => (
                        <span
                          key={vt}
                          className="px-2.5 py-1 bg-gold/10 border border-gold/20 rounded-full text-gold text-xs font-medium"
                        >
                          {vt}
                        </span>
                      ))}
                    </div>

                    {/* Footer meta */}
                    <div className="flex items-center justify-between pt-4 border-t border-gold/10">
                      <div className="flex items-center gap-1.5 text-slate text-xs">
                        <Clock size={12} className="text-gold" />
                        {country.processingTime}
                      </div>
                      <span className={`px-2.5 py-1 rounded-full text-xs border font-medium ${diff.bg} ${diff.color}`}>
                        {country.difficulty}
                      </span>
                    </div>

                    {/* CTA */}
                    <Link
                      href="/contact"
                      className="mt-4 w-full py-2.5 text-center text-sm text-gold border border-gold/30 rounded-xl hover:bg-gold/10 transition-colors"
                    >
                      Get Visa Guidance
                    </Link>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-slate">
              No countries found for this region.
            </div>
          )}
        </div>
      </section>

      <ConsultationBanner />
    </>
  )
}
