import { LucideIcon } from "lucide-react"
import Link from "next/link"

interface buttonProps {
  Icon1?: LucideIcon
  Icon2?: LucideIcon
  text?: string
  redirect?: string
}
export default function ButtonComponent({ text, Icon1, Icon2, redirect }: buttonProps) {
  return (
    <Link
      href={`/gallery/${redirect !== undefined ? redirect : ""}`}
      className="flex space-x-2 bg-zinc-800 w-fit px-4 py-1.5 rounded-2xl text-sm hover:bg-zinc-700/50 hover:text-zinc-300 items-center"
    >
      {Icon1 !== undefined && <Icon1 className="size-5" />}
      <p>{text}</p>
      {Icon2 !== undefined && <Icon2 />}
    </Link>
  )
}
