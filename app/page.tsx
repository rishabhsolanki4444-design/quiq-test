import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Hero } from '@/components/homepage/hero'
import { TestShowcase } from '@/components/homepage/test-showcase'
import { ProblemSolution } from '@/components/homepage/problem-solution'
import { ReinventingRules } from '@/components/homepage/reinventing-rules'
import { TestWorking } from '@/components/homepage/test-working'
import { Markers } from '@/components/homepage/markers'
import { Certifications } from '@/components/homepage/certifications'
import { Testimonials } from '@/components/homepage/testimonials'
import { PenTestCTA } from '@/components/homepage/pen-test-cta'
import { Newsletter } from '@/components/homepage/newsletter'
import { ProductCarousel } from '@/components/homepage/product-carousel'
import { StoryCards } from '@/components/homepage/story-cards'
import { ProductShowcase } from '@/components/homepage/product-showcase'
import { BrandMarquee } from '@/components/homepage/brand-marquee'

export const metadata = {
  title: "Affordable Home Self-Test Kits India | QUIQ",
  description: "QUIQ offers affordable home blood test kits under Rs 99. Check Vitamin D, Thyroid, Iron and more at home. Results in 10 minutes. No prescription needed.",
  alternates: {
    canonical: "https://quiq-main.vercel.app",
  },
  openGraph: {
    title: "Affordable Home Self-Test Kits India | QUIQ",
    description: "QUIQ offers affordable home blood test kits under Rs 99. Check Vitamin D, Thyroid, Iron and more at home. Results in 10 minutes. No prescription needed.",
    url: "https://quiq-main.vercel.app",
    type: "website",
    images: [{ url: "https://quiq-main.vercel.app/og-image.png" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@quiqhealth",
    title: "Affordable Home Self-Test Kits India | QUIQ",
    description: "QUIQ offers affordable home blood test kits under Rs 99. Check Vitamin D, Thyroid, Iron and more at home. Results in 10 minutes. No prescription needed.",
    images: ["https://quiq-main.vercel.app/og-image.png"],
  },
}

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "QUIQ",
        "legalName": "Santa Clara Wellness",
        "url": "https://quiq-main.vercel.app",
        "logo": "https://quiq-main.vercel.app/quiq-logo.png",
        "foundingLocation": "Mumbai, India",
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer support",
          "email": "info@quiq.health"
        },
        "sameAs": [
          "https://www.amazon.in",
          "https://blinkit.com",
          "https://www.1mg.com"
        ]
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "QUIQ",
        "url": "https://quiq-main.vercel.app",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://quiq-main.vercel.app/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "MedicalBusiness",
        "name": "QUIQ",
        "description": "Affordable CE and IVD certified home diagnostic test kits under Rs 99.",
        "url": "https://quiq-main.vercel.app",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Mumbai",
          "addressRegion": "Maharashtra",
          "addressCountry": "IN"
        },
        "medicalSpecialty": "Diagnostic"
      }) }} />
      <Header />
      <main>
        <Hero />


        <ProductShowcase />
        <BrandMarquee />
        <TestShowcase />

        <TestWorking />
        <Markers />
        <Certifications />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
