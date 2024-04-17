import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const digitalFont = localFont({
  src: "./fonts/digital-7.ttf",
  display: "swap",
  variable: "--font-digital",
});

export const metadata: Metadata = {
  title: "Tapioca Genesis Countdown",
  description: "How close are we to Genesis? Soon...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${digitalFont.variable}`}>
        {children}
      </body>
    </html>
  );
}
