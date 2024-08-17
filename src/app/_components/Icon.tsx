import { LucideIcon } from "lucide-react"
import Link from "next/link"
import { FC } from "react"

export interface IconProps {
  IconTag: LucideIcon
  link: string
}

const Icon: FC<IconProps> = ({ IconTag, link }) => {
  return (
    <Link href={link}>
      <IconTag className="transition ease-in-out delay-150 hover:scale-150 duration-300 hover:text-zinc-900 dark:hover:text-zinc-100" />
    </Link>
  )
}
export default Icon
