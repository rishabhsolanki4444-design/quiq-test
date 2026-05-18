import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { CartProvider } from '@/lib/cart'
import { LanguageProvider } from '@/lib/i18n/context'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'QUIQ - Affordable Self-Test Diagnostics | Know Your Health',
  description: 'QUIQ offers affordable home blood test kits under Rs 99. Check Vitamin D, Thyroid, Iron and more at home. Results in 10 minutes. Free delivery across India. No prescription needed.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
    themeColor: '#000000',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="k1UqLylvT35Y3BK" />
      </head>
      <body className="font-sans antialiased">
        <CartProvider>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </CartProvider>
        <Analytics />
      </body>
    </html>
  )
}

