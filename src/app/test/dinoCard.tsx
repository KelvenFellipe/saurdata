import { X } from "lucide-react"

export interface dinoType {
  data: {
    type: string
    family: string
    genus: string
    species: string[]
    img: string
    temporal: string
  }
}

export function DinoCard({ data }: dinoType) {
  return (
    <div className="flex relative bg-black max-w-[600px] rounded-xl m-auto text-zinc-400 p-4 text-lg">
      <X className="absolute right-1 top-1 size-7" />
      <img
        src={data.img}
        alt={data.genus}
        className="rounded-3xl object-cover h-[180px] w-[180px]"
      />
      <div className="grid grid-cols-2 grid-rows-4 h-[180px] w-[372px] items-center ml-4 ">
        <p className="col-span-2 text-2xl ">{data.genus}</p>
        <p className="col-span-2">{data.family}</p>
        <p className="col-span-2 flex">Species: {data.species.join(", ")}</p>
        <p className="col-span-2">Temporal range: {data.temporal} </p>
      </div>
      <p className="mt-3 hidden">
        industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when
        an unknown printer took a galley of type and scrambled it to make a type specimen book. It
        has survived not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with the release of
        Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
        software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
    </div>
  )
}
