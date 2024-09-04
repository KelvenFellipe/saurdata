"use client"
import { Logo4 } from "@/app/components/Logo"
import { Bell, Menu } from "lucide-react"
import { useSession } from "next-auth/react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { MenuBar } from "./Menu"
import { SearchNavbar } from "./searchNavbar"
import { InNavBar } from "./signNavbar"

export function NavBar() {
  const router = useRouter()
  const [menu, setMenu] = useState(false)
  const [sign, setsign] = useState(false)
  const { data: session } = useSession()
  console.log(session)

  function close() {
    setMenu(false)
  }

  return (
    <div
      className="grid grid-cols-3 gap-3 px-4 bg-white size-xl text-zinc-400 justify-center text-center items-center
      shadow-md hover:shadow-xl hover:duration-300 duration-300 dark:bg-[#111316] text-xl w-[100%] h-fit 0"
    >
      <div className="flex items-center space-x-4 ">
        <button className="p-2 hover:bg-white/20 rounded-full">
          <Menu onClick={() => setMenu(!menu)} />
        </button>
        <button className="flex items-center text-4xl text-white" onClick={() => router.push("/")}>
          <div className="space-x-2 flex">
            <Logo4 />
            <p>saurdata</p>
          </div>
        </button>
      </div>

      <SearchNavbar />

      {session?.user?.image ? (
        <div className="flex space-x-4 items-center p-1 ml-auto">
          <button className="p-1 hover:bg-white/20 rounded-full">
            <Bell className="size-5  " />
          </button>
          <button onClick={() => setsign(!sign)} className="p-1 hover:bg-white/20 rounded-full">
            <img src={session.user.image} className="h-8 w-8 rounded-full " />
          </button>
        </div>
      ) : (
        <Link
          href={"/login"}
          className="ml-auto text-white bg-teal-500 text-base h-[36px] w-[80px] p-1 rounded-xl font-bold border border-teal-500 hover:border-teal-500 hover:bg-[#111316] duration-300 hover:duration-300 "
        >
          Log In
        </Link>
      )}

      {menu === true && <MenuBar click={() => close} />}
      {sign === true && <InNavBar />}
    </div>
  )
}
