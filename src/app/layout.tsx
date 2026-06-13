import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileContactBar from "@/components/layout/MobileContactBar";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://visionaireservices.com"),
  title: {
    default: "VISIONAIRE SERVICES | Premium Architecture & Interiors",
    template: "%s | VISIONAIRE SERVICES",
  },
  description: "Modern architecture and construction solutions designed with precision, elegance, and functionality in Visakhapatnam.",
  keywords: ["Architecture", "Interior Design", "Construction", "Visakhapatnam", "False Ceiling", "Profile Lighting", "Putty Painting", "Premium Architecture"],
  authors: [{ name: "Visionaire Engineering & Interiors" }],
  creator: "Visionaire Engineering & Interiors",
  publisher: "Visionaire Engineering & Interiors",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "VISIONAIRE SERVICES | Premium Architecture & Interiors",
    description: "Modern architecture and construction solutions designed with precision, elegance, and functionality.",
    url: "https://visionaireservices.com",
    siteName: "Visionaire Services",
    images: [
      {
        url: "/icon.jpeg",
        width: 1200,
        height: 630,
        alt: "Visionaire Engineering & Interiors Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VISIONAIRE SERVICES | Premium Architecture & Interiors",
    description: "Modern architecture and construction solutions designed with precision, elegance, and functionality.",
    images: ["/icon.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Visionaire Engineering & Interiors",
  "image": "https://visionaireservices.com/icon.jpeg",
  "url": "https://visionaireservices.com",
  "telephone": "+919522298777",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Plot No: 960, Beside Aditya Fortuner Near Kushi Shop, Midhilapuri Vuda Colony",
    "addressLocality": "Madhurawada",
    "addressRegion": "Andhra Pradesh",
    "postalCode": "530041",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 17.8174,
    "longitude": 83.3551
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "opens": "09:00",
    "closes": "18:00"
  },
  "sameAs": [
    "https://visionaireservices.com"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans bg-secondary text-primary pb-16 md:pb-0">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-FT5440E955" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-FT5440E955');
          `}
        </Script>
        <Header />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
        <MobileContactBar />
      </body>
    </html>
  );
}
