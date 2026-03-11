'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { teamMembers } from '@/lib/data'
import StatCounter from '@/components/StatCounter'
import ConsultationBanner from '@/components/ConsultationBanner'
import { Target, Eye } from 'lucide-react'

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-4 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-mid/50 to-transparent" />
        <div className="relative max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-slate text-sm mb-4">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <span className="text-gold/40">/</span>
            <span className="text-ivory">About</span>
          </div>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-ivory mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            About <span className="text-gold">Elite Hawk</span>
          </h1>
          <p className="text-slate text-lg max-w-2xl">
            A decade of trust, expertise, and successful journeys — meet the team behind Kurukshetra&apos;s most trusted immigration consultancy.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4 bg-navy">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-gold text-xs font-medium tracking-widest uppercase mb-3">Our Journey</p>
              <h2
                className="text-3xl md:text-4xl font-bold text-ivory mb-6"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Born in Kurukshetra,<br />Built for the World
              </h2>
              <div className="space-y-4 text-slate text-base leading-relaxed">
                <p>
                  Elite Hawk was founded in 2014 with a single mission: to make international immigration accessible, transparent, and stress-free for families across Haryana and beyond.
                </p>
                <p>
                  What began as a two-person consultancy in Kurukshetra has grown into a full-service immigration firm with a team of 12 certified experts, serving clients across India and processing visas for 30+ countries.
                </p>
                <p>
                  Our philosophy is simple — we treat every applicant as a member of our own family. We celebrate every visa approval, feel the weight of every rejection, and work tirelessly to turn setbacks into success stories.
                </p>
                <p>
                  Over 5,000 families have trusted us with their most important life decisions. That trust is our greatest achievement and our most powerful motivator.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              {/* Decorative image placeholder */}
              <div className="relative h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-navy-light to-navy-mid border border-gold/20">
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  {/* Eagle SVG */}
                  <svg viewBox="0 0 120 120" className="w-32 h-32 opacity-30" fill="none">
                    <circle cx="60" cy="60" r="58" stroke="#C9A84C" strokeWidth="1" />
                    <path
                      d="M60 20 C60 20, 42 36, 32 42 C26 45, 20 45, 22 50 C24 55, 36 52, 40 54 C44 56, 50 65, 60 88 C70 65, 76 56, 80 54 C84 52, 96 55, 98 50 C100 45, 94 45, 88 42 C78 36, 60 20, 60 20Z"
                      fill="#C9A84C"
                      opacity="0.8"
                    />
                    <circle cx="60" cy="38" r="5" fill="#E8C97A" />
                  </svg>
                  <p
                    className="text-gold/60 text-xl font-bold mt-4"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    ELITE HAWK
                  </p>
                  <p className="text-slate text-sm mt-1">Since 2014</p>
                </div>
                {/* Corner decoration */}
                <div className="absolute top-4 left-4 w-12 h-12 border-l-2 border-t-2 border-gold/30 rounded-tl-lg" />
                <div className="absolute bottom-4 right-4 w-12 h-12 border-r-2 border-b-2 border-gold/30 rounded-br-lg" />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-5 -left-5 bg-gold rounded-xl p-4 shadow-xl">
                <div className="text-navy text-2xl font-bold" style={{ fontFamily: 'var(--font-heading)' }}>10+</div>
                <div className="text-navy/70 text-xs">Years of Excellence</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4 bg-navy-mid">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-bold text-ivory"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Mission & Vision
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                Icon: Target,
                label: 'Our Mission',
                title: 'Simplify Immigration for Every Indian',
                text: 'To provide world-class, ethical, and affordable immigration consulting that empowers every Indian family to achieve their global aspirations. We believe borders should not limit human potential.',
              },
              {
                Icon: Eye,
                label: 'Our Vision',
                title: 'India\'s Most Trusted Immigration Partner',
                text: 'To become India\'s most trusted immigration consultancy — known not just for visa approvals, but for transforming lives and creating global citizens who carry Indian values wherever they go.',
              },
            ].map(({ Icon, label, title, text }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="bg-navy border-t-2 border-gold rounded-2xl p-8"
              >
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-5">
                  <Icon size={24} className="text-gold" />
                </div>
                <p className="text-gold text-xs font-medium tracking-wider uppercase mb-2">{label}</p>
                <h3
                  className="text-ivory font-bold text-xl mb-4"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {title}
                </h3>
                <p className="text-slate text-sm leading-relaxed">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4 bg-navy">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-gold text-xs font-medium tracking-widest uppercase mb-3">The People Behind Your Visa</p>
            <h2
              className="text-3xl md:text-4xl font-bold text-ivory"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Meet Our Expert Team
            </h2>
            <div className="mt-4 w-16 h-0.5 bg-gold mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-navy-mid border border-gold/10 rounded-2xl p-7 text-center hover:border-gold/40 hover:-translate-y-2 transition-all duration-300 group"
              >
                {/* Avatar */}
                <div className="w-16 h-16 rounded-full bg-gold/15 border-2 border-gold/40 flex items-center justify-center mx-auto mb-4 group-hover:border-gold/70 transition-colors">
                  <span
                    className="text-gold text-lg font-bold"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {member.initial}
                  </span>
                </div>
                <h3
                  className="text-ivory font-bold text-base mb-1"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {member.name}
                </h3>
                <p className="text-gold text-xs mb-2">{member.role}</p>
                <span className="inline-block px-3 py-1 bg-gold/10 border border-gold/20 rounded-full text-slate text-xs mb-3">
                  {member.exp} experience
                </span>
                <p className="text-slate text-xs leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 bg-navy-mid">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: 5000, label: 'Happy Clients', suffix: '+' },
              { value: 30, label: 'Countries', suffix: '+' },
              { value: 98, label: 'Success Rate', suffix: '%' },
              { value: 10, label: 'Years Active', suffix: '+' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <StatCounter value={stat.value} label={stat.label} suffix={stat.suffix} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ConsultationBanner />
    </>
  )
}
