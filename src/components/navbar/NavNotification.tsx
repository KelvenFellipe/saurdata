"use client"
import { trpc } from "@/connection/client/client"
import { NotificationType, ProfileType } from "@/types/profileType"
import { useEffect, useState } from "react"

interface props {
  click: any
  data: ProfileType
}
export function NavNotification({ click, data }: props) {
  const [open, setOpen] = useState(false)
  const [notifications, setNotifications] = useState<Array<NotificationType>>([])

  const utils = trpc.useContext()
  const update = trpc.updateNotification.useMutation({
    onSettled: () => {
      utils.getNotification.invalidate()
    },
  })

  useEffect(() => {
    setNotifications(data.notifications)
    setOpen(() => true)
  }, [])

  function notifi(index: number) {
    if (notifications[index].read === false) {
      notifications[index].read = true
      const notificationR = { id: data.id, notification: notifications }
      update.mutate(notificationR)
    }
  }

  function handleClick() {
    setOpen(() => false)
    setTimeout(click, 1000)
  }

  return (
    <div className={`fixed z-[10] select-none`}>
      <div
        className={`fixed z-[20] w-[300px] top-[56px] right-[72px] bg-zinc-100 dark:bg-zinc-800 text-black dark:text-white text-sm rounded-xl transition-[max-height]
           duration-1000 overflow-hidden shadow-md shadow-black/40 dark:shadow-black ${
             !open ? "max-h-0" : "max-h-full"
           } `}
      >
        <div className="my-2 space-y-1 overflow-auto max-h-[380px] scrollbar-thin scrollbar-track-zinc-800 scrollbar-thumb-[#111316]">
          {notifications !== null && notifications.length !== 0 ? (
            notifications.map((item, index) => (
              <div className="flex items-center " key={index}>
                {!item.read && <div className="w-[2px] h-[44px] bg-teal-500 p-[2px] "></div>}
                <div
                  className={`flex flex-row items-center space-x-[20px] px-4 py-3 hover:bg-zinc-300/50 dark:hover:bg-zinc-700/50 font-bold ease-in-out duration-300 w-full ${
                    item.read && "text-zinc-400"
                  }`}
                  onClick={() => notifi(index)}
                >
                  {item.notification}
                </div>
              </div>
            ))
          ) : (
            <div className="flex  items-center space-x-[20px] py-3 px-[28px] hover:bg-zinc-700/50 font-bold">
              nothing here
            </div>
          )}
        </div>
      </div>
      <div
        className={`fixed w-full h-full top-0 left-0 ${!open && "hidden"}`}
        onClick={handleClick}
      ></div>
    </div>
  )
}
