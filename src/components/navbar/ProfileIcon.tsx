import { useState } from "react"
import { NavSigned } from "./NavSigned"
import { ProfileType } from "@/types/schemaTypes"

export function ProfileIcon({ user, mobile = false }: { user: ProfileType; mobile?: boolean }) {
  const [signed, setSigned] = useState(false)

  return (
    <div>
      <button
        onClick={() => setSigned(() => true)}
        className="p-1 hover:bg-zinc-300/50 dark:hover:bg-zinc-700/50 rounded-full ease-in-out duration-300"
      >
        {user && user.image !== null && <img src={user.image} className="h-8 w-8 rounded-full " />}
      </button>
      <div className="relative">
        {signed === true && user && (
          <NavSigned open={signed} setOpen={setSigned} user={user} mobile={mobile} />
        )}
      </div>
    </div>
  )
}
