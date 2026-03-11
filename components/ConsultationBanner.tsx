import Link from 'next/link'

export default function ConsultationBanner() {
  return (
    <section className="relative overflow-hidden">
      <div className="bg-gradient-to-r from-gold via-gold-light to-gold py-16 px-4">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3" />
          <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-navy/20 rounded-full" />
          <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-navy/15 rounded-full" />
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <p className="text-navy/60 text-sm font-medium tracking-widest uppercase mb-3">
            Start Your Journey Today
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Ready to Start Your Journey?
          </h2>
          <p className="text-navy/70 text-lg mb-8 max-w-2xl mx-auto">
            Book a free consultation with our expert immigration counselors. No obligations, just honest guidance tailored to your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-navy text-ivory text-sm font-semibold rounded-full hover:bg-navy-light transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
            >
              Book Free Consultation
            </Link>
            <a
              href="tel:+917206691447"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-navy/30 text-navy text-sm font-semibold rounded-full hover:bg-navy/10 transition-all duration-300"
            >
              Call: 072066 91447
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
