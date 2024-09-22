"use client"
import { Bell, Fingerprint } from "lucide-react"
import { useSession } from "next-auth/react"
import Link from "next/link"
import { useState } from "react"
import { NavNotification } from "./NavNotification"
import { NavSigned } from "./NavSigned"

export function Profile() {
  const [notification, setNotification] = useState(false)
  const [signed, setSigned] = useState(false)
  const { data, status } = useSession()
  if (data) {
    const userData = data?.user

    return (
      <div className="flex space-x-4 items-center justify-between p-1 ml-auto">
        {userData.role === "ADMIN" && (
          <Link
            href={"/admin"}
            className="p-2 hover:bg-zinc-700/50 rounded-full ease-in-out duration-300"
          >
            <Fingerprint className="" />
          </Link>
        )}
        <button
          className="p-[10px] hover:bg-zinc-700/50 rounded-full relative ease-in-out duration-300"
          onClick={() => setNotification(() => !notification)}
        >
          <Bell className="size-5" />
          <div className="absolute w-fit h-fit -top-1 -right-1">
            {userData.notifications !== null && (
              <p
                className={`${
                  userData.notifications.length <= 9 ? "w-8" : "w-10"
                } h-8 text-2xl m-auto scale-50 bg-teal-500 text-white rounded-full ${
                  userData.notifications.length === 0 && "hidden"
                }`}
              >
                {userData.notifications.length <= 9 ? userData.notifications.length : "9+"}
              </p>
            )}
          </div>
        </button>
        <button
          onClick={() => setSigned(() => !signed)}
          className="p-1 hover:bg-zinc-700/50 rounded-full ease-in-out duration-300"
        >
          {userData.image !== null && (
            <img src={userData.image} className="h-8 w-8 rounded-full " />
          )}
        </button>
        {signed === true && userData && (
          <NavSigned click={() => setSigned(() => false)} user={userData} opened={true} />
        )}
        {notification === true && userData !== null && (
          <NavNotification
            click={() => setNotification(() => false)}
            data={userData}
            opened={true}
          />
        )}
      </div>
    )
  }
}
