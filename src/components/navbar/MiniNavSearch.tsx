"use client"
import { Search } from "lucide-react"

import { useState } from "react"
import { NavSearch } from "./NavSearch"

export function MiniNavSearch() {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <div className="flex md:hidden cursor-pointer p-2 hover:bg-zinc-300/50 dark:hover:bg-zinc-700/50 rounded-full ease-in-out duration-300">
        <Search onClick={() => setOpen(() => true)} />
      </div>

      {open && (
        <div className="fixed top-0 left-0 w-full z-[60] p-2 bg-black">
          <NavSearch onClose={() => setOpen(false)} />
          <div
            className={`fixed w-full h-screen left-0 top-0 bg-black/40 ${!open && "hidden"}`}
            onClick={() => setOpen(() => false)}
          />
        </div>
      )}
    </div>
  )
}
