import { LucideIcon } from "lucide-react"
import Link from "next/link"

interface buttonProps {
  Icon1?: LucideIcon
  Icon2?: LucideIcon
  text?: string
  redirect?: string
  className?: string
  Click?: any
}
export function ButtonComponent({ text, Icon1, Icon2, redirect }: buttonProps) {
  return (
    <Link
      href={`/gallery/${redirect !== undefined ? redirect : ""}`}
      className={
        "flex space-x-2 bg-zinc-800 w-fit px-4 py-1.5 rounded-2xl text-sm hover:bg-zinc-700/50  items-center"
      }
    >
      {Icon1 !== undefined && <Icon1 className="size-5" />}
      <p>{text}</p>
      {Icon2 !== undefined && <Icon2 />}
    </Link>
  )
}
export function ButtonComponent2({ text, Icon1, Icon2, className, Click }: buttonProps) {
  return (
    <button
      className={`flex space-x-2 w-fit px-3 py-1.5 rounded-2xl text-sm items-center justify-center hover:bg-zinc-700/50 ${className}`}
      onClick={Click}
    >
      {Icon1 !== undefined && <Icon1 className="size-5" />}
      {text !== undefined && <p>{text}</p>}
      {Icon2 !== undefined && <Icon2 />}
    </button>
  )
}