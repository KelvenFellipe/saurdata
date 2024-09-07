"use client"
import { Bell } from "lucide-react"
import { useEffect, useState } from "react"
import { NavNotification } from "./NavNotification"
import { NavSigned } from "./NavSigned"

interface ProfileProps {
  email: any
}
export interface profileType {
  id: string
  name: string
  email: string
  emailVerified?: string
  image: string
  notifications: string[]
}

export function Profile({ email }: ProfileProps) {
  const [data, setData] = useState<profileType>()
  const [notification, setNotification] = useState(false)
  const [signed, setSigned] = useState(false)

  useEffect(() => {
    async function call() {
      await fetch(`http://localhost:3000/api/user/${email}`)
        .then(res => res.json())
        .then(data => {
          setData(() => data.email[0])
        })
    }
    call()
  }, [])

  return (
    <div className="flex space-x-4 items-center p-1 ml-auto">
      <button
        className="p-2 hover:bg-white/20 rounded-full relative"
        onClick={() => setNotification(() => !notification)}
      >
        <Bell className="size-5 " />
        <div className="absolute w-fit h-fit -top-2 -right-2">
          {data?.notifications !== undefined && data.notifications !== null ? (
            <p className={`w-8 h-8 text-2xl m-auto scale-50 bg-teal-500 text-white rounded-full`}>
              {data.notifications.length}
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
