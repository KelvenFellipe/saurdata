import Link from "next/link"
import { FC } from "react"

interface IconProps{
  iconTag: any
  link: string
}

const Icon: FC<IconProps> = ({iconTag, link}) => {
  return(
    <Link href={link}>
      <div className="transition ease-in-out delay-150 hover:scale-150 duration-300 hover:text-zinc-900">{iconTag}</div>
    </Link>
  )
}
export default Icon