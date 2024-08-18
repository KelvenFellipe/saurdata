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
      className=" bg-white text-zinc-400 h-12 w-20 flex items-center justify-center rounded-md
      hover:opacity-70 hover:shadow-md hover:duration-300 duration-300 m-[1px] dark:bg-black dark:hover:opacity-100 hover:text-black dark:hover:text-white"
    >
      {typeof KeyName === "string" ? (
        <div className="hover:scale-125 duration-300">{KeyName}</div>
      ) : (
        <KeyName className="size-5 hover:scale-125 duration-300" />
      )}
    </div>
  )
}

export const Sentence: FC<KeyProps> = ({ KeyName }) => {
  return (
    <div className="text-zinc-400 h-fit w-fit flex items-center justify-center rounded-md hover:duration-300 duration-300 m-[1px] transition ease-in-out delay-150 hover:text-black dark:hover:text-white">
      {typeof KeyName === "string" ? (
        <div className="text-xl">{KeyName}</div>
      ) : (
        <KeyName className="size-6" />
      )}
    </div>
  )
}
