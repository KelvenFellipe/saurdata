"use client"
import { notchData } from "@/app/data/notchData"
import { Lightbulb, LightbulbOff } from "lucide-react"
import { useSession } from "next-auth/react"
import { useState } from "react"
import { Icon } from "./Icon"

export function Notch() {
  const [Lights, setLights] = useState<any>(Lightbulb)

  const toggleTheme = () => {
    let doc = document.documentElement.classList
    doc.value === "dark" ? setLights(LightbulbOff) : setLights(Lightbulb)
    doc.toggle("dark")
  }
  const { data: session } = useSession()

  return (
    <div className="">
      <div
        className="rounded-xl grid grid-cols-4 gap-3 p-3 bg-white text-zinc-400 
      shadow-md hover:shadow-xl hover:duration-300 duration-300 dark:bg-black justify-center text-3xl max-w-[200px] m-auto my-2 "
      >
        {notchData.map(item => (
          <Icon IconTag={item.IconTag} link={item.link} key={item.link} />
        ))}
        <Lights
          onClick={toggleTheme}
          className="transition ease-in-out hover:scale-125 duration-300 hover:text-black dark:hover:text-white size-8"
        />
      </div>
    </div>
  )
}
