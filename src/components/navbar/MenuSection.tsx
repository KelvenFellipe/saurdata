"use client"
import { ChevronDown } from "lucide-react"
import { useState } from "react"

interface MenuSection {
  name: string
  stuff: any
}

export function MenuSection({ name, stuff }: MenuSection) {
  const [open, setOpen] = useState(false)
  return (
    <div className="  ">
      <button
        className="flex  items-center space-x-4 p-2 hover:bg-white/5 w-full rounded-xl px-4 py-2 my-3 relative"
        onClick={() => setOpen(() => !open)}
      >
        <p className="pl-2">{name}</p>
        <ChevronDown
          className={`absolute right-2 duration-200 ${open === false ? "" : "rotate-180"}`}
        />
      </button>
      {open === true && <div>{stuff}</div>}
    </div>
  )
}
