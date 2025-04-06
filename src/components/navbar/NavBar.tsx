"use client"
import { Logo4 } from "@/components/global/Logo"
import { Menu } from "lucide-react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { LoadingNotification, LoadingProfile } from "./LoadingProfile"
import { LoginButton } from "./LoginButton"
import { MiniNavSearch } from "./MiniNavSearch"
import { NavMenu } from "./NavMenu"
import { NavNotSigned } from "./NavNotSigned"
import { NavSearch } from "./NavSearch"
import { NotificationIcon } from "./NotificationsIcon"
import { Profile } from "./Profile"

export function NavBar() {
  const router = useRouter()
  const [menu, setMenu] = useState(false)
  const [notSigned, setNotSigned] = useState(false)
  const { data: session, status } = useSession()

  return (
    <div
      className="sticky top-0 z-50 grid grid-cols-3 gap-3 px-4 bg-zinc-100 dark:bg-[#111316] size-xl text-black dark:text-white justify-center text-center items-center
       shadow-md shadow-black/40 dark:shadow-black hover:duration-300 duration-300  text-xl w-full h-[52px] "
    >
      <div className="flex items-center space-x-4 ">
        <button className="p-2 hover:bg-zinc-300/50 dark:hover:bg-zinc-700/50 rounded-full ease-in-out duration-300 hidden lg:flex">
          <Menu onClick={() => setMenu(true)} />
        </button>
        <button className="flex items-center text-4xl " onClick={() => router.push("/")}>
          <div className="space-x-2 flex items-center">
            <Logo4 classN="h-9 w-9 text-teal-500 fill-current" />
            <div className="hidden md:flex">
              <p className="text-2xl font-bold ">saurdata</p>
            </div>
          </div>
        </button>
      </div>
      <div className="hidden md:block">
        <NavSearch />
      </div>

      <div className="col-span-2 md:col-span-1 hidden lg:flex">
        {status == "loading" ? (
          <LoadingProfile />
        ) : status === "authenticated" ? (
          <Profile user={session.user} />
        ) : (
          <div className="space-x-4 flex items-center justify-end flex-1">
            <MiniNavSearch />
            <LoginButton setOpen={setNotSigned} />
          </div>
        )}
      </div>

      <div className="col-span-2 md:col-span-1 flex lg:hidden">
        {status == "loading" ? (
          <LoadingNotification />
        ) : status === "authenticated" ? (
          <div className="flex flex-1 space-x-4 justify-end">
            <MiniNavSearch />
            <NotificationIcon user={session.user} mobile={true} />
          </div>
        ) : (
          <div className="space-x-4 flex flex-1 items-center justify-end">
            <MiniNavSearch />
          </div>
        )}
      </div>

      {menu && <NavMenu open={menu} setOpen={setMenu} />}
      {notSigned && <NavNotSigned setOpen={setNotSigned} />}
    </div>
  )
}