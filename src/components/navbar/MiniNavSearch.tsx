"use client"
import { Search } from "lucide-react"
import { useState } from "react"
import { NavSearch } from "./NavSearch"

export function MiniNavSearch() {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <Search className="flex md:hidden" onClick={() => setOpen(true)} />
      {open && (
        <div className="fixed top-0 left-0 w-full z-[60] p-2 ">
          <div className="bg-black" onReset={() => setOpen(false)}>
            <NavSearch />
          </div>
          <div className="w-full h-screen bg-black/40" onClick={() => setOpen(false)} />
        </div>
      )}
    </div>
  )
}
