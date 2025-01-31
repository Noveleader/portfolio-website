import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ankush Jha | Researcher | Developer | BD",
  description: "This is the portfolio website of Ankush Jha",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://noveleader.xyz/",
    images: [
      {
        url: "https://noveleader.xyz/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ankush Jha",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        {children} <Analytics />
      </body>
    </html>
  );
}