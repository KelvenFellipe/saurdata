"use client"
import { Logo } from "@/app/components/Logo"
import { Bell, CircleX, Lightbulb, LightbulbOff, Menu, Search, User } from "lucide-react"
import { useSession } from "next-auth/react"
import { useState } from "react"

export function NotchTest() {
  const [Lights, setLights] = useState<any>(Lightbulb)
  const { data: session } = useSession()
  console.log(session)

  const toggleTheme = () => {
    let doc = document.documentElement.classList
    doc.value === "dark" ? setLights(LightbulbOff) : setLights(Lightbulb)
    doc.toggle("dark")
  }

  return (
    <div
      className="grid grid-cols-3 gap-3 p-2 px-4 bg-white size-xl text-zinc-400 justify-center text-center
      shadow-md hover:shadow-xl hover:duration-300 duration-300 dark:bg-black  text-xl w-[100%] h-fit mb-2 border-b border-zinc-600"
    >
      <div className="flex items-center space-x-4">
        <Menu />
        <div className="flex items-center text-white">
          <Logo />
          <p>saurdata</p>
        </div>
      </div>
      <div className="bg-zinc-800 flex rounded-xl w-full items-center">
        <Search className="size-5 w-10 pl-2" />
        <input
          type="text"
          className="bg-zinc-800 text-xl focus:outline-none p-1 w-full"
          placeholder="search"
        />
        <CircleX className="size-5 w-10 pr-2" />
      </div>
      <div className="flex space-x-4 items-center">
        <Bell className="size-5 ml-auto " />
        {session?.user?.image ? (
          <img src={session.user.image} className="h-9 w-9 rounded-full" />
        ) : (
          <User />
        )}
      </div>

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
