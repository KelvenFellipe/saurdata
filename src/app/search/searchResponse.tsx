import { Search } from "lucide-react"
import { FC } from "react"

interface responseProps {
  response: string
}

export const SearchResponse: FC<responseProps> = ({ response }) => {
  return (
    <div className="flex space-x-2 items-center ">
      <Search className="size-6" />
      <p>{response}</p>
    </div>
  )
}
