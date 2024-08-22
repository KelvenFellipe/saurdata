import { Search, X } from "lucide-react"
import { useState } from "react"

interface responseProps {
  response: string
  data: {
    genus: string
  }
}

export const SearchResponse = ({ response, data }: responseProps) => {
  const [show, setShow] = useState(false)

  function toggleCard() {
    setShow(() => !show)
  }

  return (
    <div className="flex items-center space-x-1 hover:text-black dark:hover:text-white duration-300 hover:suration-300 ">
      {show == false && (
        <div onClick={toggleCard} className="flex transition ease-in-out">
          <Search className="size-6 m-1" />
          <div>{response}</div>
        </div>
      )}
      {show == true && (
        <div className="flex relative bg-black max-w-[600px] rounded-xl m-auto text-zinc-400 p-4 text-lg">
          <X onClick={toggleCard} className="absolute right-1 top-1 size-7" />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Triceratops_skull_frills.jpg/800px-Triceratops_skull_frills.jpg"
            alt="test"
            className="rounded-full object-cover h-[180px] w-[180px]"
          />
          <div className="grid grid-cols-2 grid-rows-4 h-[180px] w-[372px] items-center ml-4 ">
            <p className="col-span-2 text-2xl">{data.genus}</p>
            <p className="col-span-2">Ceratopsidae </p>
            <p className="col-span-2">Species: †T.horridus, †T.prorsus </p>
            <p className="col-span-2">Temporal range: Cretaceous, 68-66 Ma </p>
          </div>
          <p className="mt-3 hidden">
            industry. Lorem Ipsum has been the industry's standard dummy text ever since the
            1500s,when an unknown printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      )}
    </div>
  )
}
