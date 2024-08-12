import { FC } from "react"

interface KeyProps {
  keyName?: string
}

const Key: FC<KeyProps> = ({keyName}) => {
  return(
    <div className="text-3xl p-3">
      <div>{keyName}</div>
    </div>
  )
}



export default Key