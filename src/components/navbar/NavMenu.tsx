"use client"
import { trpc } from "@/connection/client/client"
import { Bone, Fingerprint, Home } from "lucide-react"
import { useSession } from "next-auth/react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { cn } from "@/lib/utils"

export function NavMenu({
  open,
  setOpen,
}: {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}) {
  const { data } = useSession()
  const path = usePathname()
  const [transition, setTransition] = useState(open)
  const [family, setFamily] = useState<Array<string>>([])
  const { data: familyList = [], isFetched } = trpc.getSauriaFamily.useQuery()

  useEffect(() => {
    const unique = [...new Map(familyList.map(f => [f.family, f])).values()]
    setFamily(() => unique.map(i => i.family))
  }, [isFetched])

  function handleClick() {
    setTransition(() => false)
    setTimeout(() => setOpen(false), 500)
  }

  return (
    <div className="fixed z-[10] select-none">
      <div
        className={cn(
          transition ? "max-w-full" : "max-w-0",
          "h-fit z-[20] top-[56px] left-0 text-base bg-zinc-100 dark:bg-zinc-800 text-black dark:text-white fixed rounded-r-xl overflow-hidden shadow-md  shadow-black/40 dark:shadow-black transition-all duration-500 divide-y divide-black"
        )}
      >
        <div className="m-2 w-[250px]">
          <Link
            href={"/"}
            className={cn(
              path === "/" ? "text-black dark:text-white bg-zinc-300 dark:bg-zinc-800 " : "",
              "flex px-6 py-3 items-center space-x-4 p-2 hover:bg-zinc-300/50 dark:hover:bg-zinc-700/50 ease-in-out duration-500 rounded-xl"
            )}
          >
            <Home />
            <p>Home</p>
          </Link>
          <Link
            href={"/gallery"}
            className={cn(
              path === "/gallery" ? "text-black dark:text-white bg-zinc-300 dark:bg-zinc-800" : "",
              "flex px-6 py-3 items-center space-x-4 p-2 hover:bg-zinc-300/50 dark:hover:bg-zinc-700/50 ease-in-out duration-500 rounded-xl"
            )}
          >
            <Bone />
            <p>Gallery</p>
          </Link>
          {data?.user.role === "ADMIN" && (
            <Link
              href={"/admin"}
              className={cn(
                path === "/admin" ? "text-black dark:text-white bg-zinc-300 dark:bg-zinc-800" : "",
                "flex px-6 py-3 items-center space-x-4 p-2 hover:bg-zinc-300/50 dark:hover:bg-zinc-700/50 ease-in-out duration-500 rounded-xl"
              )}
            >
              <Fingerprint />
              <p>Admin</p>
            </Link>
          )}
        </div>
      </div>
      <div
        className={cn(!transition && "hidden", "fixed w-full h-full top-0 left-0")}
        onClick={handleClick}
      />
    </div>
  )
}
//scrollbar-thin overflow-scroll h-[calc(100%-53px)] space-y-1 divide-y divide-solid [#111316]