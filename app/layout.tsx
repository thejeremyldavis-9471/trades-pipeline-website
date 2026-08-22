import type { Metadata } from "next";
import Link from "next/link";
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
    "Full-service digital marketing for trade businesses — websites, local SEO, social media, ads, and B2B lead generation. Built exclusively for HVAC, plumbing, electrical, roofing, and construction.",
  icons: {
    icon: [
      { url: "/icon.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${oswald.variable}`}
    >
      <body className="font-sans antialiased">
        {children}
        <footer className="border-t border-white/15 bg-[#05090b] px-5 py-4 text-center text-[11px] tracking-wide text-white/55">
          <div>© {new Date().getFullYear()} The Trades Pipeline. All rights reserved.</div>
          <div className="mt-2 flex justify-center gap-5">
            <Link href="/privacy-policy" className="transition hover:text-white">Privacy Policy</Link>\n            <Link href="/terms-of-use" className="transition hover:text-white">Terms of Use</Link>
          </div>
        </footer>
      </body>
    </html>
  );
}
