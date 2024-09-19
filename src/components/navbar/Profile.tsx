"use client"
import { trpc } from "@/connection/client/client"
import { Bell, Fingerprint } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { NavNotification } from "./NavNotification"
import { NavSigned } from "./NavSigned"

export function Profile({ email }: any) {
  const [notification, setNotification] = useState(false)
  const [signed, setSigned] = useState(false)
  const { data: userData = [] } = trpc.getUsers.useQuery(email)

  if (userData)
    return (
      <div className="flex space-x-4 items-center justify-between p-1 ml-auto">
        <Link href={"/admin"} className="p-2 hover:bg-white/20 rounded-full">
          <Fingerprint className="" />
        </Link>
        {userData.map(user => (
          <>
            <button
              className="p-[10px] hover:bg-white/20 rounded-full relative"
              onClick={() => setNotification(() => !notification)}
            >
              <Bell className="size-5" />
              <div className="absolute w-fit h-fit -top-1 -right-1">
                {user.notifications !== null && (
                  <p
                    className={`${
                      user.notifications.length <= 9 ? "w-8" : "w-10"
                    } h-8 text-2xl m-auto scale-50 bg-teal-500 text-white rounded-full ${
                      user.notifications.length === 0 && "hidden"
                    }`}
                  >
                    {user.notifications.length <= 9 ? user.notifications.length : "9+"}
                  </p>
                )}
              </div>
            </button>
            <button
              onClick={() => setSigned(() => !signed)}
              className="p-1 hover:bg-white/20 rounded-full"
            >
              {user.image !== null && <img src={user.image} className="h-8 w-8 rounded-full " />}
            </button>
            {signed === true && user && (
              <NavSigned click={() => setSigned(() => false)} user={user} />
            )}
            {notification === true && user !== null && (
              <NavNotification click={() => setNotification(() => !notification)} data={user} />
            )}
          </>
        ))}
      </div>
    )
}
