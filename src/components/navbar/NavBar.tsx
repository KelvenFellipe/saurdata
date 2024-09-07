"use client"
import { Logo4 } from "@/components/global/Logo"
import { Menu } from "lucide-react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { LoginButton } from "./LoginButton"
import { NavMenu } from "./NavMenu"
import { NavNotSigned } from "./NavNotSigned"
import { NavSearch } from "./NavSearch"
import { Profile } from "./Profile"

export function NavBar() {
  const router = useRouter()
  const [menu, setMenu] = useState(false)
  const [notSigned, setNotSigned] = useState(false)
  const { data: session, status } = useSession()
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

      {status === "authenticated" && session.user !== undefined ? (
        <Profile email={session.user.email} />
      ) : (
        <LoginButton click={() => setNotSigned(() => !notSigned)} />
      )}

      {menu === true && <NavMenu click={() => setMenu(() => false)} />}
      {notSigned === true && <NavNotSigned click={() => setNotSigned(() => false)} />}
    </div>
  )
}