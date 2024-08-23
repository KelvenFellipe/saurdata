import { Search } from "lucide-react"
import { useState } from "react"
import { DinoCard, dinoType } from "../test/dinoCard"

export const SearchResponse = ({ data }: dinoType) => {
  const [show, setShow] = useState(false)

  function toggleCard() {
    setShow(() => !show)
  }

  return (
    <div>
      <div className="flex items-center space-x-1 hover:text-black dark:hover:text-white duration-300 hover:suration-300 ">
        {show == false && (
          <div onClick={toggleCard} className="flex transition ease-in-out">
            <Search className="size-6 m-1" />
            <div>{data.genus}</div>
          </div>
        )}
      </div>
      <DinoCard data={data} />
    </div>
  )
}
