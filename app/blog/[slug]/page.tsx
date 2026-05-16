import { notFound } from "next/navigation"
import { allPosts } from "@/lib/blog/posts"
import { postComponents } from "@/lib/blog/postMap"
import { useMDXComponents } from "@/mdx-components"
import LinkCard from "@/components/blog/LinkCard"
import { BlurFade } from "@/components/ui/blur-fade"
import { BlurImage } from "@/components/ui/blur-image"
import ProgressBar from "@/components/blog/ProgressBar"
import { DesktopTOCWrapper, MobileTOCWrapper } from "@/components/blog/TOCWrappers"
import { SITE_NAME, SITE_URL, SITE_SAME_AS } from "@/lib/constants"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Script from "next/script"
import PostHeader from "@/components/blog/PostHeader"
import { RepurposeCTA } from "@/components/blog/RepurposeCTA"
import { ContinueReading } from "@/components/blog/ContinueReading"

type Params = { params: any }

export async function generateStaticParams() {
  return allPosts.map((p) => ({ slug: p.slug }))
}

const BASE_URL = 'https://quiq-main.vercel.app'
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.png`

const blogOgMeta: Record<string, { title: string; description: string; image: string }> = {
  'vitamin-d-deficiency-signs-india': {
    title: '5 Signs of Vitamin D Deficiency Indians Keep Ignoring | QUIQ',
    description: 'Over 70% of Indians are Vitamin D deficient and most don\'t know it. Learn the 5 signs and how to check at home for Rs 99.',
    image: `${BASE_URL}/images/blog/vitamin-d-deficiency-signs-india/cover.png`,
  },
  'can-you-check-thyroid-at-home-india': {
    title: 'Can You Check Your Thyroid at Home? | QUIQ',
    description: '42 million Indians live with thyroid disorders and most find out too late. Here\'s how home TSH testing works.',
    image: `${BASE_URL}/images/blog/can-you-check-thyroid-at-home-india/cover.png`,
  },
  'blood-test-without-prescription-india': {
    title: 'Do You Need a Prescription for a Blood Test in India? | QUIQ',
    description: 'No prescription, no appointment, no problem. Here is what Indians need to know about booking routine blood tests directly.',
    image: `${BASE_URL}/images/blog/blood-test-without-prescription-india/cover.png`,
  },
}

export async function generateMetadata({ params }: Params) {
  const { slug } = await params
  const post = allPosts.find((p) => p.slug === slug)
  if (!post) return {}

  const og = blogOgMeta[post.slug]
  const title = og?.title || `${post.title} • QUIQ Blog`
  const description = og?.description || post.summary
  const ogImage = og?.image || DEFAULT_OG_IMAGE
  const url = `${BASE_URL}/blog/${post.slug}`

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      type: 'website',
      images: [{ url: ogImage }],
    },
    twitter: {
      card: 'summary_large_image' as const,
      site: '@quiqhealth',
      title,
      description,
      images: [ogImage],
    },
  }
}

export default async function BlogPostPage({ params }: Params) {
  const { slug } = await params
  const post = allPosts.find((p) => p.slug === slug)
  if (!post) return notFound()

  const MDX = (await postComponents[post.slug]()?.catch(() => ({ default: () => null })))?.default
  if (!MDX) return notFound()

  const components = useMDXComponents({
    // Allow using <BlurImage /> inside MDX
    BlurImage: (props: any) => <BlurImage {...props} />,
    LinkCard: (props: any) => <LinkCard {...props} />,
    BlurFade: (props: any) => <BlurFade {...props} />,
  })

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: `${SITE_URL}/blog/${post.slug}`,
    sameAs: SITE_SAME_AS,
  }

  let articleSchema = null;
  let faqSchema = null;
  if (post.slug === 'vitamin-d-deficiency-signs-india') {
    articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "5 Signs of Vitamin D Deficiency Indians Keep Ignoring",
      "author": {
        "@type": "Organization",
        "name": "QUIQ Team",
        "url": "https://quiq-main.vercel.app"
      },
      "publisher": {
        "@type": "Organization",
        "name": "QUIQ",
        "logo": {
          "@type": "ImageObject",
          "url": "https://quiq-main.vercel.app/quiq-logo.png"
        }
      },
      "datePublished": "2026-05-01",
      "dateModified": "2026-05-15",
      "image": "https://quiq-main.vercel.app/images/blog/vitamin-d-deficiency-signs-india/cover.png",
      "url": "https://quiq-main.vercel.app/blog/vitamin-d-deficiency-signs-india"
    };

    faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What happens when your Vitamin D is low?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "When Vitamin D levels drop below 20 ng/mL, the body struggles to absorb calcium properly. Over time this leads to weakened bones, persistent muscle aches, fatigue and weakened immunity."
          }
        },
        {
          "@type": "Question",
          "name": "What are 5 signs of Vitamin D deficiency?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The five most common signs are: constant fatigue that sleep does not fix, bone or lower back pain, frequent colds and infections, muscle weakness or cramps, and persistent low mood."
          }
        },
        {
          "@type": "Question",
          "name": "How do you feel when your Vitamin D is low?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most people describe it as feeling generally off. Tired despite sleeping, achy without a clear reason, and mentally flat. A simple finger-prick test can give clarity in 10 minutes."
          }
        }
      ]
    };
  } else if (post.slug === 'can-you-check-thyroid-at-home-india') {
    articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Can You Check Your Thyroid at Home? What Indians Need to Know About TSH Testing",
      "author": { "@type": "Organization", "name": "QUIQ Team", "url": "https://quiq-main.vercel.app" },
      "publisher": { "@type": "Organization", "name": "QUIQ", "logo": { "@type": "ImageObject", "url": "https://quiq-main.vercel.app/quiq-logo.png" } },
      "datePublished": "2026-05-15",
      "dateModified": "2026-05-15",
      "image": "https://quiq-main.vercel.app/images/blog/can-you-check-thyroid-at-home-india/cover.png",
      "url": "https://quiq-main.vercel.app/blog/can-you-check-thyroid-at-home-india"
    };
  } else if (post.slug === 'blood-test-without-prescription-india') {
    articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Do You Need a Prescription for a Blood Test in India?",
      "author": { "@type": "Organization", "name": "QUIQ Team", "url": "https://quiq-main.vercel.app" },
      "publisher": { "@type": "Organization", "name": "QUIQ", "logo": { "@type": "ImageObject", "url": "https://quiq-main.vercel.app/quiq-logo.png" } },
      "datePublished": "2026-05-15",
      "dateModified": "2026-05-15",
      "image": "https://quiq-main.vercel.app/images/blog/blood-test-without-prescription-india/cover.png",
      "url": "https://quiq-main.vercel.app/blog/blood-test-without-prescription-india"
    };
  }

  return (
    <div className="min-h-[60vh] bg-black">
      {articleSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />}
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
      <Header />
      <div className="px-4 md:px-8 py-12 pt-24">
        <Script id="org-jsonld-post" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
        <ProgressBar />

        {/* Title + meta header with cover image zoom */}
        <PostHeader title={post.title} date={post.date} slug={post.slug} summary={post.summary} />

        {/* Content + TOC + CTA */}
        <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-8">
          <article className="max-w-3xl">
            <MobileTOCWrapper />
            <MDX components={components} />

            {/* Mobile CTA - shown at end of article on mobile */}
            <div className="lg:hidden">
              <RepurposeCTA variant="inline" />
            </div>
          </article>

          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-6">
              <DesktopTOCWrapper />
              {/* Desktop CTA - shown below TOC */}
              <RepurposeCTA variant="sidebar" />
            </div>
          </aside>
        </div>

        {/* Continue Reading Section */}
        <div className="mx-auto max-w-6xl">
          <ContinueReading currentSlug={post.slug} allPosts={allPosts} maxPosts={3} />
        </div>
      </div>
      <Footer />
    </div>
  )
}
