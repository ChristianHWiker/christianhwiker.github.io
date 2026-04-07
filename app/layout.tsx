import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ViewTransition } from "react";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParticleField from "@/components/ParticleField";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Christian Hagen Wiker — Developer Portfolio",
  description: "Developer and data technician based in Elverum, Norway. Building standalone services and modern web applications with C#, Blazor, and AI-driven workflows.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#0a0a0f] text-zinc-100 grid-bg">
        <ParticleField />
        <Navbar />
        <main className="relative z-10 flex-1">
          <ViewTransition>{children}</ViewTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
