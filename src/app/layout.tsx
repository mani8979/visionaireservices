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
  description: "Modern architecture and construction solutions designed with precision, elegance, and functionality.",
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
