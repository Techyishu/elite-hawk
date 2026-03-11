import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-navy flex flex-col items-center justify-center px-4 text-center">
      <div className="text-8xl font-bold text-gold/20" style={{ fontFamily: 'var(--font-heading)' }}>404</div>
      <h1 className="text-3xl font-bold text-ivory mt-4 mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
        Page Not Found
      </h1>
      <p className="text-slate text-sm mb-8 max-w-sm">
        The page you&apos;re looking for doesn&apos;t exist. Let us help you find the right direction.
      </p>
      <Link
        href="/"
        className="px-8 py-3 bg-gold text-navy text-sm font-semibold rounded-full hover:bg-gold-light transition-colors"
      >
        Back to Home
      </Link>
    </div>
  )
}
