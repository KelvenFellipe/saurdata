import { FC } from "react"

interface KeyProps {
  keyName?: any
}

const Key: FC<KeyProps> = ({keyName}) => {
  return(
    <div className="text-3xl bg-white text-zinc-900 h-12 w-12 flex items-center justify-center rounded-lg hover:opacity-90 m-1">
      <div className="">{keyName}</div>
    </div>
  )
}



export default Key