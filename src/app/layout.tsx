import type { Metadata } from "next";
import { DM_Sans, Cormorant_Garamond, Libre_Baskerville } from "next/font/google";
import "./globals.css";
import { CustomCursor } from "@/components/CustomCursor";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LenisProvider } from "@/components/LenisProvider";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"]
});

const libre = Libre_Baskerville({
  variable: "--font-libre",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Oura Design | High-End Web Design Agency",
  description: "Crafting bespoke digital presences for brands that refuse to be overlooked.",
  icons: {
    icon: "/logo2.jpg",
    apple: "/logo2.jpg",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="hide-scrollbar">
      <body
        className={`${dmSans.variable} ${cormorant.variable} ${libre.variable} antialiased font-sans bg-[var(--color-linen)] text-[var(--color-ink)] selection:bg-[var(--color-gold)] selection:text-[var(--color-linen)]`}
      >
        <LenisProvider>
          <CustomCursor />
          <Navbar />
          {children}
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
