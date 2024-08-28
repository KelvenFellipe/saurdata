import { Github } from "lucide-react"
import { signIn } from "../../../../auth"

export function GitHubSign() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn("github")
      }}
    >
      <button
        type="submit"
        className="p-4 text-3xl items-center justify-center bg-zinc-900 flex space-x-2 w-[400px] rounded-md"
      >
        <p>Sign in with GitHub</p>
        <Github className="size-8" />
      </button>
    </form>
  )
}
