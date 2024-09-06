"use client"
import { Logo4 } from "@/components/global/Logo"
import { Bell, Menu } from "lucide-react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { LoginButton } from "./LoginButton"
import { NavMenu } from "./NavMenu"
import { NavNotification } from "./NavNotification"
import { NavNotSigned } from "./NavNotSigned"
import { NavSearch } from "./NavSearch"
import { NavSigned } from "./NavSigned"

export function NavBar() {
  const router = useRouter()
  const [menu, setMenu] = useState(false)
  const [notification, setNotification] = useState(false)
  const [signed, setSigned] = useState(false)
  const [notSigned, setNotSigned] = useState(false)
  const { data: session } = useSession()
  console.log(session)

  return (
    <div
      className="grid grid-cols-3 gap-3 px-4 bg-white size-xl text-zinc-300 justify-center text-center items-center
      shadow-md hover:shadow-xl hover:duration-300 duration-300 dark:bg-[#111316] text-xl w-[100%] h-fit 0 border-b border-zinc-500"
    >
      <div className="flex items-center space-x-4 ">
        <button className="p-2 hover:bg-white/20 rounded-full">
          <Menu onClick={() => setMenu(() => !menu)} />
        </button>
        <button className="flex items-center text-4xl text-white" onClick={() => router.push("/")}>
          <div className="space-x-2 flex items-center">
            <Logo4 classN={"h-9 w-9 text-teal-500 fill-current"} />
            <p className="text-2xl font-bold">saurdata</p>
          </div>
        </button>
      </div>

      <NavSearch />

      {session?.user?.image ? (
        <div className="flex space-x-4 items-center p-1 ml-auto">
          <button
            className="p-2 hover:bg-white/20 rounded-full relative"
            onClick={() => setNotification(() => !notification)}
          >
            <Bell className="size-5 " />
            <div className="absolute w-fit h-fit -top-2 -right-2">
              <p className="w-8 h-8 text-2xl m-auto scale-50 bg-teal-500 text-white rounded-full">
                1
              </p>
            </div>
          </button>
          <button
            onClick={() => setSigned(() => !signed)}
            className="p-1 hover:bg-white/20 rounded-full"
          >
            <img src={session.user.image} className="h-8 w-8 rounded-full " />
          </button>
        </div>
      ) : (
        <LoginButton click={() => setNotSigned(() => !notSigned)} />
      )}

      {menu === true && <NavMenu click={() => setMenu(() => false)} />}
      {signed === true && session?.user && (
        <NavSigned click={() => setSigned(() => false)} user={session.user} />
      )}
      {notSigned === true && <NavNotSigned click={() => setNotSigned(() => false)} />}
      {notification === true && (
        <NavNotification click={() => setNotification(() => !notification)} />
      )}
    </div>
  )
}
