import { cn } from "@/lib/utils"
import type { Metadata } from "next"
import { SessionProvider } from "next-auth/react"
import { Inter } from "next/font/google"
import "./globals.css"
import { NotchTest } from "./test/test"

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
    <html lang="en" className="dark">
      <body className={cn(inter.className, "bg-zinc-200 dark:bg-zinc-900")}>
        <SessionProvider>
          <NotchTest />
          <div>{children}</div>
        </SessionProvider>
      </body>
    </html>
  )
}
