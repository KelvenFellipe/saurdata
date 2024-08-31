"use client"
import { useSession } from "next-auth/react"
import UserAvatar from "../../components/login/userAvatar"

export function Session({ children }: { children: React.ReactNode }) {
  const { data: session } = useSession()

  return <div>{session !== null ? <UserAvatar {...session?.user} /> : <div>{children}</div>}</div>
}
