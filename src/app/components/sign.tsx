"use client"
import { useSession } from "next-auth/react"

export function Sign({
  children1,
  children2,
}: {
  children1: React.ReactNode
  children2: React.ReactNode
}) {
  const { data: session } = useSession()

  return (
    <div className="absolute right-2 p-3 top-2 bg-black h-[56px] items-center flex rounded-xl text-zinc-400">
      {session?.user?.image && session?.user?.name ? (
        <div>{children1}</div>
      ) : (
        <div>{children2}</div>
      )}
    </div>
  )
}
