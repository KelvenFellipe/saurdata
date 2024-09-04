import { LogIn, User } from "lucide-react"
import Link from "next/link"

export function SignIn() {
  return (
    <Link href={"/login"}>
      <div className="flex items-center space-x-2">
        <LogIn className="size-5 m-auto" />
        <User className="size-8" />
      </div>
    </Link>
  )
}
