import type { Metadata } from "next";
import { Inter, DM_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Eshaan Singh — Software Engineer",
  description: "Software Engineer based in Bellevue, WA. React, Python, FastAPI.",
  openGraph: {
    title: "Eshaan Singh — Software Engineer",
    description: "Software Engineer based in Bellevue, WA. React, Python, FastAPI.",
    url: "https://trimstream.github.io",
    type: "website",
  },
  icons: {
    icon: "/TrimStream.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${dmMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
