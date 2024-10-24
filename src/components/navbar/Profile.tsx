"use client"
import { trpc } from "@/connection/client/client"
import { NotificationType, ProfileType } from "@/types/profileType"
import { Bell } from "lucide-react"
import { useEffect, useState } from "react"
import { MiniNavSearch } from "./MiniNavSearch"
import { NavNotification } from "./NavNotification"
import { NavSigned } from "./NavSigned"

export function Profile({ user }: { user: ProfileType }) {
  const [notification, setNotification] = useState(false)
  const [signed, setSigned] = useState(false)
  const [count, setCount] = useState(0)
  const { data = [] } = trpc.getNotification.useQuery(user.id)
  const [noti, setNoti] = useState<Array<NotificationType>>(user.notifications)

  useEffect(() => {
    if (data[0]) setNoti(data[0].notification)
  })

  useEffect(() => {
    setCount(noti.filter(item => item.read === false).length)
  }, [noti])

  return (
    <div className="flex space-x-4 items-center justify-end p-1 flex-1 select-none">
      <MiniNavSearch />

      <button
        className="p-[10px] hover:bg-zinc-300/50 dark:hover:bg-zinc-700/50 rounded-full relative ease-in-out duration-300"
        onClick={() => setNotification(() => !notification)}
      >
        <Bell className="size-5" />
        <div className="absolute w-fit h-fit -top-1 -right-1">
          <p
            className={`${
              count <= 9 ? "w-8" : "w-10"
            } h-8 text-2xl m-auto scale-50 bg-teal-500 text-white rounded-full ${
              count === 0 && "hidden"
            }`}
          >
            {count <= 9 ? count : "9+"}
          </p>
        </div>
      </button>
      <button
        onClick={() => setSigned(() => true)}
        className="p-1 hover:bg-zinc-300/50 dark:hover:bg-zinc-700/50 rounded-full ease-in-out duration-300"
      >
        {user && user.image !== null && <img src={user.image} className="h-8 w-8 rounded-full " />}
      </button>
      {signed === true && user && <NavSigned click={() => setSigned(() => false)} user={user} />}
      {notification === true && user && (
        <NavNotification click={() => setNotification(() => false)} data={user} />
      )}
    </div>
  )
}

