import { getProduct } from '@/lib/products'

const BASE_URL = 'https://quiq-main.vercel.app'
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.png`

const productOgMeta: Record<string, { title: string; description: string }> = {
  'vitamin-d': {
    title: 'Vitamin D Home Test Kit India Rs 99 | QUIQ',
    description: 'Check your Vitamin D levels at home in 10 minutes. Rs 99. CE and IVD certified. No prescription needed.',
  },
  'tsh': {
    title: 'TSH Thyroid Home Test Kit India Rs 79 | QUIQ',
    description: 'Test your thyroid TSH levels at home in 10 minutes. Rs 79. CE and IVD certified. No lab visit needed.',
  },
  'iron-deficiency': {
    title: 'Iron Deficiency Ferritin Test Kit India | QUIQ',
    description: 'Detect iron deficiency at home in 10 minutes. Ferritin test kit at Rs 89. CE and IVD certified.',
  },
  'vitamin-b12': {
    title: 'Vitamin B12 Home Test Kit India Rs 89 | QUIQ',
    description: 'Check your Vitamin B12 levels at home in 10 minutes. Rs 89. CE and IVD certified. Important for vegetarians.',
  },
  'crp': {
    title: 'CRP Inflammation Home Test Kit India | QUIQ',
    description: 'Test CRP inflammation markers at home in 10 minutes. Rs 89. CE and IVD certified.',
  },
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const product = getProduct(id)
  if (!product) return { title: 'Product Not Found | QUIQ' }

  const og = productOgMeta[product.slug]
  const title = og?.title || product.seoTitle || `${product.name} | QUIQ`
  const description = og?.description || product.seoDescription || product.shortDescription
  const url = `${BASE_URL}/products/${product.slug}`

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
      images: [{ url: DEFAULT_OG_IMAGE }],
    },
    twitter: {
      card: 'summary_large_image' as const,
      site: '@quiqhealth',
      title,
      description,
      images: [DEFAULT_OG_IMAGE],
    },
  }
}

export default function ProductDetailLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
