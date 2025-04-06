import { NavBar } from "@/components/navbar/NavBar"
import Provider from "@/connection/client/Provider"
import { cn } from "@/lib/utils"
import { Analytics } from "@vercel/analytics/react"
import type { Metadata } from "next"
import { SessionProvider } from "next-auth/react"
import { Inter } from "next/font/google"
import { NavbarMobile } from "../components/navbar/NavbarMobile"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Saurdata",
  description:
    "Saurdata is an online fossil gallery of reptiles, containing information about various genus.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark scrollbar scrollbar-thumb-zinc-800 scrollbar-track-[#111316]">
      <body className={cn(inter.className, "bg-zinc-100 dark:bg-[#111316]")}>
        <Provider>
          <SessionProvider>
            <NavBar />
            <NavbarMobile />
            <Analytics />
            <div>{children}</div>
            <div className="h-[52px] lg:hidden" />
          </SessionProvider>
        </Provider>
      </body>
    </html>
  )
}
