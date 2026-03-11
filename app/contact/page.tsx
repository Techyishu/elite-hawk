'use client'

import type { Metadata } from 'next'
import Link from 'next/link'
import { useState } from 'react'
import { MapPin, Phone, Clock, Mail, ChevronDown, ChevronUp, Send } from 'lucide-react'
import { motion } from 'framer-motion'
import { faqs } from '@/lib/data'

const countries = [
  'USA', 'Canada', 'UK', 'Australia', 'Germany', 'France',
  'New Zealand', 'Singapore', 'UAE', 'Japan', 'Netherlands', 'Ireland', 'Other',
]

function AccordionItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [open, setOpen] = useState(false)
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className="border border-gold/10 rounded-xl overflow-hidden"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 text-left bg-navy-mid hover:bg-navy-light transition-colors"
      >
        <span className="text-ivory text-sm font-medium pr-4">{question}</span>
        {open
          ? <ChevronUp size={16} className="text-gold flex-shrink-0" />
          : <ChevronDown size={16} className="text-gold flex-shrink-0" />}
      </button>
      <div className={`transition-all duration-300 ${open ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
        <div className="px-6 py-4 bg-navy-light/30">
          <p className="text-slate text-sm leading-relaxed">{answer}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '',
    interest: '', country: '', message: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Valid email is required'
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required'
    if (!formData.interest) newErrors.interest = 'Please select a visa type'
    if (!formData.message.trim()) newErrors.message = 'Please write a message'
    return newErrors
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors = validate()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    setErrors({})
    setSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const inputClass = (field: string) =>
    `w-full bg-navy-light border ${errors[field] ? 'border-red-500/60' : 'border-gold/20'} rounded-xl px-4 py-3 text-ivory text-sm placeholder-slate/60 focus:outline-none focus:border-gold/60 transition-colors`

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-4 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-mid/50 to-transparent" />
        <div className="relative max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-slate text-sm mb-4">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <span className="text-gold/40">/</span>
            <span className="text-ivory">Contact</span>
          </div>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-ivory mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Get <span className="text-gold">In Touch</span>
          </h1>
          <p className="text-slate text-lg max-w-2xl">
            Ready to start your visa journey? Book a free consultation with our experts today.
          </p>
        </div>
      </section>

      {/* Main */}
      <section className="py-16 px-4 bg-navy">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-navy-mid border border-gold/10 rounded-2xl p-8">
                <h2
                  className="text-ivory text-2xl font-bold mb-6"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Book Free Consultation
                </h2>

                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">🎉</span>
                    </div>
                    <h3
                      className="text-ivory font-bold text-xl mb-2"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      Thank You!
                    </h3>
                    <p className="text-slate text-sm">
                      We&apos;ve received your request. Our team will contact you within 2 business hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-slate text-xs mb-1.5 block">Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          className={inputClass('name')}
                        />
                        {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                      </div>
                      <div>
                        <label className="text-slate text-xs mb-1.5 block">Email *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          className={inputClass('email')}
                        />
                        {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                      </div>
                    </div>

                    <div>
                      <label className="text-slate text-xs mb-1.5 block">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className={inputClass('phone')}
                      />
                      {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-slate text-xs mb-1.5 block">Interested In *</label>
                        <select
                          name="interest"
                          value={formData.interest}
                          onChange={handleChange}
                          className={`${inputClass('interest')} appearance-none cursor-pointer`}
                        >
                          <option value="" disabled>Select visa type</option>
                          <option value="Study Visa">Study Visa</option>
                          <option value="Work Visa">Work Visa</option>
                          <option value="Tourist Visa">Tourist Visa</option>
                          <option value="PR & Immigration">PR & Immigration</option>
                          <option value="Business Visa">Business Visa</option>
                          <option value="Dependent Visa">Dependent Visa</option>
                          <option value="Other">Other</option>
                        </select>
                        {errors.interest && <p className="text-red-400 text-xs mt-1">{errors.interest}</p>}
                      </div>
                      <div>
                        <label className="text-slate text-xs mb-1.5 block">Preferred Country</label>
                        <select
                          name="country"
                          value={formData.country}
                          onChange={handleChange}
                          className={`${inputClass('country')} appearance-none cursor-pointer`}
                        >
                          <option value="" disabled>Select country</option>
                          {countries.map((c) => (
                            <option key={c} value={c}>{c}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="text-slate text-xs mb-1.5 block">Message *</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Tell us about your visa requirements, timeline, and any specific questions..."
                        className={`${inputClass('message')} resize-none`}
                      />
                      {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 py-4 bg-gold text-navy text-sm font-bold rounded-xl hover:bg-gold-light transition-all duration-300 hover:shadow-lg hover:shadow-gold/30"
                    >
                      Send Message <Send size={16} />
                    </button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Contact Info + Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-5"
            >
              {[
                {
                  Icon: MapPin,
                  title: 'Visit Our Office',
                  content: '2nd Floor, SCO-204, Sector 10,\nKurukshetra, Haryana 136118',
                },
                {
                  Icon: Phone,
                  title: 'Call Us',
                  content: '072066 91447',
                  link: 'tel:+917206691447',
                },
                {
                  Icon: Mail,
                  title: 'Email Us',
                  content: 'info@elitehawk.in',
                  link: 'mailto:info@elitehawk.in',
                },
                {
                  Icon: Clock,
                  title: 'Business Hours',
                  content: 'Monday – Saturday: 9:00 AM – 6:00 PM\nSunday: Closed',
                },
              ].map(({ Icon, title, content, link }, i) => (
                <div
                  key={title}
                  className="flex items-start gap-4 p-5 bg-navy-mid border border-gold/10 rounded-xl hover:border-gold/30 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-gold" />
                  </div>
                  <div>
                    <h3 className="text-ivory text-sm font-semibold mb-1">{title}</h3>
                    {link ? (
                      <a href={link} className="text-slate text-sm hover:text-gold transition-colors">
                        {content}
                      </a>
                    ) : (
                      <p className="text-slate text-sm whitespace-pre-line">{content}</p>
                    )}
                  </div>
                </div>
              ))}

              {/* Map placeholder */}
              <div className="h-48 bg-navy-mid border-2 border-gold/20 rounded-xl flex flex-col items-center justify-center gap-3 hover:border-gold/40 transition-colors cursor-pointer group">
                <span className="text-3xl">📍</span>
                <p
                  className="text-ivory text-sm font-medium"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Find Us On Map
                </p>
                <a
                  href="https://maps.google.com/?q=SCO-204+Sector+10+Kurukshetra+Haryana"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold text-xs border border-gold/30 px-4 py-1.5 rounded-full hover:bg-gold/10 transition-colors"
                >
                  Open in Google Maps →
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-navy-mid">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-gold text-xs font-medium tracking-widest uppercase mb-3">Common Questions</p>
            <h2
              className="text-3xl md:text-4xl font-bold text-ivory"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                question={faq.question}
                answer={faq.answer}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
