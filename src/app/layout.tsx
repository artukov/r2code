import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/app/client-layout";

// Initialize font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "R2code | Professional Software Development Services",
  description: "R2code specializes in building scalable & secure software solutions for innovative businesses. Experts in fintech, edtech, mobility, and healthcare solutions.",
  keywords: "software development, web development, mobile apps, fintech, edtech, healthcare tech, custom software, React, Next.js",
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
  },
  openGraph: {
    title: "R2code | Professional Software Development Services",
    description: "Building scalable & secure software solutions for innovative businesses",
    url: "https://r2code.com",
    siteName: "R2code",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
