"use client"

import { notchData } from "@/app/_data/notchData"
import { CircleUserRound, Lightbulb, LightbulbOff } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { Icon } from "../_components/Icon"

export function NotchTest() {
  const [Lights, setLights] = useState<any>(Lightbulb)

  const toggleTheme = () => {
    let doc = document.documentElement.classList
    doc.value === "dark" ? setLights(LightbulbOff) : setLights(Lightbulb)
    doc.toggle("dark")
  }

  return (
    <div className="">
      <div
        className="flex gap-3 p-3 bg-white size-xl text-zinc-400 
      shadow-md hover:shadow-xl hover:duration-300 duration-300 dark:bg-black justify-center text-3xl w-[100%] h-[50px] mb-2"
      >
        {notchData.map(item => (
          <Icon IconTag={item.IconTag} link={item.link} key={item.link} />
        ))}
        <Lights
          onClick={toggleTheme}
          className="transition ease-in-out hover:scale-125 duration-300 hover:text-black dark:hover:text-white"
        />
        <Link href={"/login"}>
          <CircleUserRound className="absolute right-3 transition ease-in-out hover:scale-125 duration-300 hover:text-black dark:hover:text-white" />
        </Link>
      </div>
    </div>
  )
}
