import { Search } from "lucide-react"
import Link from "next/link"
import { saurType } from "../../components/gallery/saurCard"

interface test {
  data: saurType
  click: Function
}

export const SearchResponse = ({ data, click }: test) => {
  return (
    <div>
      <div className="flex p-1 items-center text-xl text-zinc-400 space-x-2 hover:text-black dark:hover:text-white">
        <Link
          href={`/gallery/${data.genus}`}
          onClick={click()}
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
