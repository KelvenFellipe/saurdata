"use client"
import { Bell } from "lucide-react"
import { useSession } from "next-auth/react"
import { useState } from "react"
import { MiniNavSearch } from "./MiniNavSearch"
import { NavNotification } from "./NavNotification"
import { NavSigned } from "./NavSigned"

export function Profile() {
  const [notification, setNotification] = useState(false)
  const [signed, setSigned] = useState(false)
  const [count, setCount] = useState(0)
  const { data, status } = useSession()

  if (data) {
    const userData = data?.user
    userData.notifications.forEach(item => item.read === false && setCount(() => count + 1))
    return (
      <div className="flex space-x-4 items-center justify-end p-1 flex-1">
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
          {userData.image !== null && (
            <img src={userData.image} className="h-8 w-8 rounded-full " />
          )}
        </button>
        {signed === true && userData && (
          <NavSigned click={() => setSigned(() => false)} user={userData} />
        )}
        {notification === true && userData && (
          <NavNotification click={() => setNotification(() => false)} data={userData} />
        )}
      </div>
    )
  }
}
