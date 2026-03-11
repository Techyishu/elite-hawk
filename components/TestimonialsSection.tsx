'use client'

import { motion } from 'framer-motion'
import { testimonials } from '@/lib/data'

export default function TestimonialsSection() {
  return (
    <section className="py-20 px-4 bg-navy">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-gold text-xs font-medium tracking-widest uppercase mb-3">Client Stories</p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-ivory"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            What Our Clients Say
          </h2>
          <div className="mt-4 w-16 h-0.5 bg-gold mx-auto" />
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-navy-mid border border-gold/10 rounded-2xl p-7 hover:border-gold/30 transition-all duration-300 group"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <span key={j} className="text-gold text-sm">★</span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-ivory/70 text-sm leading-relaxed mb-6 relative">
                <span className="text-gold/30 text-5xl absolute -top-2 -left-1 font-serif leading-none">&ldquo;</span>
                <span className="relative z-10">{t.quote}</span>
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-gold text-xs font-bold" style={{ fontFamily: 'var(--font-heading)' }}>
                    {t.initial}
                  </span>
                </div>
                <div>
                  <div className="text-ivory text-sm font-semibold">{t.name}</div>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="px-2 py-0.5 bg-gold/10 border border-gold/20 rounded-full text-gold text-[10px]">
                      {t.visa}
                    </span>
                    <span className="text-slate text-[10px]">→ {t.country}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
