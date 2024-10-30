import { trpc } from "@/connection/client/client"
import { NotificationType, ProfileType } from "@/types/profileType"
import { Bell } from "lucide-react"
import { useEffect, useState } from "react"
import { NavNotification } from "./NavNotification"

export function NotificationIcon({
  user,
  mobile = false,
}: {
  user: ProfileType
  mobile?: boolean
}) {
  const [count, setCount] = useState(0)
  const [noti, setNoti] = useState<Array<NotificationType>>(user.notifications)
  const { data = [] } = trpc.getNotification.useQuery(user.id)
  const [notification, setNotification] = useState(false)

  useEffect(() => {
    if (data[0]) setNoti(data[0].notification)
  })

  useEffect(() => {
    setCount(noti.filter(item => item.read === false).length)
  }, [noti])

  return (
    <div>
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
      <div className="relative">
        {notification === true && user && (
          <NavNotification click={() => setNotification(() => false)} data={user} mobile={mobile} />
        )}
      </div>
    </div>
  )
}
