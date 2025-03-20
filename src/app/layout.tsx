import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientLayout from "./client-layout";
import Script from "next/script";

// Initialize font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "R2code | Professional Software Development Services",
  description: "R2code specializes in building scalable & secure software solutions for innovative businesses. Experts in fintech, edtech, mobility, and healthcare solutions.",
  keywords: "software development, web development, mobile apps, fintech, edtech, healthcare tech, custom software, React, Next.js, software company, software services, app development, software outsourcing, software solutions, web app development, software engineer services, software consulting",
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        url: '/favicon.svg',
        type: 'image/svg+xml',
      },
      {
        url: '/r2code-logo.svg',
        type: 'image/svg+xml',
        sizes: '512x512',
      },
    ],
    // Add Apple touch icon for iOS devices
    apple: [
      {
        url: '/r2code-logo.svg',
        sizes: '180x180',
        type: 'image/svg+xml',
      }
    ],
    // Add shortcut icon explicitly
    shortcut: { url: '/favicon.ico' },
  },
  // Add verification for Google Search Console (you would replace this with your actual verification code)
  verification: {
    google: 'your-google-site-verification-code', // Replace with your actual code when you get it
  },
  openGraph: {
    title: "R2code | Professional Software Development Services",
    description: "Building scalable & secure software solutions for innovative businesses. Experts in fintech, edtech, mobility, and healthcare software development.",
    url: "https://r2code.com",
    siteName: "R2code",
    type: "website",
    images: [
      {
        url: 'https://r2code.com/r2code-logo.svg', // Use SVG for OG images
        width: 512,
        height: 512,
        alt: 'R2code Logo',
      }
    ],
    locale: 'en_US',
  },
  // Add Twitter card
  twitter: {
    card: 'summary',
    title: "R2code | Professional Software Development Services",
    description: "Building scalable & secure software solutions for innovative businesses",
    images: ['https://r2code.com/r2code-logo.svg'], // Use SVG for Twitter card
    site: '@r2codedev', // Add your Twitter handle if you have one
  },
  alternates: {
    canonical: 'https://r2code.com',
    languages: {
      'en-US': 'https://r2code.com',
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <Script
        id="schema-org-script"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "R2code",
            "url": "https://r2code.com",
            "logo": "https://r2code.com/r2code-logo.svg",
            "image": "https://r2code.com/r2code-logo.svg",
            "description": "R2code specializes in building scalable & secure software solutions for innovative businesses. Experts in fintech, edtech, mobility, and healthcare solutions.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Sremska Mitrovica",
              "addressCountry": "Serbia"
            },
            "email": "nikolartukov@gmail.com",
            "telephone": "+381 64 953 7765",
            "priceRange": "$$",
            "serviceArea": "Worldwide",
            "sameAs": [
              "https://github.com/artukov"
            ],
            "openingHours": "Mo,Tu,We,Th,Fr 09:00-17:00",
            "keywords": "software development, web development, mobile apps, fintech, edtech, healthcare tech, custom software, React, Next.js",
            "knowsAbout": ["Software Development", "Web Development", "Mobile App Development", "Fintech", "Edtech", "Healthcare Software"],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Software Development Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "name": "Web Application Development",
                  "description": "Custom web applications built with modern technologies"
                },
                {
                  "@type": "Offer",
                  "name": "Mobile App Development",
                  "description": "Native and cross-platform mobile applications"
                },
                {
                  "@type": "Offer",
                  "name": "Fintech Solutions",
                  "description": "Secure and compliant financial technology solutions"
                },
                {
                  "@type": "Offer",
                  "name": "Healthcare Software",
                  "description": "Medical and healthcare software systems"
                }
              ]
            }
          })
        }}
      />
      <body className={`${inter.variable} font-sans antialiased`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
