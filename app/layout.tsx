import type React from "react"
import type { Metadata } from "next/types"
import { montserrat, lora, hindMadurai } from "./fonts"
import "./globals.css"
import { Navbar } from "@/features/layout/components/Navbar"
import { Footer } from "@/features/layout/components/Footer"

export const metadata: Metadata = {
  title: "Riley's CrossFit",
  description: "Train hard. Get results.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${montserrat.variable} ${lora.variable} ${hindMadurai.variable} bg-black text-white min-h-screen font-body flex flex-col`}
      >
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
