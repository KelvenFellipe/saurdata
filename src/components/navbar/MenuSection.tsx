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
    <div className={``}>
      <button
        className={`flex text-lg items-center space-x-4 p-2 hover:bg-white/5 w-full rounded-xl px-4 py-2 my-2 relative ${
          open === true && ""
        }`}
        onClick={() => setOpen(() => !open)}
      >
        <p className="">{name}</p>
        <ChevronDown
          className={`absolute right-2 duration-200 ${open === false ? "" : "rotate-180"}`}
        />
      </button>
      {open === true && <div className="px-2 ">{stuff}</div>}
    </div>
  )
}