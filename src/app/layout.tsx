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
        url: '/R2C/PNG/transparent.png',
        sizes: 'any',
        type: 'image/png',
      },
      {
        url: '/R2C/SVG/transparent.svg',
        type: 'image/svg+xml',
      },
      {
        url: '/R2C/SVG/transparent.svg',
        type: 'image/svg+xml',
        sizes: '512x512',
      },
    ],
    // Add Apple touch icon for iOS devices
    apple: [
      {
        url: '/R2C/PNG/transparent.png',
        sizes: '180x180',
        type: 'image/png',
      }
    ],
    // Add shortcut icon explicitly
    shortcut: { url: '/R2C/PNG/transparent.png' },
  },
  // Add CSP meta tag for enhanced security
  other: {
    "Content-Security-Policy": "default-src 'self'; script-src 'self' https://www.emailjs.com https://cdn.emailjs.com 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; connect-src 'self' https://api.emailjs.com; font-src 'self'; frame-src 'none'; object-src 'none';"
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
        url: 'https://r2code.com/R2C/PNG/transparent.png', // Use PNG for OG images for better compatibility
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
    images: ['https://r2code.com/R2C/PNG/transparent.png'], // Use PNG for Twitter card
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
      <head>
        <link rel="icon" href="/R2C/PNG/transparent.png" />
        <link rel="apple-touch-icon" href="/R2C/PNG/transparent.png" />
      </head>
      <Script
        id="schema-org-script"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "R2code",
            "url": "https://r2code.com",
            "logo": "https://r2code.com/R2C/SVG/transparent.svg",
            "image": "https://r2code.com/R2C/PNG/transparent.png",
            "description": "R2code specializes in building scalable & secure software solutions for innovative businesses. Experts in fintech, edtech, mobility, and healthcare solutions.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Sremska Mitrovica",
              "addressCountry": "Serbia"
            },
            "email": "nikola@r2code.com",
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
