"use client"
import { signIn } from "next-auth/react"
import { FcGoogle } from "react-icons/fc"

export function GoogleSign() {
  return (
    <button
      onClick={() => signIn("google", { redirectTo: "/" })}
      type="submit"
      className="p-4 text-xl text-black items-center justify-center bg-white flex space-x-2 w-[300px] rounded-md"
    >
      <p>Sign in with Google</p>
      <FcGoogle className="size-8" />
    </button>
  )
}
