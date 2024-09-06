"use client"
import { Github } from "lucide-react"
import { signIn } from "next-auth/react"

export function GitSign() {
  return (
    <button
      onClick={() => signIn("github", { redirectTo: "/" })}
      type="submit"
      className="p-4 text-xl items-center justify-center bg-zinc-900 flex space-x-2 w-[300px] rounded-md"
    >
      <p>Sign in with GitHub</p>
      <Github className="size-8" />
    </button>
  )
}
