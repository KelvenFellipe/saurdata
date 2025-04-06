"use client"
import { trpc } from "@/connection/client/client"
import { EllipsisVertical } from "lucide-react"
import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { NotificationOptions } from "./NotificationOptions"
import { getTime } from "../gallery/TimeHook"
import { ProfileType } from "@/types/schemaTypes"
import { cn } from "@/lib/utils"

interface props {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
  data: ProfileType
  mobile?: boolean
}
export function NavNotification({ open, setOpen, data, mobile = false }: props) {
  const [state, setState] = useState({ options: false, transition: open, index: 0 })
  const { data: notifications = [] } = trpc.getNotification.useQuery(data.id)

  function handleClick() {
    setState({ ...state, transition: false })
    setTimeout(() => setOpen(false), 500)
  }

  return (
    <div className="absolute z-[10] select-none">
      <div
        className={cn(
          mobile ? "right-4" : "right-[64px]",
          !state.transition ? "max-h-0" : "max-h-full",
          "fixed z-[20] w-[500px] top-[56px] bg-zinc-100 dark:bg-zinc-800 text-black dark:text-white text-sm rounded-xl transition-[max-height] duration-500 overflow-hidden shadow-md shadow-black/40 dark:shadow-black"
        )}
      >
        <div className="my-2 space-y-1 overflow-auto max-h-[380px] w-[500px] scrollbar-none hover:scrollbar-thin pr-[10px] hover:pr-0 scrollbar-track-zinc-800 scrollbar-thumb-[#111316]">
          {notifications !== null && notifications.length !== 0 ? (
            notifications.map((item, index) => (
              <div
                className={cn(
                  item.status == "READ" && "text-zinc-400",
                  "flex flex-col relative space-x-[20px] pl-4 px-1 py-1 hover:bg-zinc-300/50 dark:hover:bg-zinc-700/50 font-bold ease-in-out duration-300 w-full"
                )}
                onClick={() => true}
                key={index}
              >
                <div className="justify-between flex flex-1 w-auto items-center">
                  <div>
                    {item.status == "UNREAD" && (
                      <div className="w-1 h-[44px] rounded-sm bg-teal-500 absolute left-[2px]"></div>
                    )}
                    {item.content}
                  </div>

                  <div
                    className="text-white rounded-full active:bg-zinc-700 w-10 h-10 p-1 flex justify-center items-center cursor-pointer"
                    onClick={() => setState({ ...state, options: true, index: index })}
                  >
                    <EllipsisVertical className="size-6 " />
                  </div>
                  {state.options && state.index === index && (
                    <NotificationOptions onClick={() => setState({ ...state, options: false })} />
                  )}
                </div>
                <div className="text-xs justify-normal flex text-zinc-600">
                  {getTime(item.createdAt)}
                </div>
              </div>
            ))
          ) : (
            <div className="flex items-center space-x-[20px] py-3 px-[28px] hover:bg-zinc-700/50 font-bold">
              nothing here
            </div>
          )}
        </div>
      </div>
      <div
        className={cn(!state.transition && "hidden", "fixed w-full h-full top-0 left-0")}
        onClick={handleClick}
      />
    </div>
  )
}


