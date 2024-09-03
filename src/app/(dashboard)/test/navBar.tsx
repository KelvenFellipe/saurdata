"use client"
import { Logo4 } from "@/app/components/Logo"
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
      className="grid grid-cols-3 gap-3 px-4 bg-white size-xl text-zinc-400 justify-center text-center relative 
      shadow-md hover:shadow-xl hover:duration-300 duration-300 dark:bg-[#111316] text-xl w-[100%] h-fit border-b border-zinc-600"
    >
      <div className="flex items-center space-x-4 ">
        <button className="p-1 hover:bg-white/20 rounded-md">
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

      <div className="flex space-x-4 items-center p-1 ml-auto">
        <button className="p-1 hover:bg-white/20 rounded-md">
          <Bell className="size-5  " />
        </button>

        {session?.user?.image ? (
          <button>
            <img src={session.user.image} className="h-9 w-9 rounded-full" />
          </button>
        ) : (
          <button>
            <User className="h-9 w-9 rounded-full bg-zinc-800" />
          </button>
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
