import { LogOut } from "lucide-react"
import { User } from "next-auth"
import Link from "next/link"
import { signOut } from "../../../auth"

export function SignOut(props: User | null) {
  if (props == null) return null
  return (
    <div className="flex items-center space-x-2">
      {props.image == null || props.name == null ? null : (
        <Link href={"/profile"}>
          <img className="rounded-xl w-[36px]" title={props?.name} src={props?.image} />
        </Link>
      )}

      <form
        action={async () => {
          "use server"
          await signOut({ redirectTo: "/" })
        }}
      >
        <button type="submit" className="flex">
          <LogOut className="size-5" type="submit" />
        </button>
      </form>
    </div>
  )
}
