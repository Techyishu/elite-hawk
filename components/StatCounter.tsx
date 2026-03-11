'use client'

import { useEffect, useRef, useState } from 'react'

interface StatCounterProps {
  value: number
  label: string
  suffix?: string
  className?: string
}

export default function StatCounter({ value, label, suffix = '', className = '' }: StatCounterProps) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          let start = 0
          const duration = 2000
          const step = value / (duration / 16)
          const timer = setInterval(() => {
            start += step
            if (start >= value) {
              setCount(value)
              clearInterval(timer)
            } else {
              setCount(Math.floor(start))
            }
          }, 16)
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value, hasAnimated])

  return (
    <div ref={ref} className={`${className}`}>
      <div
        className="text-3xl md:text-4xl font-bold text-gold leading-none"
        style={{ fontFamily: 'var(--font-heading)' }}
      >
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-slate text-xs mt-1.5 tracking-wider uppercase" style={{ fontFamily: 'var(--font-body)' }}>{label}</div>
    </div>
  )
}
