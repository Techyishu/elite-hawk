'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/countries', label: 'Countries' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-navy/90 backdrop-blur-md border-b border-gold/10 shadow-lg shadow-navy/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10">
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
                <circle cx="20" cy="20" r="19" stroke="#C9A84C" strokeWidth="1" opacity="0.5" />
                {/* Eagle silhouette */}
                <path
                  d="M20 8 C20 8, 14 14, 10 16 C8 17, 6 17, 7 19 C8 21, 12 20, 14 21 C16 22, 18 25, 20 32 C22 25, 24 22, 26 21 C28 20, 32 21, 33 19 C34 17, 32 17, 30 16 C26 14, 20 8, 20 8Z"
                  fill="#C9A84C"
                />
                <path
                  d="M20 16 L20 32"
                  stroke="#C9A84C"
                  strokeWidth="1"
                  opacity="0.6"
                />
                <circle cx="20" cy="14" r="2" fill="#E8C97A" />
              </svg>
            </div>
            <div>
              <span
                className="font-heading font-bold text-xl text-gold group-hover:text-gold-light transition-colors"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                ELITE HAWK
              </span>
              <p className="text-[10px] text-slate tracking-widest uppercase leading-none">
                Immigration & Visa
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 group ${
                    isActive ? 'text-gold' : 'text-ivory/80 hover:text-ivory'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gold transition-all duration-300 ${
                      isActive ? 'w-4/5' : 'w-0 group-hover:w-4/5'
                    }`}
                  />
                </Link>
              )
            })}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/contact"
              className="px-6 py-2.5 bg-gold text-navy text-sm font-semibold rounded-full hover:bg-gold-light transition-all duration-300 hover:shadow-lg hover:shadow-gold/30 hover:-translate-y-0.5"
            >
              Free Consultation
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-ivory hover:text-gold transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-navy-mid border-t border-gold/10 px-4 py-4">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-gold/10 text-gold'
                      : 'text-ivory/80 hover:bg-navy-light hover:text-ivory'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="ml-auto w-1.5 h-1.5 bg-gold rounded-full" />
                  )}
                </Link>
              )
            })}
            <Link
              href="/contact"
              className="mt-2 px-6 py-3 bg-gold text-navy text-sm font-semibold rounded-full text-center hover:bg-gold-light transition-colors"
            >
              Free Consultation
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
