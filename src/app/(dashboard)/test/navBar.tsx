"use client"
import { Logo2 } from "@/app/components/Logo"
import { Bell, Lightbulb, LightbulbOff, Menu, User } from "lucide-react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { MenuBar } from "./Menu"
import { SearchNavbar } from "./searchNavbar"

export function NavNar() {
  const router = useRouter()
  const [Lights, setLights] = useState<any>(Lightbulb)
  const [menu, setMenu] = useState(false)
  const { data: session } = useSession()
  console.log(session)

  const toggleTheme = () => {
    let doc = document.documentElement.classList
    doc.value === "dark" ? setLights(LightbulbOff) : setLights(Lightbulb)
    doc.toggle("dark")
  }

  return (
    <div
      className="grid grid-cols-3 gap-3 px-4 bg-white size-xl text-zinc-400 justify-center text-center
      shadow-md hover:shadow-xl hover:duration-300 duration-300 dark:bg-black text-xl w-[100%] h-fit border-b border-zinc-600"
    >
      <div className="flex items-center space-x-4 p-2">
        <Menu onClick={() => setMenu(!menu)} />
        <button className="flex items-center text-3xl text-white" onClick={() => router.push("/")}>
          <Logo2 />
          saurdata
        </button>
      </div>

      <SearchNavbar />

      <div className="flex space-x-4 items-center">
        <Bell className="size-5 ml-auto " />
        {session?.user?.image ? (
          <img src={session.user.image} className="h-9 w-9 rounded-full" />
        ) : (
          <User className="h-9 w-9 rounded-full bg-zinc-800" />
        )}
      </div>
      {menu === true && <MenuBar />}
      {/* {notchData.map(item => (
          <Icon IconTag={item.IconTag} link={item.link} key={item.link} />
        ))}
        <Lights
          onClick={toggleTheme}
          className="transition ease-in-out hover:scale-125 duration-300 hover:text-black dark:hover:text-white"
        /> */}
    </div>
  )
}
