import React from 'react';
import type { Metadata, Viewport } from 'next';
import '../styles/index.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: 'SoulFrame Studio | Commercial Photography Studio Bangalore',
    template: '%s | SoulFrame Studio',
  },

  description:
    'Commercial photography studio in Banaswadi Bangalore offering cyclorama studio rental, product photography, food photography and ecommerce shoots.',

  icons: {
    icon: [{ url: '/favicon.ico', type: 'image/x-icon' }],
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL('https://www.soulframestudio.in'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Commercial Photography Studio & Rental in Banaswadi, Bangalore | SoulFrame Studio',
    description:
      'Cyclorama infinity wall studio rental and commercial photography for brands and ecommerce businesses in Bangalore.',
    url: 'https://www.soulframestudio.in',
    siteName: 'SoulFrame Studio',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
