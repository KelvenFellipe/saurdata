import { X } from "lucide-react"
import Link from "next/link"

export interface saurType {
  type: string
  family: string
  genus: string
  species: string[]
  img: string
  temporal: string
  id: string
}

export function SaurCard(props: saurType) {
  console.log(props)
  return (
    <div
      key={props.id}
      className="flex relative bg-black max-w-[600px] rounded-xl m-auto text-zinc-400 p-4 text-lg"
    >
      <Link href={"/search"}>
        <X className="absolute right-1 top-1 size-7" />
      </Link>
      <img
        src={props.img}
        alt={props.genus}
        className="rounded-3xl object-cover h-[180px] w-[180px]"
      />
      <div className="grid grid-cols-2 grid-rows-4 h-[180px] w-[372px] items-center ml-4 ">
        <p className="col-span-2 text-2xl ">{props.genus}</p>
        <p className="col-span-2">{props.family}</p>
        <p className="col-span-2 flex">Species: {props.species.join(", ")}</p>
        <p className="col-span-2">Temporal range: {props.temporal} </p>
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
