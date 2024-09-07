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
  description: string
}

export function SaurCard(props: saurType) {
  return (
    <div className="flex flex-col dark:bg-black bg-white max-w-[620px] rounded-xl m-auto text-zinc-400 p-4 text-lg relative ">
      <Link href={"/gallery"}>
        <X className="absolute right-1 top-1 size-7" />
      </Link>
      <div key={props.id} className="flex">
        <Link href={props.img}>
          <img
            src={props.img}
            alt={props.genus}
            className="rounded-3xl object-cover h-[180px] w-[180px] hover:scale-105 transition ease-in-out duration-300"
          />
        </Link>
        <div className="grid grid-cols-2 grid-rows-4 h-[180px] w-[392px] items-center ml-4 ">
          <p className="col-span-2 text-2xl ">{props.genus}</p>
          <p className="col-span-2">{props.family}</p>
          <p className="col-span-2 flex">Species: {props.species.join(", ")}</p>
          <p className="col-span-2">Temporal range: {props.temporal}</p>
        </div>
      </div>
      {props.description !== null && (
        <p className="mt-3 flex justify-stretch h-max ">Description: {props.description}</p>
      )}
    </div>
  )
}

export function MiniSaurCard(props: saurType) {
  return (
    <Link href={`/gallery/${props.genus}`} key={props.id}>
      <div className="flex flex-col text-center justify-center bg-black p-2 rounded-xl min-w-fit min-h-fit m-1">
        <img
          src={props.img}
          alt={props.genus}
          className="w-[160px] h-[160px] rounded-xl object-cover"
        />
        <p className="pt-1">{props.genus}</p>
      </div>
    </Link>
  )
}
