import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.blingbygunjan.com"),

  title: {
    default: "Bling By Gunjan Luxe Salon | Luxury Beauty & Bridal Makeup Studio",
    template: "%s | Bling By Gunjan Luxe Salon",
  },

  description:
    "Experience luxury beauty, bridal makeup, celebrity makeup artistry, hair, skin, nails, and spa services at Bling By Gunjan Luxe Salon in Dehradun.",

  keywords: [
    "Bling By Gunjan",
    "Luxury Salon Dehradun",
    "Bridal Makeup Artist",
    "Celebrity Makeup Artist",
    "Luxury Beauty Salon",
    "Hair Studio Dehradun",
    "HD Makeup",
    "Airbrush Makeup",
    "Luxury Bridal Studio",
    "Beauty Salon Uttarakhand",
    "Gunjan Sajwan",
    "Premium Salon",
  ],

  authors: [{ name: "Bling By Gunjan Luxe Salon" }],

  creator: "Bling By Gunjan Luxe Salon",

  publisher: "Bling By Gunjan Luxe Salon",

  applicationName: "Bling By Gunjan Luxe Salon",

  category: "Beauty & Salon",

  openGraph: {
    title:
      "Bling By Gunjan Luxe Salon | Luxury Beauty & Bridal Makeup Studio",
    description:
      "Luxury salon experiences, celebrity makeup artistry, bridal beauty, hair, skin, spa, and timeless elegance in Dehradun.",
    url: "https://www.blingbygunjan.com",
    siteName: "Bling By Gunjan Luxe Salon",
    locale: "en_IN",
    type: "website",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bling By Gunjan Luxe Salon",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Bling By Gunjan Luxe Salon | Luxury Beauty & Bridal Makeup Studio",
    description:
      "Luxury bridal makeup, celebrity beauty artistry, hair, skin, nails, and spa experiences in Dehradun.",
    images: ["/og-image.jpg"],
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

  alternates: {
    canonical: "https://www.blingbygunjan.com",
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen overflow-x-hidden bg-[#fff8f6] font-sans text-[#140f10] antialiased">

        {children}

      </body>
    </html>
  );
}