import { trpc } from "@/connection/client/client"
import { Bell } from "lucide-react"
import { useEffect, useState } from "react"
import { NavNotification } from "./NavNotification"
import { ProfileType } from "@/types/schemaTypes"
import { cn } from "@/lib/utils"

export function NotificationIcon({
  user,
  mobile = false,
}: {
  user: ProfileType
  mobile?: boolean
}) {
  const [open, setOpen] = useState(false)
  const [count, setCount] = useState(0)
  const { data = [] } = trpc.getNotification.useQuery(user.id)

  useEffect(() => {
    setCount(() => data.length)
  })

  return (
    <div>
      <button
        className="p-[10px] hover:bg-zinc-300/50 dark:hover:bg-zinc-700/50 rounded-full relative ease-in-out duration-300"
        onClick={() => setOpen(() => true)}
      >
        <Bell className="size-5" />
        <div className="absolute w-fit h-fit -top-1 -right-1">
          <p
            className={cn(
              count <= 9 ? "w-8" : "w-10",
              count === 0 && "hidden",
              "h-8 text-2xl m-auto scale-50 bg-teal-500 text-white rounded-full"
            )}
          >
            {count <= 9 ? count : "9+"}
          </p>
        </div>
      </button>
      <div className="relative">
        {open && <NavNotification open={open} setOpen={setOpen} data={user} mobile={mobile} />}
      </div>
    </div>
  )
}
