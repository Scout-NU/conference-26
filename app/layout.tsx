import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { MockNavbar } from "@/components/mock-navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Entangle Conference",
  description: "Join us at Entangle - A conference about design, technology, and innovation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MockNavbar />
        {children}
      </body>
    </html>
  );
}
