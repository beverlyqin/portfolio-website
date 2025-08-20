import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-proxima-nova",
});

export const metadata: Metadata = {
  title: "Beverly Qin - Portfolio",
  description: "Computer Science Portfolio showcasing computation, architecture, and projects",
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
        {children}
      </body>
    </html>
  );
}
