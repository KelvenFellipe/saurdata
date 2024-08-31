import { CircleUserRound } from "lucide-react"
import Link from "next/link"

export function LoginButton() {
  return (
    <div>
      <Link href={"/login"}>
        <CircleUserRound className=" transition ease-in-out hover:scale-125 duration-300 hover:text-black dark:hover:text-white size-8" />
      </Link>
    </div>
  )
}

export function LoggedAvatar(props: string) {
  return (
    <div>
      <Link href={"/profile"}>
        <img
          src={props}
          className=" transition ease-in-out hover:scale-125 duration-300 hover:text-black dark:hover:text-white size-8"
        />
      </Link>
    </div>
  )
}
