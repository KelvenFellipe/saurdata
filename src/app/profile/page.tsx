"use client"
import { ButtonComponent } from "@/components/global/ButtonComponent"
import { Loading } from "@/components/global/Loading"
import { Pencil } from "lucide-react"
import { useSession } from "next-auth/react"

function profile() {
  const user = useSession().data?.user
  if (user === undefined) return <Loading />
  //redirect("/")
  return (
    <div className="select-none grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-auto max-w-screen p-2 space-x-4 rounded-lg mt-4 bg-zinc-800/50">
      <div className="flex shrink-0">
        {user.image == null ? null : (
          <img src={user.image} alt="User Avatar" className="w-40 h-40 rounded-full " />
        )}
      </div>
      <div className="flex flex-col w-full">
        <p>{user.name}</p>
        <p>{user.email}</p>
        <div className="flex mt-auto justify-items-end">
          <ButtonComponent Icon1={Pencil} text="Edit Profile" />
        </div>
      </div>
    </div>
  )
}
export default profile
