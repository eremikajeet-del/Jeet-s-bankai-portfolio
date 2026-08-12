import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Jeet — Full-Stack Developer",
  description:
    "Full-Stack Developer building high-quality websites and web applications for businesses.",
};

import Navbar from "@/components/portfolio/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={outfit.variable}>
      <body className="bg-surface-base text-text-tertiary antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
