import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CartProvider } from "@/context/CartContext";
import { WishlistProvider } from "@/context/WishlistContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EcoHive | Leading Sustainable Solutions in India",
  description:
    "Your trusted partner for Water Purification, Air Filtering, and Agricultural Machineries.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/LineIcons.3.0.css" />
        <link rel="stylesheet" href="/assets/css/tiny-slider.css" />
        <link rel="stylesheet" href="/assets/css/glightbox.min.css" />
        <link rel="stylesheet" href="/assets/css/main.css" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CartProvider>
          <WishlistProvider>
            <div className="preloader">
              <div className="preloader-inner">
                <div className="preloader-icon">
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
            <Header />
            {children}
            <Footer />
            <a href="#" className="scroll-top">
              <i className="lni lni-chevron-up"></i>
            </a>
          </WishlistProvider>
        </CartProvider>
        <script src="/assets/js/bootstrap.min.js" async></script>
        <script src="/assets/js/tiny-slider.js" async></script>
        <script src="/assets/js/glightbox.min.js" async></script>
        <script src="/assets/js/main.js" async></script>
      </body>
    </html>
  );
}
