import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import CursorTrailGate from "@/components/CursorTrailGate";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Entangle 2026 | Design & Tech Conference",
  description: "Join us for Entangle 2026 - a conference bringing together designers and developers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="/fonts/ClashDisplay-Variable.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${geistMono.variable} antialiased bg-[#212121]`}
      >
        <CursorTrailGate />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
