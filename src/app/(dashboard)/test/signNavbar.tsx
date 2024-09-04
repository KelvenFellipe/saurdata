"use client"
import { Circle, LogOut, Moon } from "lucide-react"
import { signOut, useSession } from "next-auth/react"
import Link from "next/link"
import { useState } from "react"

export function InNavBar() {
  const { data: session } = useSession()
  const [Lights, setLights] = useState("right-0")

  const toggleTheme = () => {
    let doc = document.documentElement.classList
    doc.value === "dark" ? setLights("left-0") : setLights("right-0")
    doc.toggle("dark")
  }

  return (
    <div className="w-fit h-fit  bg-zinc-800 absolute text-sm text-white top-[53px] right-4 rounded-xl z-[1]">
      {session?.user?.image && (
        <div className="grid grid-cols-1 my-2 ">
          <Link
            href={"/profile"}
            className="flex px-4 py-3 items-center space-x-2 hover:bg-white/10"
          >
            <img src={session.user.image} className="h-12 w-12 rounded-full" />
            <div>
              <p>{session.user.name}</p>
              <p className="text-xs text-zinc-500">View Profile</p>
            </div>
          </Link>

          <div
            onClick={toggleTheme}
            className="flex  items-center space-x-[20px] py-3 px-[28px] hover:bg-white/10"
          >
            <Moon className="size-6" />
            <p>Dark Mode</p>
            <div
              className={` relative h-6 w-9 bg-zinc-400 rounded-2xl duration-300 ${
                Lights === "right-0" && "bg-teal-500"
              } `}
            >
              <Circle className={`size-6 fill-current absolute ${Lights}`} />
            </div>
          </div>

          <form action={() => signOut()}>
            <button
              type="submit"
              className="flex w-full items-center space-x-[20px] py-3 px-[28px] hover:bg-white/10"
            >
              <LogOut />
              <p>Log Out</p>
            </button>
          </form>
        </div>
      )}
    </div>
  )
}
