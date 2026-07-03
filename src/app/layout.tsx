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
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://visionaireservices.com/#website",
      "url": "https://visionaireservices.com",
      "name": "Visionaire Services",
      "description": "Looking for the best interior designers in Visakhapatnam? Visionaire Services offers premium home interiors, office interiors, modular kitchens, wardrobes, false ceilings, TV units and turnkey interior solutions across Andhra Pradesh & Telangana.",
      "publisher": {
        "@id": "https://visionaireservices.com/#organization"
      }
    },
    {
      "@type": "Organization",
      "@id": "https://visionaireservices.com/#organization",
      "name": "Visionaire Services",
      "url": "https://visionaireservices.com",
      "logo": "https://visionaireservices.com/icon.jpeg",
      "image": "https://visionaireservices.com/icon.jpeg",
      "sameAs": [
        "https://visionaireservices.com"
      ]
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://visionaireservices.com/#localbusiness",
      "name": "Visionaire Services",
      "image": "https://visionaireservices.com/icon.jpeg",
      "url": "https://visionaireservices.com",
      "telephone": "+919522298777",
      "email": "connect@visionaireservices.com",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Plot No. 960, Beside Aditya Fortuner, Near Kushi Shop, Midhilapuri VUDA Colony, Madhurawada",
        "addressLocality": "Visakhapatnam",
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
      ],
      "areaServed": [
        "Visakhapatnam",
        "Madhurawada",
        "Vizag",
        "Gajuwaka",
        "MVP Colony",
        "PM Palem",
        "Anandapuram",
        "Bheemunipatnam",
        "Vizianagaram",
        "Vijayawada",
        "Kakinada",
        "Rajahmundry",
        "Guntur",
        "Nellore",
        "Tirupati",
        "Kurnool",
        "Warangal",
        "Khammam",
        "Karimnagar",
        "Hyderabad",
        "Andhra Pradesh",
        "Telangana"
      ]
    },
    {
      "@type": "ImageObject",
      "@id": "https://visionaireservices.com/#image",
      "url": "https://visionaireservices.com/icon.jpeg",
      "caption": "Visionaire Services Logo",
      "width": "1200",
      "height": "630"
    },
    {
      "@type": "Service",
      "@id": "https://visionaireservices.com/#services",
      "serviceType": "Interior Design, Architectural Design, Civil Construction",
      "provider": {
        "@id": "https://visionaireservices.com/#localbusiness"
      },
      "areaServed": [
        {
          "@type": "AdministrativeArea",
          "name": "Andhra Pradesh"
        },
        {
          "@type": "AdministrativeArea",
          "name": "Telangana"
        }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Visionaire Services Catalog",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Interior Design",
              "description": "Premium residential and commercial interiors, custom wardrobes, modular kitchens, and false ceilings."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Architecture",
              "description": "Custom modern residential design, elevation design, spatial planning, and commercial space blueprints."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Construction",
              "description": "Civil contracting, turnkey buildings, villas, apartments, and structural layout executions."
            }
          }
        ]
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://visionaireservices.com/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who is the best interior designer in Visakhapatnam?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Visionaire Services is highly regarded as one of the best interior design firms in Visakhapatnam, offering premium home interiors, office interiors, modular kitchens, wardrobes, false ceilings, and turnkey interior solutions."
          }
        },
        {
          "@type": "Question",
          "name": "Where is Visionaire Services located?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Visionaire Services is headquartered at Plot No. 960, Beside Aditya Fortuner, Near Kushi Shop, Midhilapuri VUDA Colony, Madhurawada, Visakhapatnam, Andhra Pradesh – 530041."
          }
        },
        {
          "@type": "Question",
          "name": "Which areas do you serve?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We proudly serve clients across Visakhapatnam, Madhurawada, Vizag, Gajuwaka, MVP Colony, PM Palem, Vizianagaram, Vijayawada, Kakinada, Rajahmundry, Guntur, Nellore, Tirupati, Kurnool, Hyderabad, Warangal, Khammam, Karimnagar, and other cities throughout Andhra Pradesh and Telangana."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://visionaireservices.com/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://visionaireservices.com"
        }
      ]
    },
    {
      "@type": "Review",
      "itemReviewed": {
        "@id": "https://visionaireservices.com/#localbusiness"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Dr Chaitanya"
      },
      "reviewBody": "The precision and attention to detail Visionaire Services brought to our home design was truly exceptional. The soothing ambiance they created is perfect after a long day at the hospital."
    },
    {
      "@type": "Review",
      "itemReviewed": {
        "@id": "https://visionaireservices.com/#localbusiness"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Dr. Padala Ashok"
      },
      "reviewBody": "They designed an incredibly ergonomic and beautifully structured living space. The entire process was seamless, and the final result exceeded our expectations."
    },
    {
      "@type": "Review",
      "itemReviewed": {
        "@id": "https://visionaireservices.com/#localbusiness"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Dr.Petla Naidu"
      },
      "reviewBody": "I was thoroughly impressed by their innovative approach to space utilization. Visionaire Services perfectly blended modern aesthetics with practical functionality."
    },
    {
      "@type": "Review",
      "itemReviewed": {
        "@id": "https://visionaireservices.com/#localbusiness"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Mr Sateesh"
      },
      "reviewBody": "Visionaire Services transformed our commercial space into a premium, highly functional environment. Their professionalism and timely delivery were outstanding."
    },
    {
      "@type": "Review",
      "itemReviewed": {
        "@id": "https://visionaireservices.com/#localbusiness"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Dr Akhila"
      },
      "reviewBody": "The meticulous design and elegant interiors have completely revitalized our home. I highly recommend their exceptional interior and architectural services."
    }
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
