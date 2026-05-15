import { getProduct } from '@/lib/products'

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const product = getProduct(id)
  if (!product) return { title: 'Product Not Found | QUIQ' }
  return {
    title: product.seoTitle || `${product.name} | QUIQ`,
    description: product.seoDescription || product.shortDescription,
  }
}

export default function ProductDetailLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
