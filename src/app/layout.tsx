import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SADC Solar | Premium Solar Energy Solutions",
  description: "High-end cinematic solar energy solutions for a sustainable future.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt"
      translate="no"
      className={`${inter.variable} h-full antialiased`}
    >
      <head>
        <meta name="google" content="notranslate" />
      </head>
      <body className="min-h-full flex flex-col bg-white text-gray-900" suppressHydrationWarning>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
