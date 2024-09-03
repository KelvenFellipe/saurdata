"use client"
import { IconName } from "@/app/components/Icon"
import { notchData } from "@/app/data/notchData"
import { Lightbulb, LightbulbOff } from "lucide-react"
import { useState } from "react"

export function MenuBar() {
  const [Lights, setLights] = useState<any>(Lightbulb)
  const toggleTheme = () => {
    let doc = document.documentElement.classList
    doc.value === "dark" ? setLights(LightbulbOff) : setLights(Lightbulb)
    doc.toggle("dark")
  }
  return (
    <div className="h-screen absolute flex">
      <div className="w-[200px] border-r border-zinc-600 bg-[#111316]  left-0">
        {notchData.map(item => (
          <div>
            <IconName IconTag={item.IconTag} link={item.link} key={item.link} name={item.name} />
          </div>
        ))}
        <Lights
          onClick={toggleTheme}
          className="transition ease-in-out hover:scale-125 duration-300 hover:text-black dark:hover:text-white size-8"
        />
      </div>
      <div className="bg-black/25 w-screen"></div>
    </div>
  )
}
