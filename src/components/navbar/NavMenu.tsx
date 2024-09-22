"use client"
import { Bone, Home } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

export function NavMenu({ click, opened }: { click: any; opened: boolean }) {
  const path = usePathname()
  const [open, setOpen] = useState(false)
  useEffect(() => {
    setOpen(() => opened)
  }, [])

  return (
    <div className="fixed z-[10] select-none">
      <div
        className={`h-fit z-[20] top-[56px] text-base text-white fixed rounded-r-xl overflow-hidden
        shadow-md bg-zinc-800 shadow-black transition-[max-width] duration-1000 ${
          open ? "max-w-full" : "max-w-0"
        }`}
      >
        <div className="my-2 w-[200px]">
          <Link
            href={"/"}
            className={`${
              path === "/" ? "text-white bg-zinc-800 " : ""
            } flex px-6 py-3 items-center space-x-4 p-2 hover:bg-zinc-700/50 ease-in-out duration-500`}
          >
            <Home />
            <p>Home</p>
          </Link>
          <Link
            href={"/gallery"}
            className={`${
              path === "/gallery" ? "text-white bg-zinc-800" : ""
            } flex px-6 py-3 items-center space-x-4 p-2 hover:bg-zinc-700/50 ease-in-out duration-500`}
          >
            <Bone />
            <p>Gallery</p>
          </Link>
        </div>
        <div />
      </div>
      <div className="fixed w-full h-full top-0 left-0 " onClick={click} />
    </div>
  )
}
//scrollbar-thin overflow-scroll h-[calc(100%-53px)] space-y-1 divide-y divide-solid [#111316]