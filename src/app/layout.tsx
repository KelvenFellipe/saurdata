import { NavBar } from "@/components/navbar/NavBar"
import Provider from "@/connection/client/Provider"
import { cn } from "@/lib/utils"
import type { Metadata } from "next"
import { SessionProvider } from "next-auth/react"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Saurdata",
  description: "archosauria",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark scrollbar scrollbar-thumb-zinc-800 scrollbar-track-[#111316]">
      <body className={cn(inter.className, "bg-zinc-200 dark:bg-[#111316]")}>
        <Provider>
          <SessionProvider>
            <NavBar />
            <div>{children}</div>
          </SessionProvider>
        </Provider>
      </body>
    </html>
  )
}
