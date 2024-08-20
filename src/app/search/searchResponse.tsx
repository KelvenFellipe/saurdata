import { Search } from "lucide-react"

interface responseProps {
  response: string
}

export const SearchResponse = ({ response }: responseProps) => {
  return (
    <div className="flex items-center space-x-1 hover:text-black dark:hover:text-white duration-300 hover:suration-300 ">
      <Search className="size-6 m-1" />
      <p className=" transition ease-in-out">{response}</p>
    </div>
  )
}
