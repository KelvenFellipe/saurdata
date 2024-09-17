import { Search } from "lucide-react"
import Link from "next/link"
import { saurType } from "../gallery/saurCard"

interface test {
  data: saurType
  click: any
}

export const SearchResponse = ({ data, click }: test) => {
  return (
    <div>
      <div className="flex p-1 px-3 items-center text-sm text-zinc-200 space-x-2 hover:bg-zinc-700/50 dark:hover:text-white">
        <Link
          href={`/gallery/${data.genus}`}
          onClick={click}
          className="flex transition ease-in-out items-center"
        >
          <div className="flex space-x-2 items-center">
            <Search className="size-5" />
            <p>{data.genus}</p>
          </div>
        </Link>
      </div>
    </div>
  )
}
