import Link from 'next/link'
import { MapPin, Phone, Clock, Mail, Instagram, Twitter, Facebook, Linkedin } from 'lucide-react'

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/countries', label: 'Countries' },
  { href: '/about', label: 'About Us' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

const serviceLinks = [
  { href: '/services', label: 'Study Visa' },
  { href: '/services', label: 'Work Visa' },
  { href: '/services', label: 'Tourist Visa' },
  { href: '/services', label: 'PR & Immigration' },
  { href: '/services', label: 'Business Visa' },
  { href: '/services', label: 'Dependent Visa' },
]

export default function Footer() {
  return (
    <footer className="bg-navy-mid border-t border-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4 group">
              <div className="relative w-9 h-9">
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-9 h-9">
                  <circle cx="20" cy="20" r="19" stroke="#C9A84C" strokeWidth="1" opacity="0.5" />
                  <path
                    d="M20 8 C20 8, 14 14, 10 16 C8 17, 6 17, 7 19 C8 21, 12 20, 14 21 C16 22, 18 25, 20 32 C22 25, 24 22, 26 21 C28 20, 32 21, 33 19 C34 17, 32 17, 30 16 C26 14, 20 8, 20 8Z"
                    fill="#C9A84C"
                  />
                  <circle cx="20" cy="14" r="2" fill="#E8C97A" />
                </svg>
              </div>
              <div>
                <span className="font-heading font-bold text-lg text-gold" style={{ fontFamily: 'var(--font-heading)' }}>
                  ELITE HAWK
                </span>
                <p className="text-[9px] text-slate tracking-widest uppercase leading-none">Immigration & Visa</p>
              </div>
            </Link>
            <p className="text-slate text-sm leading-relaxed mb-6">
              Your trusted partner for global immigration. We simplify the visa process so you can focus on your future.
            </p>
            <div className="flex items-center gap-3">
              {[
                { Icon: Facebook, href: '#' },
                { Icon: Instagram, href: '#' },
                { Icon: Twitter, href: '#' },
                { Icon: Linkedin, href: '#' },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-8 h-8 rounded-full bg-navy-light border border-gold/20 flex items-center justify-center text-slate hover:text-gold hover:border-gold/50 transition-all duration-200"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-ivory mb-5 text-base" style={{ fontFamily: 'var(--font-heading)' }}>
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-slate text-sm hover:text-gold transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-gold/40 rounded-full group-hover:bg-gold transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold text-ivory mb-5 text-base" style={{ fontFamily: 'var(--font-heading)' }}>
              Our Services
            </h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-slate text-sm hover:text-gold transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-gold/40 rounded-full group-hover:bg-gold transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-semibold text-ivory mb-5 text-base" style={{ fontFamily: 'var(--font-heading)' }}>
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-gold mt-0.5 flex-shrink-0" />
                <span className="text-slate text-sm leading-relaxed">
                  2nd Floor, SCO-204, Sector 10,<br />
                  Kurukshetra, Haryana 136118
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-gold flex-shrink-0" />
                <a href="tel:+917206691447" className="text-slate text-sm hover:text-gold transition-colors">
                  072066 91447
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-gold flex-shrink-0" />
                <a href="mailto:info@elitehawk.in" className="text-slate text-sm hover:text-gold transition-colors">
                  info@elitehawk.in
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={16} className="text-gold flex-shrink-0" />
                <span className="text-slate text-sm">Mon–Sat: 9:00 AM – 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gold/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate text-xs">
            © {new Date().getFullYear()} Elite Hawk Immigration & Visa Consultancy. All rights reserved.
          </p>
          <p className="text-slate text-xs">
            Made with ❤️ in India
          </p>
        </div>
      </div>
    </footer>
  )
}
