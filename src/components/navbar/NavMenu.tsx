"use client"
import { Bone, Home } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function NavMenu({ click }: any) {
  const path = usePathname()

  return (
    <div className="top-[52px] h-[calc(100%-53px)] w-full left-0 fixed flex select-none ">
      <div
        className=" bg-[#111316] w-[300px] text-base text-white pt-[2px] space-y-1 divide-y divide-solid p-3
      scrollbar-thin overflow-scroll"
      >
        <div className="my-2">
          <Link
            href={"/"}
            className={`${
              path === "/" ? "text-white bg-zinc-800 " : ""
            } flex px-4 py-3 items-center space-x-4 p-2 hover:bg-zinc-700/50 rounded-xl ease-in-out duration-500`}
          >
            <Home />
            <p>Home</p>
          </Link>
          <Link
            href={"/gallery"}
            className={`${
              path === "/gallery" ? "text-white bg-zinc-800" : ""
            } flex px-4 py-3 items-center space-x-4 p-2 hover:bg-zinc-700/50 rounded-xl ease-in-out duration-500`}
          >
            <Bone />
            <p>Gallery</p>
          </Link>
        </div>

        <div />
      </div>
      <div className="w-full bg-black/40 " onClick={click} />
    </div>
  )
}
