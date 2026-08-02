import type { Metadata } from "next";
import { Cinzel, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://craftforexiles.app"),
  title: {
    default: "Crafting for Exiles",
    template: "%s | Crafting for Exiles",
  },
  description:
    "Plan PoE2-style crafts with a free simulator, guided training, target tracking, sharing, and an optional Hideout Management unlock.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "Crafting for Exiles",
    description: "Plan PoE2-style crafts before you spend currency.",
    url: "https://craftforexiles.app",
    siteName: "Crafting for Exiles",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Crafting for Exiles",
    description: "Plan PoE2-style crafts before you spend currency.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${cinzel.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
