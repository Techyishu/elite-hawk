'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import StatCounter from './StatCounter'

const destinations = [
  'CANADA', 'UNITED STATES', 'UNITED KINGDOM', 'AUSTRALIA',
  'GERMANY', 'NEW ZEALAND', 'SINGAPORE', 'FRANCE', 'UAE', 'JAPAN',
  'NETHERLANDS', 'IRELAND', 'CANADA', 'UNITED STATES',
]

const stats = [
  { value: 5000, label: 'Visas Approved', suffix: '+' },
  { value: 30, label: 'Countries', suffix: '+' },
  { value: 98, label: 'Success Rate', suffix: '%' },
]

// Topographic contour lines — organic closed curves
const contourPaths = [
  'M 50,200 C 150,100 350,80 500,150 C 650,220 750,300 800,250 C 850,200 900,180 950,200 L 950,400 C 900,380 850,360 800,380 C 750,400 650,460 500,400 C 350,340 150,360 50,400 Z',
  'M 20,280 C 120,160 340,130 520,200 C 700,270 780,340 860,300 C 920,270 960,250 980,260 L 980,480 C 960,470 920,460 860,490 C 780,520 700,560 520,510 C 340,460 120,490 20,480 Z',
  'M 0,350 C 100,220 330,180 540,250 C 750,320 820,390 900,360 C 940,345 970,330 1000,340 L 1000,560 C 970,550 940,545 900,560 C 820,580 750,610 540,570 C 330,530 100,570 0,560 Z',
  'M -30,430 C 80,290 320,240 560,310 C 800,380 860,440 940,420 C 970,412 990,405 1020,410 L 1020,640 C 990,632 970,628 940,640 C 860,660 800,680 560,650 C 320,620 80,655 -30,645 Z',
  'M -60,510 C 60,360 310,300 580,370 C 850,440 900,500 980,480 C 1010,472 1040,465 1060,470 L 1060,720 C 1040,714 1010,710 980,720 C 900,740 850,755 580,730 C 310,705 60,740 -60,730 Z',
  'M -20,140 C 100,40 300,20 480,80 C 660,140 740,210 820,180 C 880,158 930,145 980,155 L 980,320 C 930,308 880,300 820,325 C 740,355 660,390 480,345 C 300,300 100,330 -20,320 Z',
]

export default function HeroSection() {
  const [tickerOffset, setTickerOffset] = useState(0)
  const [compassAngle, setCompassAngle] = useState(0)
  const [revealed, setRevealed] = useState(false)
  const tickerRef = useRef<number | null>(null)
  const compassRef = useRef<number | null>(null)

  useEffect(() => {
    const t = setTimeout(() => setRevealed(true), 100)
    return () => clearTimeout(t)
  }, [])

  // Slow compass rotation
  useEffect(() => {
    let angle = 0
    const step = () => {
      angle += 0.04
      setCompassAngle(angle)
      compassRef.current = requestAnimationFrame(step)
    }
    compassRef.current = requestAnimationFrame(step)
    return () => { if (compassRef.current) cancelAnimationFrame(compassRef.current) }
  }, [])

  // Ticker scroll
  useEffect(() => {
    let x = 0
    const speed = 0.6
    const tick = () => {
      x -= speed
      if (x < -1400) x = 0
      setTickerOffset(x)
      tickerRef.current = requestAnimationFrame(tick)
    }
    tickerRef.current = requestAnimationFrame(tick)
    return () => { if (tickerRef.current) cancelAnimationFrame(tickerRef.current) }
  }, [])

  return (
    <section className="relative min-h-screen bg-navy overflow-hidden flex flex-col">

      {/* ── Topographic background ─────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none">
        <svg
          viewBox="0 0 1000 700"
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="xMidYMid slice"
        >
          {contourPaths.map((d, i) => (
            <path
              key={i}
              d={d}
              fill="none"
              stroke="#C9A84C"
              strokeWidth="0.6"
              opacity={0.06 + i * 0.01}
            />
          ))}
          {/* Coordinate grid — sparse, elegant */}
          {[0, 200, 400, 600, 800, 1000].map(x => (
            <line key={`vl${x}`} x1={x} y1="0" x2={x} y2="700" stroke="#C9A84C" strokeWidth="0.3" opacity="0.04" />
          ))}
          {[0, 175, 350, 525, 700].map(y => (
            <line key={`hl${y}`} x1="0" y1={y} x2="1000" y2={y} stroke="#C9A84C" strokeWidth="0.3" opacity="0.04" />
          ))}
          {/* Coordinate labels */}
          {['29°58\'N', '30°05\'N', '30°12\'N', '30°19\'N'].map((label, i) => (
            <text key={label} x="8" y={80 + i * 155} fill="#C9A84C" opacity="0.12" fontSize="8" fontFamily="monospace">{label}</text>
          ))}
          {['76°48\'E', '76°52\'E', '76°56\'E', '77°00\'E', '77°04\'E'].map((label, i) => (
            <text key={label} x={40 + i * 200} y="692" fill="#C9A84C" opacity="0.12" fontSize="8" fontFamily="monospace">{label}</text>
          ))}
        </svg>

        {/* Dark vignette left side */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/60 to-transparent" />
        {/* Top fade */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-navy to-transparent" />
      </div>

      {/* ── Compass Rose (right side) ──────────────────────────── */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 pointer-events-none"
        style={{ width: 'min(640px, 60vw)', height: 'min(640px, 60vw)' }}
      >
        {/* Outer ring — static */}
        <svg
          viewBox="0 0 400 400"
          className="absolute inset-0 w-full h-full"
          style={{ opacity: 0.08 }}
        >
          <circle cx="200" cy="200" r="190" stroke="#C9A84C" strokeWidth="1" fill="none" strokeDasharray="4 8" />
          <circle cx="200" cy="200" r="160" stroke="#C9A84C" strokeWidth="0.5" fill="none" />
          <circle cx="200" cy="200" r="120" stroke="#C9A84C" strokeWidth="0.5" fill="none" strokeDasharray="2 6" />
          {/* Degree markers */}
          {Array.from({ length: 72 }).map((_, i) => {
            const angle = (i * 5 * Math.PI) / 180
            const inner = i % 18 === 0 ? 148 : i % 6 === 0 ? 153 : 156
            return (
              <line
                key={i}
                x1={200 + Math.sin(angle) * inner}
                y1={200 - Math.cos(angle) * inner}
                x2={200 + Math.sin(angle) * 160}
                y2={200 - Math.cos(angle) * 160}
                stroke="#C9A84C"
                strokeWidth={i % 18 === 0 ? 1.5 : i % 6 === 0 ? 0.8 : 0.4}
              />
            )
          })}
          {/* Cardinal labels */}
          {[['N', 200, 24], ['S', 200, 384], ['E', 382, 204], ['W', 18, 204]].map(([l, x, y]) => (
            <text key={String(l)} x={Number(x)} y={Number(y)} textAnchor="middle" fill="#C9A84C" fontSize="14" fontFamily="serif" fontWeight="bold">{l}</text>
          ))}
        </svg>

        {/* Inner compass — rotating */}
        <svg
          viewBox="0 0 400 400"
          className="absolute inset-0 w-full h-full"
          style={{
            opacity: 0.12,
            transform: `rotate(${compassAngle}deg)`,
            transformOrigin: 'center',
          }}
        >
          {/* Main 8-point star */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => {
            const r = (deg % 90 === 0) ? Math.PI * deg / 180 : Math.PI * deg / 180
            const len = deg % 90 === 0 ? 110 : 75
            const width = deg % 90 === 0 ? 10 : 6
            const cx = 200, cy = 200
            const tip = [cx + Math.sin(r) * len, cy - Math.cos(r) * len]
            const left = [cx + Math.sin(r - Math.PI / 2) * width, cy - Math.cos(r - Math.PI / 2) * width]
            const right = [cx + Math.sin(r + Math.PI / 2) * width, cy - Math.cos(r + Math.PI / 2) * width]
            const back = [cx + Math.sin(r + Math.PI) * (len * 0.4), cy - Math.cos(r + Math.PI) * (len * 0.4)]
            return (
              <polygon
                key={deg}
                points={`${tip[0]},${tip[1]} ${left[0]},${left[1]} ${back[0]},${back[1]} ${right[0]},${right[1]}`}
                fill="#C9A84C"
              />
            )
          })}
          <circle cx="200" cy="200" r="12" fill="#C9A84C" />
          <circle cx="200" cy="200" r="6" fill="#0A0F2C" />
        </svg>

        {/* Glow */}
        <div className="absolute inset-0 rounded-full"
          style={{ background: 'radial-gradient(circle at center, rgba(201,168,76,0.04) 0%, transparent 70%)' }}
        />
      </div>

      {/* ── Gold vertical accent line ─────────────────────────── */}
      <div className="absolute left-0 top-0 bottom-0 flex flex-col items-center w-8 pointer-events-none">
        <div
          className="w-px bg-gradient-to-b from-transparent via-gold to-transparent"
          style={{
            height: '100%',
            opacity: 0.25,
            transition: 'opacity 1s',
          }}
        />
        {/* Coordinate marker */}
        <div className="absolute top-1/2 -translate-y-1/2 flex flex-col items-center gap-1">
          <div className="w-1.5 h-1.5 bg-gold rounded-full opacity-60" />
        </div>
      </div>

      {/* ── Main content ──────────────────────────────────────── */}
      <div className="relative z-10 flex-1 flex flex-col justify-center max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 w-full">
        <div className="pt-28 pb-10 max-w-3xl">

          {/* Location stamp */}
          <div
            className="flex items-center gap-3 mb-10"
            style={{
              opacity: revealed ? 1 : 0,
              transform: revealed ? 'none' : 'translateY(12px)',
              transition: 'opacity 0.7s ease, transform 0.7s ease',
            }}
          >
            <div className="h-px w-8 bg-gold/50" />
            <span
              className="text-gold/70 text-[11px] tracking-[0.3em] uppercase"
              style={{ fontFamily: 'var(--font-body)', letterSpacing: '0.28em' }}
            >
              Kurukshetra · Haryana · India · Est. 2014
            </span>
          </div>

          {/* Main headline — oversized, editorial */}
          <div className="mb-8 overflow-hidden">
            <div
              style={{
                opacity: revealed ? 1 : 0,
                transform: revealed ? 'none' : 'translateY(60px)',
                transition: 'opacity 0.9s cubic-bezier(0.16,1,0.3,1) 0.1s, transform 0.9s cubic-bezier(0.16,1,0.3,1) 0.1s',
              }}
            >
              <h1
                className="leading-none font-bold"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(3.2rem, 8vw, 7.5rem)',
                  color: '#F5F0E8',
                  letterSpacing: '-0.02em',
                }}
              >
                Navigate
              </h1>
            </div>
            <div
              style={{
                opacity: revealed ? 1 : 0,
                transform: revealed ? 'none' : 'translateY(60px)',
                transition: 'opacity 0.9s cubic-bezier(0.16,1,0.3,1) 0.25s, transform 0.9s cubic-bezier(0.16,1,0.3,1) 0.25s',
              }}
            >
              <h1
                className="leading-none font-bold relative"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(3.2rem, 8vw, 7.5rem)',
                  letterSpacing: '-0.02em',
                  WebkitTextStroke: '1.5px #C9A84C',
                  color: 'transparent',
                }}
              >
                Your World.
              </h1>
            </div>
          </div>

          {/* Sub headline */}
          <div
            style={{
              opacity: revealed ? 1 : 0,
              transform: revealed ? 'none' : 'translateY(20px)',
              transition: 'opacity 0.8s ease 0.5s, transform 0.8s ease 0.5s',
            }}
          >
            <p
              className="text-slate mb-10 leading-relaxed"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(0.95rem, 1.5vw, 1.15rem)',
                maxWidth: '480px',
              }}
            >
              Premium immigration & visa consulting with a 98% success rate.
              Kurukshetra&apos;s most trusted gateway to 30+ countries.
            </p>
          </div>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row items-start gap-4 mb-16"
            style={{
              opacity: revealed ? 1 : 0,
              transform: revealed ? 'none' : 'translateY(16px)',
              transition: 'opacity 0.8s ease 0.65s, transform 0.8s ease 0.65s',
            }}
          >
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-3 overflow-hidden"
            >
              <span
                className="relative z-10 flex items-center gap-3 px-8 py-4 text-sm font-semibold tracking-wide"
                style={{
                  fontFamily: 'var(--font-body)',
                  background: '#C9A84C',
                  color: '#0A0F2C',
                  clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 100%, 12px 100%)',
                  transition: 'background 0.3s',
                }}
              >
                Book Free Consultation
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <span
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: '#E8C97A',
                  clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 100%, 12px 100%)',
                }}
              />
            </Link>

            <Link
              href="/services"
              className="group inline-flex items-center gap-2 px-2 py-4 text-sm text-slate hover:text-ivory transition-colors duration-300"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              <span
                className="block h-px bg-gold/50 group-hover:bg-gold transition-all duration-300"
                style={{ width: '24px' }}
              />
              View Services
            </Link>
          </div>

          {/* Stats — horizontal bar, editorial style */}
          <div
            className="flex items-stretch gap-0 border-t border-gold/15 pt-8"
            style={{
              opacity: revealed ? 1 : 0,
              transition: 'opacity 0.8s ease 0.85s',
            }}
          >
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="flex-1 pr-6"
                style={{
                  borderLeft: i > 0 ? '1px solid rgba(201,168,76,0.15)' : 'none',
                  paddingLeft: i > 0 ? '1.5rem' : '0',
                }}
              >
                <StatCounter
                  value={stat.value}
                  label={stat.label}
                  suffix={stat.suffix}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Destination Ticker ────────────────────────────────── */}
      <div
        className="relative z-10 border-t border-gold/10 overflow-hidden py-3"
        style={{ background: 'rgba(10,15,44,0.8)', backdropFilter: 'blur(8px)' }}
      >
        <div
          className="flex items-center gap-0 whitespace-nowrap"
          style={{ transform: `translateX(${tickerOffset}px)`, willChange: 'transform' }}
        >
          {[...destinations, ...destinations, ...destinations].map((dest, i) => (
            <span key={i} className="inline-flex items-center gap-6">
              <span
                className="text-gold/40 text-[10px] tracking-[0.35em] uppercase"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {dest}
              </span>
              <span className="text-gold/20 text-[10px]" style={{ marginLeft: '-12px' }}>✦</span>
            </span>
          ))}
        </div>

        {/* Fade edges */}
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-navy to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-navy to-transparent pointer-events-none" />
      </div>

      {/* ── Vertical scroll indicator ─────────────────────────── */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col items-center gap-2 pointer-events-none hidden lg:flex">
        <span
          className="text-gold/30 text-[9px] tracking-[0.3em] uppercase"
          style={{ writingMode: 'vertical-rl', fontFamily: 'var(--font-body)' }}
        >
          Scroll
        </span>
        <div className="w-px h-16 bg-gold/15 relative overflow-hidden">
          <div
            className="absolute top-0 w-full bg-gold/60"
            style={{
              height: '40%',
              animation: 'scrollDot 2s ease-in-out infinite',
            }}
          />
        </div>
      </div>

      {/* Scroll dot keyframe */}
      <style>{`
        @keyframes scrollDot {
          0%   { transform: translateY(-100%); opacity: 0; }
          20%  { opacity: 1; }
          80%  { opacity: 1; }
          100% { transform: translateY(300%); opacity: 0; }
        }
      `}</style>
    </section>
  )
}
