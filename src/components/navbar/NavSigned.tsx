"use client"
import { cn } from "@/lib/utils"
import { ProfileType } from "@/types/schemaTypes"
import { Circle, LogOut, Moon, StarIcon } from "lucide-react"
import { signOut } from "next-auth/react"
import Link from "next/link"
import { Dispatch, SetStateAction, useEffect, useState } from "react"

interface props {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
  user: ProfileType
  mobile?: boolean
}

export function NavSigned({ user, open, setOpen, mobile = false }: props) {
  const [state, setState] = useState({ open: open, lights: "" })
  const doc = document.documentElement.classList
  const toggleTheme: any = () => {
    doc.toggle("dark")
  }

  useEffect(() => {
    doc.value.includes("dark")
      ? setState({ ...state, lights: "translate-x-3" })
      : setState({ ...state, lights: "translate-x-0" })
  })

  function handleClick() {
    setState({ ...state, open: false })
    setTimeout(() => setOpen(() => false), 500)
  }

  return (
    <div className="absolute z-[10] select-none ">
      <div
        className={cn(
          state.open ? "max-h-full" : "max-h-0",
          mobile ? "bottom-[56px]" : "top-[56px]",
          "fixed z-[20] right-4 w-fit text-sm bg-zinc-100 dark:bg-zinc-800 text-black dark:text-white rounded-xl transition-[max-height] duration-500 overflow-hidden shadow-md shadow-black/40 dark:shadow-black"
        )}
      >
        {user.image && (
          <div className="grid grid-cols-1 my-2">
            <Link
              href={"/profile"}
              className="flex px-4 py-3 items-center space-x-2 hover:bg-zinc-300/50 dark:hover:bg-zinc-700/50 ease-in-out duration-500"
            >
              <img src={user.image} className="h-12 w-12 rounded-full" />
              <div className="grid  grid-rows-2 text-justify items-center">
                <div className="flex space-x-1 items-center">
                  <p>{user.name}</p>
                  {user.role === "ADMIN" && (
                    <StarIcon className="text-[#ffb514] size-4 fill-current" />
                  )}
                </div>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 ">View Profile</p>
              </div>
            </Link>

            <div
              onClick={toggleTheme}
              className="flex relative items-center space-x-[20px] py-3 px-[28px] hover:bg-zinc-300/50 dark:hover:bg-zinc-700/50 ease-in-out duration-500 cursor-pointer"
            >
              <Moon className="size-6" />
              <p>Dark Mode</p>
              <div
                className={cn(
                  state.lights === "translate-x-3" ? "bg-teal-500" : "bg-zinc-400",
                  "flex h-6 w-9 rounded-2xl transition-colors"
                )}
              >
                <Circle
                  className={cn(state.lights, "size-6 text-white fill-current duration-500")}
                />
              </div>
            </div>

            <button
              onClick={() => signOut()}
              type="submit"
              className="flex w-full items-center space-x-[20px] py-3 px-[28px] hover:bg-zinc-300/50 dark:hover:bg-zinc-700/50 ease-in-out duration-500"
            >
              <LogOut />
              <p>Log Out</p>
            </button>
          </div>
        )}
      </div>
      <div
        className={cn(!state.open && "hidden", "fixed w-full h-full top-0 left-0")}
        onClick={handleClick}
      ></div>
    </div>
  )
}