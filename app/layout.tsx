import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald", weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://thetradespipeline.com"),
  title: {
    default: "The Trades Pipeline | Growth Without Breaking.",
    template: "%s | The Trades Pipeline",
  },
  description: "Executive growth intelligence and partnership for ambitious trade businesses. Truth Before Assumption. Growth Without Breaking.",
  openGraph: {
    title: "The Trades Pipeline | Growth Without Breaking.",
    description: "Executive growth intelligence for trade businesses capable of becoming extraordinary.",
    url: "https://thetradespipeline.com",
    siteName: "The Trades Pipeline",
    type: "website",
  },
  icons: {
    icon: [{ url: "/icon.png", sizes: "32x32", type: "image/png" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${oswald.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
