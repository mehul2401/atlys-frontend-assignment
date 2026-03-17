import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "France Visa for Indians | Atlys Replica",
  description:
    "Apply for your France Schengen visa with an Atlys-style experience. See approval-focused support, real customer reviews, and countries you can access with one visa.",
  openGraph: {
    title: "France Visa for Indians | Atlys Replica",
    description:
      "France Schengen visa experience with approval-focused support, success stories, and access to 29 countries.",
    url: "https://localhost:3000",
    siteName: "France Visa for Indians",
    type: "website",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:text-zinc-900 shadow"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
