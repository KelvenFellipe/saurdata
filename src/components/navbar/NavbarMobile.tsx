"use client"
import { LoadingUser } from "@/components/navbar/LoadingProfile"
import { ProfileIcon } from "@/components/navbar/ProfileIcon"
import { Bone, Fingerprint, Home, ScrollText, User } from "lucide-react"
import { useSession } from "next-auth/react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useState } from "react"
import { NavNotSigned } from "./NavNotSigned"

export function NabvarMobile() {
  const router = useRouter()
  const [menu, setMenu] = useState(false)
  const [notSigned, setNotSigned] = useState(false)
  const { data: session, status } = useSession()
  const path = usePathname()

  return (
    <div
      className="fixed -bottom-[0px] z-40 w-full h-[52px] bg-zinc-100 dark:bg-[#111316] justify-between items-center flex px-4 select-none
     shadow-[0px_-4px_6px_-3px_rgba(0,0,0,0.1),0px_-2px_4px_-2px_rgba(0,0,0,0.1)] shadow-black/40 dark:shadow-black lg:hidden"
    >
      <Link
        href={"/"}
        className={`${
          path === "/" ? "text-black dark:text-white" : ""
        } h-10 w-10 flex flex-col justify-center items-center  ease-in-out duration-500 hover:bg-zinc-300/50 dark:hover:bg-zinc-700/50 rounded-2xl`}
      >
        <Home className=" text-black dark:text-white size-5"></Home>
        <p className="text-xxs">Home</p>
      </Link>
      <Link
        href={"/gallery"}
        className={`${
          path === "/gallery" ? "text-black dark:text-white" : ""
        } h-10 w-10 flex flex-col justify-center items-center ease-in-out duration-500 hover:bg-zinc-300/50 dark:hover:bg-zinc-700/50 rounded-2xl`}
      >
        <Bone className="text-black dark:text-white size-5" />
        <p className="text-xxs">Gallery</p>
      </Link>
      {session?.user.role === "ADMIN" && (
        <Link
          href={"/admin"}
          className={`${
            path === "/admin" ? "text-black dark:text-white bg-zinc-300 dark:bg-zinc-800" : ""
          } h-10 w-10 flex flex-col justify-center items-center ease-in-out duration-500 hover:bg-zinc-300/50 dark:hover:bg-zinc-700/50 rounded-2xl`}
        >
          <Fingerprint className="text-black dark:text-white size-5" />
          <p className="text-xxs">Admin</p>
        </Link>
      )}
      <div className="h-10 w-10 flex flex-col cursor-pointer justify-center items-center 0 ease-in-out duration-500 hover:bg-zinc-300/50 dark:hover:bg-zinc-700/50 rounded-2xl">
        <ScrollText className="text-black dark:text-white size-5" />
        <p className="text-xxs">Articles</p>
      </div>
      <div>
        {status === "loading" ? (
          <LoadingUser />
        ) : status === "authenticated" ? (
          <ProfileIcon user={session.user} mobile={true} />
        ) : (
          <User
            className="p-1 h-10 w-10 cursor-pointer ease-in-out duration-500 hover:bg-zinc-300/50 dark:hover:bg-zinc-700/50 rounded-full"
            onClick={() => setNotSigned(() => !notSigned)}
          />
        )}
      </div>
      {notSigned === true && <NavNotSigned click={() => setNotSigned(() => false)} />}
    </div>
  )
}
