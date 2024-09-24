"use client"
import { Pencil } from "lucide-react"
import { useSession } from "next-auth/react"
import { redirect } from "next/navigation"

function profile() {
  const user = useSession().data?.user
  if (user === undefined) return redirect("/")

  return (
    <div className="select-none flex m-auto bg-zinc-800 w-fit p-4 space-x-4 rounded-lg mt-4">
      <div className="relative flex">
        {user.image == null ? null : (
          <img src={user.image} alt="User Avatar" className="w-40 h-40 rounded-xl " />
        )}
        <div>
          <Pencil className="size-3 absolute top-1 right-1 " />
        </div>
      </div>
      <div>
        <div className="flex items-center">
          <p>{user.name}</p>
          <Pencil className="size-3" />
        </div>
        <p>{user.email}</p>
      </div>
    </div>
  )
}
export default profile
