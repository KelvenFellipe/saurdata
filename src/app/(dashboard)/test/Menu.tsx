"use client"
import { Bone, Home } from "lucide-react"
import Link from "next/link"

interface props{
  click?: any
}

export function MenuBar({click}: props) {

  return (
    <div className="top-[53px] h-[calc(100%-53px)] w-full left-0 fixed flex">
      <div className=" bg-[#111316] w-[250px] text-white text-base py-2">
        <Link href={"/"} className="flex px-4 py-3 items-center space-x-2 hover:bg-white/10">
          <Home />
          <p>Home</p>
        </Link>
        <Link
          href={"/gallery"}
          className="flex px-4 py-3 items-center space-x-2 p-2 hover:bg-white/10"
        >
          <Bone />
          <p>Gallery</p>
        </Link>
      </div>
      <div className="w-full  bg-black/40 " onClick={click} />
    </div>
  )
}
//<IconName IconTag={item.IconTag} link={item.link} key={item.link} name={item.name} />
