import { cn } from "@/lib/utils"
import type { Metadata } from "next"
import { SessionProvider } from "next-auth/react"
import { Inter } from "next/font/google"
import { Notch } from "../components/Notch"
import Comp from "../components/test"
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
    <html lang="en" className="dark">
      <body className={cn(inter.className, "bg-zinc-200 dark:bg-zinc-800")}>
        <SessionProvider>
          <Notch />
          <Comp />
          <div>{children}</div>
        </SessionProvider>
      </body>
    </html>
  )
}
