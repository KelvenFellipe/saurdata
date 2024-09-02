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
      <div className="flex items-center space-x-1 hover:text-black dark:hover:text-white duration-300 hover:suration-300 ">
        <Link
          href={`/gallery/${data.genus}`}
          onClick={click()}
          className="flex transition ease-in-out items-center"
        >
          <Search className="size-6 m-1" />
          <div>{data.genus}</div>
        </Link>
      </div>
    </div>
  )
}
