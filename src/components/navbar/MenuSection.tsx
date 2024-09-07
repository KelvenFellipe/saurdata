"use client"
import { ChevronDown } from "lucide-react"
import { useState } from "react"

interface MenuSection {
  name: string
}

export function MenuSection({ name }: MenuSection) {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <button
        className="flex px-4 py-2 items-center space-x-4 p-2 hover:bg-white/5 w-full rounded-xl my-3 relative"
        onClick={() => setOpen(() => !open)}
      >
        <p className="pl-2">{name}</p>
        <ChevronDown
          className={`absolute right-2 duration-200 ${open === false ? "" : "rotate-180"}`}
        />
      </button>
    </div>
  )
}
