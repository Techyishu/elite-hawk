import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { blogPosts } from '@/lib/data'
import { Calendar, Clock, User, ChevronRight, Share2, ThumbsUp } from 'lucide-react'
import ConsultationBanner from '@/components/ConsultationBanner'

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug)
  if (!post) return { title: 'Post Not Found' }
  return {
    title: `${post.title} | Elite Hawk Blog`,
    description: post.excerpt,
  }
}

const categoryColors: Record<string, string> = {
  'PR & Immigration': 'bg-purple-500/15 text-purple-300 border-purple-500/30',
  'Study Visa': 'bg-blue-500/15 text-blue-300 border-blue-500/30',
  'Work Visa': 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
  'Business Visa': 'bg-amber-500/15 text-amber-300 border-amber-500/30',
}

function renderContent(content: string) {
  const lines = content.split('\n')
  const elements: JSX.Element[] = []
  let i = 0

  while (i < lines.length) {
    const line = lines[i].trim()

    if (!line) { i++; continue }

    if (line.startsWith('## ')) {
      elements.push(
        <h2
          key={i}
          className="text-ivory text-2xl font-bold mt-10 mb-4"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          {line.replace('## ', '')}
        </h2>
      )
    } else if (line.startsWith('### ')) {
      elements.push(
        <h3
          key={i}
          className="text-gold text-lg font-semibold mt-6 mb-3"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          {line.replace('### ', '')}
        </h3>
      )
    } else if (line.startsWith('> ')) {
      elements.push(
        <blockquote
          key={i}
          className="my-6 pl-5 border-l-4 border-gold bg-gold/5 py-4 pr-4 rounded-r-lg"
        >
          <p className="text-ivory/80 italic text-sm leading-relaxed">
            {line.replace('> ', '')}
          </p>
        </blockquote>
      )
    } else if (line.startsWith('- ') || line.startsWith('* ')) {
      const listItems: string[] = []
      while (i < lines.length && (lines[i].trim().startsWith('- ') || lines[i].trim().startsWith('* '))) {
        listItems.push(lines[i].trim().replace(/^[-*] /, ''))
        i++
      }
      elements.push(
        <ul key={i} className="my-4 space-y-2">
          {listItems.map((item, j) => (
            <li key={j} className="flex items-start gap-2 text-slate text-sm">
              <span className="text-gold mt-1">•</span>
              <span dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong class="text-ivory">$1</strong>') }} />
            </li>
          ))}
        </ul>
      )
      continue
    } else if (/^\d+\. /.test(line)) {
      const listItems: string[] = []
      while (i < lines.length && /^\d+\. /.test(lines[i].trim())) {
        listItems.push(lines[i].trim().replace(/^\d+\. /, ''))
        i++
      }
      elements.push(
        <ol key={i} className="my-4 space-y-2 list-decimal list-inside">
          {listItems.map((item, j) => (
            <li key={j} className="text-slate text-sm leading-relaxed"
              dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong class="text-ivory">$1</strong>') }}
            />
          ))}
        </ol>
      )
      continue
    } else {
      elements.push(
        <p
          key={i}
          className="text-slate text-sm leading-relaxed my-3"
          dangerouslySetInnerHTML={{ __html: line.replace(/\*\*(.*?)\*\*/g, '<strong class="text-ivory">$1</strong>') }}
        />
      )
    }
    i++
  }

  return elements
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug)
  if (!post) notFound()

  const related = blogPosts.filter((p) => p.id !== post.id).slice(0, 3)

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-10 px-4 bg-navy">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-slate text-sm mb-6">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <span className="text-gold/40">/</span>
            <Link href="/blog" className="hover:text-gold transition-colors">Blog</Link>
            <span className="text-gold/40">/</span>
            <span className="text-ivory truncate max-w-xs">{post.title}</span>
          </div>
        </div>
      </section>

      <section className="pb-16 px-4 bg-navy">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Article */}
            <article className="flex-1 min-w-0">
              {/* Article header */}
              <div className="mb-8">
                <span className={`inline-block px-3 py-1 rounded-full text-xs border font-medium mb-4 ${categoryColors[post.category] || 'bg-gold/15 text-gold border-gold/30'}`}>
                  {post.category}
                </span>
                <h1
                  className="text-3xl md:text-4xl lg:text-5xl font-bold text-ivory mb-5 leading-tight"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {post.title}
                </h1>
                <div className="flex flex-wrap items-center gap-4 text-slate text-sm pb-6 border-b border-gold/10">
                  <span className="flex items-center gap-1.5">
                    <User size={14} className="text-gold" />{post.author}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar size={14} className="text-gold" />{post.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={14} className="text-gold" />{post.readTime}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="prose prose-invert max-w-none">
                <p className="text-ivory/80 text-base leading-relaxed mb-6 text-lg italic border-l-4 border-gold pl-4">
                  {post.excerpt}
                </p>
                {renderContent(post.content)}
              </div>

              {/* Footer actions */}
              <div className="mt-10 pt-6 border-t border-gold/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="text-slate text-sm">Was this helpful?</span>
                  <button className="flex items-center gap-1.5 px-4 py-2 bg-gold/10 border border-gold/20 rounded-full text-gold text-sm hover:bg-gold/20 transition-colors">
                    <ThumbsUp size={14} /> Yes, Thanks!
                  </button>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-slate text-sm">Share:</span>
                  <button className="flex items-center gap-1.5 px-4 py-2 bg-navy-mid border border-gold/20 rounded-full text-slate text-sm hover:text-gold hover:border-gold/40 transition-colors">
                    <Share2 size={14} /> Share Article
                  </button>
                </div>
              </div>

              {/* Related posts */}
              <div className="mt-12">
                <h3
                  className="text-ivory font-bold text-xl mb-6"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Related Articles
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {related.map((rp) => (
                    <Link
                      key={rp.id}
                      href={`/blog/${rp.slug}`}
                      className="group bg-navy-mid border border-gold/10 rounded-xl p-4 hover:border-gold/40 transition-all"
                    >
                      <span className="text-gold text-xs">{rp.category}</span>
                      <h4
                        className="text-ivory text-sm font-semibold mt-1 mb-2 group-hover:text-gold transition-colors line-clamp-2"
                        style={{ fontFamily: 'var(--font-heading)' }}
                      >
                        {rp.title}
                      </h4>
                      <span className="text-slate text-xs">{rp.readTime}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:w-64 xl:w-72 flex-shrink-0 space-y-6">
              {/* Table of Contents */}
              <div className="bg-navy-mid border border-gold/10 rounded-2xl p-5 sticky top-24">
                <h3
                  className="text-ivory font-semibold text-sm mb-4"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Table of Contents
                </h3>
                <ul className="space-y-2">
                  {post.content.split('\n')
                    .filter((l) => l.startsWith('## '))
                    .map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <ChevronRight size={12} className="text-gold mt-0.5 flex-shrink-0" />
                        <span className="text-slate text-xs hover:text-gold transition-colors cursor-pointer">
                          {h.replace('## ', '')}
                        </span>
                      </li>
                    ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/30 rounded-2xl p-6 text-center">
                <p
                  className="text-ivory font-bold text-base mb-2"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Ready to Apply?
                </p>
                <p className="text-slate text-xs mb-4">Get expert guidance for your specific visa case.</p>
                <Link
                  href="/contact"
                  className="block w-full py-2.5 bg-gold text-navy text-sm font-semibold rounded-xl hover:bg-gold-light transition-colors"
                >
                  Free Consultation
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <ConsultationBanner />
    </>
  )
}
