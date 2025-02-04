import { Inter } from "next/font/google"
import { SiteHeader } from "@/components/ui/header"
import "./globals.css"
import type React from "react" // Import React
import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={cn(inter.className, "min-h-screen bg-black text-white antialiased")}>
        <SiteHeader />
        <main className="pt-16">{children}</main>
      </body>
    </html>
  )
}

