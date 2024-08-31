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
//  <form
//         action={async () => {
//           "use server"
//           await signIn("github")
//         }}
//       >
//         <button type="submit" className="flex">
//           <LogIn className="size-5 m-auto" />
//         </button>
//       </form>
//       <User className="size-8" />
