"use client"
import { trpc } from "@/connection/client/client"
import { NotificationType, ProfileType } from "@/types/profileType"
import { EllipsisVertical } from "lucide-react"
import { useEffect, useState } from "react"
import { NotificationOptions } from "./NotificationOptions"

interface props {
  click: any
  data: ProfileType
  mobile?: boolean
}
export function NavNotification({ click, data, mobile = false }: props) {
  const [open, setOpen] = useState(false)
  const [options, setOptions] = useState(false)
  const [Index, setIndex] = useState(0)
  const { data: notificatioArray = [], isSuccess } = trpc.getNotification.useQuery(data.id)
  const [notifications, setNotifications] = useState<Array<NotificationType>>([])

  const utils = trpc.useContext()
  const update = trpc.updateNotification.useMutation({
    onSettled: () => {
      utils.getNotification.invalidate()
    },
  })

  useEffect(() => {
    setNotifications(notificatioArray[0].notification)
    setOpen(() => true)
  }, [isSuccess])

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
    <div className={`absolute z-[10] select-none`}>
      <div
        className={`fixed z-[20] w-[500px] top-[56px]  bg-zinc-100 dark:bg-zinc-800 text-black dark:text-white text-sm rounded-xl transition-[max-height]
           duration-1000 overflow-hidden shadow-md shadow-black/40 dark:shadow-black ${
             mobile ? "right-4" : "right-[64px]"
           } ${!open ? "max-h-0" : "max-h-full"} `}
      >
        <div className="my-2 space-y-1 overflow-auto max-h-[380px] w-[500px] scrollbar-none hover:scrollbar-thin pr-[10px] hover:pr-0 scrollbar-track-zinc-800 scrollbar-thumb-[#111316]">
          {notifications !== null && notifications.length !== 0 ? (
            notifications.map((item, index) => (
              <div className="flex items-center " key={index}>
                <div
                  className={`flex flex-row relative justify-between items-center space-x-[20px] pl-4 px-1 py-1 hover:bg-zinc-300/50 dark:hover:bg-zinc-700/50 font-bold ease-in-out duration-300 w-full ${
                    item.read && "text-zinc-400"
                  }`}
                  onClick={() => notifi(index)}
                >
                  {!item.read && (
                    <div className="w-1 h-[44px] rounded-sm bg-teal-500 absolute left-[2px]"></div>
                  )}
                  {item.notification}
                  <div
                    className="text-white rounded-full active:bg-zinc-700 w-10 h-10 p-1 flex justify-center items-center cursor-pointer"
                    onClick={() => (setOptions(true), setIndex(index))}
                  >
                    <EllipsisVertical className="size-6 " />
                  </div>
                  {options && Index === index && (
                    <NotificationOptions onClick={() => setOptions(false)} />
                  )}
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
        className={`fixed w-full h-full top-0 left-0 ${!open && "hidden"}`}
        onClick={handleClick}
      />
    </div>
  )
}
