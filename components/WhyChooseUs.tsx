'use client'

import { UserCheck, Zap, FileText, HeartHandshake } from 'lucide-react'
import { motion } from 'framer-motion'

const points = [
  {
    icon: UserCheck,
    title: 'Expert Counselors',
    desc: 'Our team of certified immigration experts brings 50+ years of combined experience across all major visa categories.',
  },
  {
    icon: Zap,
    title: 'Fast Processing',
    desc: 'Streamlined documentation and direct embassy relationships ensure your application is processed as quickly as possible.',
  },
  {
    icon: FileText,
    title: 'Document Support',
    desc: 'We handle every document — SOP, LOR, attestation, translation, and more — with meticulous attention to detail.',
  },
  {
    icon: HeartHandshake,
    title: 'Post-Visa Help',
    desc: 'Our support extends beyond approval — pre-departure orientation, accommodation guidance, and settlement assistance.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 px-4 bg-navy">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gold text-xs font-medium tracking-widest uppercase mb-3">Our Advantage</p>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-ivory mb-6 leading-tight"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Why Thousands Trust{' '}
              <span className="text-gold">Elite Hawk</span>
            </h2>
            <p className="text-slate text-base leading-relaxed mb-8">
              Since our founding in Kurukshetra, we have been the region&apos;s most trusted immigration partner. Our approach combines deep legal expertise with genuine personal care — we treat every application as if it were our own family&apos;s.
            </p>
            <div className="space-y-4">
              {['Certified ICCRC and MARA members', '98% visa success rate over 10+ years', 'Transparent pricing, no hidden fees', 'End-to-end support from consultation to landing'].map((point, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center flex-shrink-0">
                    <span className="text-gold text-xs">✓</span>
                  </div>
                  <span className="text-ivory/80 text-sm">{point}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Feature grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {points.map((point, i) => (
              <div
                key={point.title}
                className="bg-navy-mid border border-gold/10 rounded-xl p-6 hover:border-gold/30 transition-all duration-300 group"
              >
                <div className="w-11 h-11 rounded-lg bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                  <point.icon size={20} className="text-gold" />
                </div>
                <h3
                  className="text-ivory font-semibold text-base mb-2"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {point.title}
                </h3>
                <p className="text-slate text-sm leading-relaxed">{point.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
