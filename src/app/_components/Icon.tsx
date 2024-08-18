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
      <IconTag className="transition ease-in-out hover:scale-125 duration-300 hover:text-black dark:hover:text-white" />
    </Link>
  )
}
export default Icon
