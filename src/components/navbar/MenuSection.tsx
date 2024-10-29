"use client"
import { ChevronDown } from "lucide-react"
import { useState } from "react"

interface MenuSection {
  name: string
  children: React.ReactNode
}

export function MenuSection({ name, children }: MenuSection) {
  const [open, setOpen] = useState(false)
  return (
    <div className={``}>
      <button
        className={`flex text-lg items-center space-x-4 p-2 hover:bg-zinc-300/50 dark:hover:bg-zinc-700/50 w-full px-6 py-2 my-2 relative duration-1000 rounded-xl`}
        onClick={() => setOpen(() => !open)}
      >
        <p className="">{name}</p>
        <ChevronDown
          className={`absolute right-6 duration-200 ${open === false ? "" : "rotate-180"}`}
        />
      </button>
      <div
        className={`transition-all overflow-hidden duration-500 h-auto ${open ? "" : "max-h-0"}`}
      >
        {children}
      </div>
    </div>
  )
}
