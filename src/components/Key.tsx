import { FC } from "react"

interface KeyProps {
  keyName?: any
}

export const Key: FC<KeyProps> = ({keyName}) => {
  return(
    <div className="text-xl bg-white text-zinc-900 h-12 w-20 flex items-center justify-center rounded-md hover:opacity-9 m-[2px]">
      <div>{keyName}</div>
    </div>
  )
}

export const DoubleKey: FC<KeyProps> = ({keyName}) => {
  return(
    <div className="text-3xl bg-white text-zinc-900 h-[104px] w-12 flex items-center justify-center rounded-lg hover:opacity-90 m-1">
      <div>{keyName}</div>
    </div>
  )
}