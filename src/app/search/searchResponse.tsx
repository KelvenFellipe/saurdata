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
    setShow(!show)
  }

  return (
    <div
      className="flex items-center space-x-1 hover:text-black dark:hover:text-white duration-300 hover:suration-300 "
      onClick={toggleCard}
    >
      {show == false && (
        <div className="flex transition ease-in-out">
          <Search className="size-6 m-1" />
          <div>{response}</div>
        </div>
      )}
      {show == true && (
        <div className="relative bg-black max-w-[600px] rounded-xl m-auto text-zinc-400 p-3 text-lg">
          <div onClick={toggleCard}>
            <X className="absolute right-1 top-1 size-7" />
          </div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Triceratops_skull_frills.jpg/800px-Triceratops_skull_frills.jpg"
            alt="test"
            className="rounded-full object-cover h-[160px] w-[160px] absolute left-3"
          />
          <div className="grid grid-cols-3 grid-rows-4 justify-center m-auto h-[160px] items-center ">
            <p className="col-span-3 text-2xl text-center">{data.genus}</p>
            <p className="col-start-2 col-span-2">Ceratopsidae </p>
            <p className="col-start-2 col-span-2">Species: †T.horridus, †T.prorsus </p>
            <p className="col-start-2 col-span-2">Temporal range: Cretaceous, 68-66 Ma </p>
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
