import { LogIn, User } from "lucide-react"
import { signIn } from "../../../auth"

export function SignIn() {
  return (
    <div className="flex items-center space-x-2">
      <form
        action={async () => {
          "use server"
          await signIn("github")
        }}
      >
        <button type="submit">
          <LogIn className="size-5" />
        </button>
      </form>
      <User className="size-8" />
    </div>
  )
}
