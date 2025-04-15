import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Maquro Al Kisai - Madrasah Al Quran dan Bahasa Arab",
  description:
    "Madrasah pendidikan Al Quran dan Bahasa Arab 6 tahun di Tangerang Selatan yang membentuk generasi Qurani yang robbaniyyun.",
  keywords:
    "madrasah Al Quran Tangerang Selatan, pesantren anak 6 tahun, pendaftaran santri baru 2025, sekolah Islam dengan tahfidz Qur'an, pendidikan Al Quran dan Bahasa Arab, Maquro Al Kisai",
  generator: "v0.dev",
  authors: [{ name: "Maquro Al Kisai", url: "https://maquroalkisai.com" }],
  creator: "Maquro Al Kisai",
  publisher: "Maquro Al Kisai",
  openGraph: {
    title: "Maquro Al Kisai - Madrasah Al Quran dan Bahasa Arab",
    description:
      "Madrasah pendidikan Al Quran dan Bahasa Arab 6 tahun di Tangerang Selatan yang membentuk generasi Qurani yang robbaniyyun.",
    url: "https://maquroalkisai.com",
    siteName: "Maquro Al Kisai",
    images: [
      {
        url: "https://maquroalkisai.com/logo-maquro.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maquro Al Kisai - Madrasah Al Quran dan Bahasa Arab",
    description:
      "Madrasah pendidikan Al Quran dan Bahasa Arab 6 tahun di Tangerang Selatan yang membentuk generasi Qurani yang robbaniyyun.",
    images: ["https://maquroalkisai.com/logo-maquro.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
