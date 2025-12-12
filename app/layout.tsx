import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "NewPack - Premium Plastic Packaging Solutions",
  description:
    "Discover innovative, reliable plastic packaging solutions for your business. From food containers to industrial packaging.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/images/newpack-logo.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/images/newpack-logo.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/images/newpack-logo.png",
      },
    ],
    apple: "/images/newpack-logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
