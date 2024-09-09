"use client"
import { Circle, LogOut, Moon } from "lucide-react"
import { signOut } from "next-auth/react"
import Link from "next/link"
import { useState } from "react"
import { profileType } from "./Profile"

interface props {
  user: profileType
  click: any
}

export function NavSigned({ user, click }: props) {
  const [Lights, setLights] = useState("right-0")

  const toggleTheme = () => {
    let doc = document.documentElement.classList
    doc.value === "dark" ? setLights("left-0") : setLights("right-0")
    doc.toggle("dark")
  }

  return (
    <div className="fixed w-full h-full z-[10] select-none">
      <div className="w-fit h-fit bg-zinc-800 fixed text-sm text-white top-[53px] right-4 rounded-xl z-[20]">
        {user.image && (
          <div className="grid grid-cols-1 my-2 ">
            <Link
              href={"/profile"}
              className="flex px-4 py-3 items-center space-x-2 hover:bg-white/5"
            >
              <img src={user.image} className="h-12 w-12 rounded-full" />
              <div className="grid  grid-rows-2 text-justify items-center">
                <p>{user.name}</p>
                <p className="text-xs text-zinc-400 ">View Profile</p>
              </div>
            </Link>

            <div
              onClick={toggleTheme}
              className="flex relative items-center space-x-[20px] py-3 px-[28px] hover:bg-white/5"
            >
              <Moon className="size-6" />
              <p>Dark Mode</p>
              <div
                className={`  h-6 w-9 rounded-2xl duration-300 right-0 ${
                  Lights === "right-0" ? "bg-teal-500" : "bg-zinc-400 "
                } `}
              >
                <Circle className={`size-6 fill-current ml-auto ${Lights}`} />
              </div>
            </div>

            <button
              onClick={() => signOut()}
              type="submit"
              className="flex w-full items-center space-x-[20px] py-3 px-[28px] hover:bg-white/5"
            >
              <LogOut />
              <p>Log Out</p>
            </button>
          </div>
        )}
      </div>
      <div className="fixed w-full h-full top-0 left-0" onClick={click}></div>
    </div>
  )
}
