export const metadata = {
  title: "Home Blood Test Kits India Under Rs 99 | QUIQ",
  description: "Browse all QUIQ home blood test kits. Vitamin D, Thyroid, Iron, B12, CRP and more. All under Rs 99. CE and IVD certified.",
  alternates: {
    canonical: "https://quiq-main.vercel.app/products",
  },
  openGraph: {
    title: "Home Blood Test Kits India Under Rs 99 | QUIQ",
    description: "Browse all QUIQ home blood test kits. Vitamin D, Thyroid, Iron, B12, CRP and more. All under Rs 99. CE and IVD certified.",
    url: "https://quiq-main.vercel.app/products",
    type: "website",
    images: [{ url: "https://quiq-main.vercel.app/og-image.png" }],
  },
  twitter: {
    card: "summary_large_image" as const,
    site: "@quiqhealth",
    title: "Home Blood Test Kits India Under Rs 99 | QUIQ",
    description: "Browse all QUIQ home blood test kits. Vitamin D, Thyroid, Iron, B12, CRP and more. All under Rs 99. CE and IVD certified.",
    images: ["https://quiq-main.vercel.app/og-image.png"],
  },
}

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
