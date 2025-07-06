import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "🇨🇳 CHINA TAKEOVER - The Ultimate Meme Coin Revolution! 🚀",
  description: "Join the most epic meme coin takeover in crypto history! China Takeover is here to dominate the blockchain with the power of memes! 🌙",
  keywords: "meme coin, china takeover, crypto, blockchain, defi, moon, revolution",
  openGraph: {
    title: "🇨🇳 CHINA TAKEOVER - The Ultimate Meme Coin Revolution! 🚀",
    description: "Join the most epic meme coin takeover in crypto history!",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "🇨🇳 CHINA TAKEOVER - The Ultimate Meme Coin Revolution! 🚀",
    description: "Join the most epic meme coin takeover in crypto history!",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-bold">
        {children}
      </body>
    </html>
  );
}
