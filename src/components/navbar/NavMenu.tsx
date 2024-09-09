"use client"
import { Bone, Home } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { MenuSection } from "./MenuSection"
import { FetchFamily } from "./fetch"

export interface clickProps {
  click?: any
}

export function NavMenu({ click }: clickProps) {
  const path = usePathname()

  return (
    <div className="top-[53px] h-[calc(100%-53px)] w-full left-0 fixed flex select-none ">
      <div className=" bg-[#111316] w-[300px] text-base pt-[2px] space-y-1 divide-y divide-solid p-3 scrollbar-thin overflow-y-scroll">
        <div className="my-3">
          <Link
            href={"/"}
            className={`${
              path === "/" ? "text-white bg-zinc-800 " : ""
            } flex px-4 py-3 items-center space-x-4 p-2 hover:bg-white/5 rounded-xl`}
          >
            <Home />
            <p>Home</p>
          </Link>
          <Link
            href={"/gallery"}
            className={`${
              path === "/gallery" ? "text-white bg-zinc-800" : ""
            } flex px-4 py-3 items-center space-x-4 p-2 hover:bg-white/5 rounded-xl`}
          >
            <Bone />
            <p>Gallery</p>
          </Link>
        </div>
        <MenuSection name="Family" stuff={<FetchFamily family={"ceratopsidae"} />} />

        <div></div>
      </div>
      <div className="w-full bg-black/40 " onClick={click} />
    </div>
  )
}
