"use client"
import { ProfileType } from "@/types/profileType"
import { Bell, Fingerprint } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { NavNotification } from "./NavNotification"
import { NavSigned } from "./NavSigned"

export function Profile({ email }: any) {
  const [data, setData] = useState<ProfileType>()
  const [notification, setNotification] = useState(false)
  const [signed, setSigned] = useState(false)

  useEffect(() => {
    async function call() {
      await fetch(`http://localhost:3000/api/user/${email}`)
        .then(res => res.json())
        .then(data => {
          console.log(data)
          setData(() => data.email[0])
        })
    }
    call()
  }, [])

  return (
    <div className="flex space-x-4 items-center justify-between p-1 ml-auto">
      <Link href={"/admin"} className="p-2 hover:bg-white/20 rounded-full">
        <Fingerprint className="" />
      </Link>
      <button
        className="p-[10px] hover:bg-white/20 rounded-full relative"
        onClick={() => setNotification(() => !notification)}
      >
        <Bell className="size-5" />
        <div className="absolute w-fit h-fit -top-1 -right-1">
          {data?.notifications !== undefined && data.notifications !== null ? (
            <p
              className={`${
                data.notifications.length <= 9 ? "w-8" : "w-10"
              } h-8 text-2xl m-auto scale-50 bg-teal-500 text-white rounded-full`}
            >
              {data.notifications.length <= 9 ? data.notifications.length : "9+"}
            </p>
          ) : (
            ""
          )}
        </div>
      </button>
      <button
        onClick={() => setSigned(() => !signed)}
        className="p-1 hover:bg-white/20 rounded-full"
      >
        {data?.email !== undefined && <img src={data.image} className="h-8 w-8 rounded-full " />}
      </button>
      {signed === true && data && <NavSigned click={() => setSigned(() => false)} user={data} />}
      {notification === true && data && (
        <NavNotification click={() => setNotification(() => !notification)} user={data} />
      )}
    </div>
  )
}
