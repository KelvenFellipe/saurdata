"use client"

import { notchData } from "@/app/_data/notchData"
import { Lightbulb, LightbulbOff } from "lucide-react"
import { useState } from "react"
import { Icon } from "./Icon"

export function Notch() {
  const [Lights, setLights] = useState<any>(Lightbulb)

  const toggleTheme = () => {
    let doc = document.documentElement.classList
    doc.value === "dark" ? setLights(LightbulbOff) : setLights(Lightbulb)
    doc.toggle("dark")
  }

  return (
    <div className="flex justify-center p-4 text-3xl  ">
      <div className="rounded-xl grid grid-cols-4 gap-3 p-3 bg-white size-xl text-zinc-400 shadow-md hover:shadow-xl hover:duration-300 duration-300 dark:bg-black">
        {notchData.map(item => (
          <Icon IconTag={item.IconTag} link={item.link} key={item.link} />
        ))}
        <Lights
          onClick={toggleTheme}
          className="transition ease-in-out hover:scale-125 duration-300 hover:text-black dark:hover:text-white"
        />
      </div>
    </div>
  )
}
