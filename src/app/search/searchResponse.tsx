import { Search } from "lucide-react"
import Link from "next/link"
import { dinoType } from "../test/dinoCard"
import { returnData } from "../test/returnData"

interface test {
  data: dinoType
}

export const SearchResponse = ({ data }: test) => {
  const props = data
  console.log(data)

  return (
    <div>
      <div className="flex items-center space-x-1 hover:text-black dark:hover:text-white duration-300 hover:suration-300 ">
        <Link
          href={"/test"}
          onClick={() => returnData(data.genus)}
          className="flex transition ease-in-out"
        >
          <Search className="size-6 m-1" />
          <div>{data.genus}</div>
        </Link>
      </div>
    </div>
  )
}
