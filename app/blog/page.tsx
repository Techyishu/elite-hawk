import type { Metadata } from 'next'
import Link from 'next/link'
import { blogPosts } from '@/lib/data'
import { Calendar, Clock, Search, ChevronRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Immigration Insights & News | Elite Hawk Blog',
  description: 'Stay updated on the latest visa news, immigration changes, and expert advice for studying and working abroad.',
}

const categoryColors: Record<string, string> = {
  'PR & Immigration': 'bg-purple-500/15 text-purple-300 border-purple-500/30',
  'Study Visa': 'bg-blue-500/15 text-blue-300 border-blue-500/30',
  'Work Visa': 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
  'Business Visa': 'bg-amber-500/15 text-amber-300 border-amber-500/30',
}

const categories = [
  { name: 'All Posts', count: 6 },
  { name: 'PR & Immigration', count: 2 },
  { name: 'Study Visa', count: 1 },
  { name: 'Work Visa', count: 2 },
  { name: 'Business Visa', count: 1 },
]

export default function BlogPage() {
  const featured = blogPosts.find((p) => p.featured)
  const regular = blogPosts.filter((p) => !p.featured)

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-4 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-mid/50 to-transparent" />
        <div className="relative max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-slate text-sm mb-4">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <span className="text-gold/40">/</span>
            <span className="text-ivory">Blog</span>
          </div>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-ivory mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Immigration <span className="text-gold">Insights & News</span>
          </h1>
          <p className="text-slate text-lg max-w-2xl">
            Expert advice, policy updates, and success stories to guide your immigration journey.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-navy">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Main Content */}
            <div className="flex-1 min-w-0">
              {/* Featured Post */}
              {featured && (
                <Link href={`/blog/${featured.slug}`} className="group block mb-10">
                  <div className="relative h-72 rounded-2xl overflow-hidden bg-gradient-to-br from-navy-light via-gold/10 to-navy-mid border border-gold/20 mb-5 group-hover:border-gold/50 transition-all">
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent" />
                    {/* Pattern */}
                    <div className="absolute inset-0 opacity-10"
                      style={{
                        backgroundImage: 'radial-gradient(circle at 30% 30%, #C9A84C 1px, transparent 1px), radial-gradient(circle at 70% 70%, #C9A84C 1px, transparent 1px)',
                        backgroundSize: '40px 40px',
                      }}
                    />
                    <div className="absolute bottom-0 left-0 p-7">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs border font-medium mb-3 ${categoryColors[featured.category] || 'bg-gold/15 text-gold border-gold/30'}`}>
                        {featured.category}
                      </span>
                      <h2
                        className="text-ivory text-2xl md:text-3xl font-bold mb-3 group-hover:text-gold transition-colors max-w-2xl"
                        style={{ fontFamily: 'var(--font-heading)' }}
                      >
                        {featured.title}
                      </h2>
                      <div className="flex items-center gap-4 text-slate text-xs">
                        <span className="flex items-center gap-1">
                          <Calendar size={11} />{featured.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={11} />{featured.readTime}
                        </span>
                        <span>By {featured.author}</span>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 px-3 py-1 bg-gold text-navy text-xs font-bold rounded-full">
                      Featured
                    </div>
                  </div>
                  <p className="text-slate text-sm leading-relaxed line-clamp-2">{featured.excerpt}</p>
                </Link>
              )}

              {/* Blog Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {regular.map((post) => (
                  <Link
                    key={post.id}
                    href={`/blog/${post.slug}`}
                    className="group block bg-navy-mid border border-gold/10 rounded-2xl overflow-hidden hover:border-gold/40 transition-all duration-300 hover:-translate-y-1"
                  >
                    {/* Color block header */}
                    <div className="h-32 bg-gradient-to-br from-navy-light to-gold/10 relative overflow-hidden">
                      <div className="absolute inset-0 opacity-20"
                        style={{
                          backgroundImage: 'linear-gradient(45deg, rgba(201,168,76,0.3) 25%, transparent 25%), linear-gradient(-45deg, rgba(201,168,76,0.3) 25%, transparent 25%)',
                          backgroundSize: '20px 20px',
                        }}
                      />
                      <span className={`absolute top-3 left-3 px-2 py-1 rounded-full text-[10px] border font-medium ${categoryColors[post.category] || 'bg-gold/15 text-gold border-gold/30'}`}>
                        {post.category}
                      </span>
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-3 text-slate text-xs mb-3">
                        <span className="flex items-center gap-1">
                          <Clock size={10} />{post.readTime}
                        </span>
                        <span>{post.date}</span>
                      </div>
                      <h3
                        className="text-ivory font-bold text-base mb-2 group-hover:text-gold transition-colors line-clamp-2"
                        style={{ fontFamily: 'var(--font-heading)' }}
                      >
                        {post.title}
                      </h3>
                      <p className="text-slate text-xs leading-relaxed line-clamp-2 mb-4">{post.excerpt}</p>
                      <span className="inline-flex items-center gap-1 text-gold text-xs font-medium group-hover:gap-2 transition-all">
                        Read More <ChevronRight size={12} />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:w-72 xl:w-80 flex-shrink-0 space-y-6">
              {/* Search */}
              <div className="bg-navy-mid border border-gold/10 rounded-2xl p-5">
                <h3
                  className="text-ivory font-semibold text-sm mb-4"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Search Articles
                </h3>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full bg-navy border border-gold/20 rounded-lg px-4 py-2.5 text-ivory text-sm placeholder-slate focus:outline-none focus:border-gold/50 pr-10"
                  />
                  <Search size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate" />
                </div>
              </div>

              {/* Categories */}
              <div className="bg-navy-mid border border-gold/10 rounded-2xl p-5">
                <h3
                  className="text-ivory font-semibold text-sm mb-4"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Categories
                </h3>
                <ul className="space-y-2">
                  {categories.map((cat) => (
                    <li key={cat.name} className="flex items-center justify-between">
                      <span className="text-slate text-sm hover:text-gold transition-colors cursor-pointer">
                        {cat.name}
                      </span>
                      <span className="px-2 py-0.5 bg-gold/10 border border-gold/20 rounded-full text-gold text-xs">
                        {cat.count}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recent Posts */}
              <div className="bg-navy-mid border border-gold/10 rounded-2xl p-5">
                <h3
                  className="text-ivory font-semibold text-sm mb-4"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Recent Posts
                </h3>
                <ul className="space-y-3">
                  {blogPosts.slice(0, 4).map((post) => (
                    <li key={post.id}>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="group flex items-start gap-2"
                      >
                        <ChevronRight size={12} className="text-gold mt-1 flex-shrink-0" />
                        <span className="text-slate text-xs leading-snug group-hover:text-gold transition-colors line-clamp-2">
                          {post.title}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Card */}
              <div className="bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/30 rounded-2xl p-6 text-center">
                <p
                  className="text-ivory font-bold text-base mb-2"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Need Expert Advice?
                </p>
                <p className="text-slate text-xs mb-4">Our consultants are ready to help with your visa journey.</p>
                <Link
                  href="/contact"
                  className="block w-full py-2.5 bg-gold text-navy text-sm font-semibold rounded-xl hover:bg-gold-light transition-colors"
                >
                  Book Free Consult
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
