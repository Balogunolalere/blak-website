import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Space_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@/components/analytics"
import { Suspense } from "react"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
})

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  width: "device-width",
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL("https://blakstudio.dev"),
  title: {
    default: "bläk | Digital Architects for Web Apps & AI Automation",
    template: "%s | bläk",
  },
  description: "We build custom Web Apps, AI Agents, and Automation Systems to scale your business. Cut operational costs with our digital architecture solutions.",
  keywords: ["web development", "web scraping", "AI agents", "business automation", "website rebuilds", "Next.js development", "digital architects", "software engineering"],
  authors: [{ name: "bläk" }],
  creator: "bläk",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://blakstudio.dev",
    title: "bläk | Digital Architects for Web Apps & AI Automation",
    description: "Start a project to build custom Web Apps, AI Agents, and Automation Systems.",
    siteName: "bläk",
  },
  twitter: {
    card: "summary_large_image",
    title: "bläk | Digital Architects",
    description: "We build Web Apps, AI Agents & Automation Systems that scale your business.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceMono.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
          <Suspense fallback={null}>
            <Analytics />
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  )
}