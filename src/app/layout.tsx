import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-kanit",
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
    <html lang="en" className={kanit.variable}>
      <body className="bg-[#0C0C0C] text-[#D7E2EA]">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
