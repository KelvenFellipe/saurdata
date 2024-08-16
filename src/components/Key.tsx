import { LucideIcon } from "lucide-react"
import { FC } from "react"

interface KeyProps {
  KeyName: LucideIcon | string
  click?: any
}

export const Key: FC<KeyProps> = ({ KeyName, click }) => {
  return (
    <div
      onClick={click}
      className=" bg-white text-zinc-900 h-12 w-20 flex items-center justify-center rounded-md
      hover:opacity-70 hover:shadow-md hover:duration-500 duration-500 m-[1px] dark:bg-black dark:text-zinc-200 dark:hover:opacity-40"
    >
      {typeof KeyName === "string" ? <div>{KeyName}</div> : <KeyName className="size-5" />}
    </div>
  )
}
