import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import { WagmiProvider } from "./wagmi-provider";

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
  title: "Tapioca LBP Contributions",
  description:
    "Simple site that shows how much USDC Tapioca raised during their LBP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${digitalFont.variable}`}>
        <WagmiProvider>{children}</WagmiProvider>
      </body>
    </html>
  );
}
