'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ChevronDown, ArrowRight } from 'lucide-react'
import StatCounter from './StatCounter'

const floatingDots = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 3 + 1,
  duration: Math.random() * 4 + 4,
  delay: Math.random() * 4,
}))

const stats = [
  { value: 5000, label: 'Visas Approved', suffix: '+' },
  { value: 30, label: 'Countries Covered', suffix: '+' },
  { value: 98, label: 'Success Rate', suffix: '%' },
]

export default function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden hero-bg-pattern">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Radial glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-navy-light/50 rounded-full blur-3xl" />

        {/* Grid lines */}
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'linear-gradient(rgba(201,168,76,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.5) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />

        {/* Floating dots */}
        {mounted && floatingDots.map((dot) => (
          <div
            key={dot.id}
            className="absolute rounded-full bg-gold/30"
            style={{
              left: `${dot.x}%`,
              top: `${dot.y}%`,
              width: `${dot.size}px`,
              height: `${dot.size}px`,
              animation: `floatDot ${dot.duration}s ease-in-out ${dot.delay}s infinite`,
            }}
          />
        ))}

        {/* Large decorative circle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-gold/5 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] border border-gold/3 rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gold/10 border border-gold/20 rounded-full mb-6">
            <span className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse" />
            <span className="text-gold text-xs font-medium tracking-wider uppercase">
              Trusted by 5,000+ Families
            </span>
          </div>

          {/* Heading */}
          <h1
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.05] mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            <span className="text-ivory block">Your Gateway to</span>
            <span className="shimmer-text block">Global Opportunities</span>
          </h1>

          {/* Subheading */}
          <p className="text-slate text-lg md:text-xl max-w-xl mb-10 leading-relaxed font-body">
            Expert immigration and visa consulting services from Kurukshetra. We&apos;ve helped 5,000+ families achieve their global dreams with a 98% success rate.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold text-navy text-sm font-bold rounded-full hover:bg-gold-light transition-all duration-300 hover:shadow-2xl hover:shadow-gold/30 hover:-translate-y-1 group"
            >
              Book Free Consultation
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border border-gold/40 text-gold text-sm font-semibold rounded-full hover:bg-gold/10 hover:border-gold transition-all duration-300"
            >
              Explore Services →
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 sm:gap-10 max-w-lg">
            {stats.map((stat, i) => (
              <div key={i} className="relative">
                {i > 0 && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-10 bg-gold/20 hidden sm:block" />
                )}
                <StatCounter
                  value={stat.value}
                  label={stat.label}
                  suffix={stat.suffix}
                  className="sm:pl-8 first:pl-0"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll arrow */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce-slow">
        <span className="text-slate/50 text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown size={20} className="text-gold/50" />
      </div>
    </section>
  )
}
