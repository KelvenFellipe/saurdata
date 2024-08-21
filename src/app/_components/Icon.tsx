import { LucideIcon } from "lucide-react"
import Link from "next/link"

export interface IconProps {
  IconTag: LucideIcon
  link: string
}

export function Icon({ IconTag, link }: IconProps) {
  return (
    <Link href={link}>
      <IconTag className="transition ease-in-out hover:scale-125 duration-300 hover:text-black dark:hover:text-white" />
    </Link>
  )
}

