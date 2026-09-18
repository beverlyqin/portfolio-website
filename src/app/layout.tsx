import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import ScrollReveal from "@/components/ScrollReveal";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-proxima-nova",
});

export const metadata: Metadata = {
  title: "Beverly Qin - Portfolio",
  description: "Computer Science Portfolio showcasing computation, architecture, and projects",
  icons: {
    icon: "/walker1.png",
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
        className={`${inter.variable} font-proxima antialiased bg-white text-black`}
      >
        <Header />
        <ScrollReveal>{children}</ScrollReveal>
      </body>
    </html>
  );
}
