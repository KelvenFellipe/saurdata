"use client"
import { trpc } from "@/connection/client/client"
import { Bone, Fingerprint, Home } from "lucide-react"
import { useSession } from "next-auth/react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { MenuSection } from "./MenuSection"

export function NavMenu({ click }: { click: any }) {
  const { data } = useSession()
  const path = usePathname()
  const [open, setOpen] = useState(false)
  const [family, setFamily] = useState<Array<string>>([])
  const { data: familyList = [], isFetched } = trpc.getSauriaFamily.useQuery()

  useEffect(() => {
    setOpen(() => true)
  }, [])

  useEffect(() => {
    const unique = [...new Map(familyList.map(f => [f.family, f])).values()]
    setFamily(() => unique.map(i => i.family))
  }, [isFetched])

  function handleClick() {
    setOpen(() => false)
    setTimeout(click, 1000)
  }

  return (
    <div className="fixed z-[10] select-none">
      <div
        className={`h-fit z-[20] top-[56px] text-base bg-zinc-100 dark:bg-zinc-800 text-black dark:text-white fixed rounded-r-xl overflow-hidden
        shadow-md  shadow-black/40 dark:shadow-black transition-all duration-1000 divide-y divide-black ${
          open ? "max-w-full" : "max-w-0"
        }`}
      >
        <div className="m-2 w-[250px]">
          <Link
            href={"/"}
            className={`${
              path === "/" ? "text-black dark:text-white bg-zinc-300 dark:bg-zinc-800 " : ""
            } flex px-6 py-3 items-center space-x-4 p-2 hover:bg-zinc-300/50 dark:hover:bg-zinc-700/50 ease-in-out duration-500 rounded-xl`}
          >
            <Home />
            <p>Home</p>
          </Link>
          <Link
            href={"/gallery"}
            className={`${
              path === "/gallery" ? "text-black dark:text-white bg-zinc-300 dark:bg-zinc-800" : ""
            } flex px-6 py-3 items-center space-x-4 p-2 hover:bg-zinc-300/50 dark:hover:bg-zinc-700/50 ease-in-out duration-500 rounded-xl`}
          >
            <Bone />
            <p>Gallery</p>
          </Link>
          {data?.user.role === "ADMIN" && (
            <Link
              href={"/admin"}
              className={`${
                path === "/admin" ? "text-black dark:text-white bg-zinc-300 dark:bg-zinc-800" : ""
              } flex px-6 py-3 items-center space-x-4 p-2 hover:bg-zinc-300/50 dark:hover:bg-zinc-700/50 ease-in-out duration-500 rounded-xl`}
            >
              <Fingerprint />
              <p>Admin</p>
            </Link>
          )}
        </div>
        <MenuSection
          stuff={
            <div className="mb-2 text-start pl-6 font-normal">
              {family.map(item => (
                <p className="py-1">{item}</p>
              ))}
            </div>
          }
          name="Families"
        />
      </div>
      <div
        className={`fixed w-full h-full top-0 left-0 ${!open && "hidden"}`}
        onClick={handleClick}
      />
    </div>
  )
}
//scrollbar-thin overflow-scroll h-[calc(100%-53px)] space-y-1 divide-y divide-solid [#111316]