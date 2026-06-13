import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "The Trades Pipeline | Built for the Trades. Wired for Growth.",
  description:
    "Full-service digital marketing for trade businesses. Websites, SEO, paid ads, social media, and AI-powered lead generation. One client per trade per market.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${oswald.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
