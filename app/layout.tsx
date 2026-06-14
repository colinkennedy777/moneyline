import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "MoneyLine Mortgage | Home Loans, Refinancing & Pre-Approval",
    template: "%s | MoneyLine Mortgage",
  },
  description:
    "MoneyLine Mortgage helps first-time buyers and homeowners secure competitive financing with expert guidance, fast closings, and a smooth path to your new home.",
  keywords: [
    "mortgage",
    "home loans",
    "refinance",
    "FHA loan",
    "VA loan",
    "conventional loan",
    "first-time homebuyer",
    "mortgage pre-approval",
  ],
  openGraph: {
    type: "website",
    siteName: site.name,
    title: "MoneyLine Mortgage | Home Loans & Refinancing",
    description:
      "Mortgage solutions built around your MoneyLine. Get pre-approved with clarity, confidence, and competitive rates.",
    url: site.url,
    images: [{ url: "/logo.png", width: 1536, height: 1024, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MoneyLine Mortgage",
    description:
      "Mortgage solutions built around your MoneyLine. Get pre-approved today.",
    images: ["/logo.png"],
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${site.url}/#business`,
      name: site.name,
      image: `${site.url}/logo.png`,
      url: site.url,
      telephone: site.phoneHref.replace("tel:", ""),
      email: site.email,
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: site.address.street,
        addressLocality: site.address.city,
        addressRegion: site.address.state,
        postalCode: site.address.zip,
        addressCountry: "US",
      },
    },
    {
      "@type": "MortgageLoan",
      name: "MoneyLine Mortgage Home Financing",
      provider: { "@id": `${site.url}/#business` },
      loanType: [
        "Conventional",
        "FHA",
        "VA",
        "Jumbo",
        "USDA",
        "Refinance",
      ],
      areaServed: "US",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
