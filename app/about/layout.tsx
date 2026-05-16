export const metadata = {
  title: "About QUIQ | Affordable Home Diagnostics India",
  description: "QUIQ by Santa Clara Wellness makes CE and IVD certified home diagnostic kits under Rs 99. Based in Mumbai. Validated by doctors.",
  alternates: {
    canonical: "https://quiq-main.vercel.app/about",
  },
  openGraph: {
    title: "About QUIQ | Affordable Home Diagnostics India",
    description: "QUIQ by Santa Clara Wellness makes CE and IVD certified home diagnostic kits under Rs 99. Based in Mumbai. Validated by doctors.",
    url: "https://quiq-main.vercel.app/about",
    type: "website",
    images: [{ url: "https://quiq-main.vercel.app/og-image.png" }],
  },
  twitter: {
    card: "summary_large_image" as const,
    site: "@quiqhealth",
    title: "About QUIQ | Affordable Home Diagnostics India",
    description: "QUIQ by Santa Clara Wellness makes CE and IVD certified home diagnostic kits under Rs 99. Based in Mumbai. Validated by doctors.",
    images: ["https://quiq-main.vercel.app/og-image.png"],
  },
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
