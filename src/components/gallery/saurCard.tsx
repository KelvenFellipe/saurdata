import { SaurType } from "@/types/saurType"
import { BookOpenText, ExternalLink, X } from "lucide-react"
import Link from "next/link"
import { ButtonComponent } from "../global/ButtonComponent"

export function SaurCard(props: SaurType) {
  return (
    <div className="flex flex-col dark:bg-black bg-white max-w-[1000px] rounded-xl m-auto text-zinc-400 p-4 text-lg relative ">
      <Link href={"/gallery"}>
        <X className="absolute right-1 top-1 size-7" />
      </Link>
      <div key={props.id} className="flex">
        <Link href={props.img}>
          <img
            src={props.img}
            alt={props.genus}
            className="rounded-3xl object-center max-h-[500px] max-w-[500px] hover:scale-105 transition ease-in-out duration-300"
          />
        </Link>
        <div className="grid grid-cols-2 grid-rows-4 h-[180px] w-[392px] items-center ml-4 ">
          <p className="col-span-2 text-2xl ">{props.genus}</p>
          <p className="col-span-2">{props.family}</p>
          <p className="col-span-2 flex">
            Species:
            <div>
              {props.species.split(", ").map(item => (
                <p>{item}</p>
              ))}
            </div>
          </p>
          <p className="col-span-2">Temporal range: {props.temporal} million years</p>
        </div>
      </div>
      <p className="mt-3 flex justify-stretch h-max ">{props.description}</p>
    </div>
  )
}

export function MiniSaurCard(props: SaurType) {
  return (
    <div className="flex flex-col text-base hover:bg-zinc-800/50 duration-300 hover:duration-300 p-4 py-1.5 rounded-xl w-fit h-fit m-1 space-y-2 ">
      <div className="flex items-center">
        <p className="text-lg font-bold flex-1">
          {props.genus.charAt(0).toUpperCase() + props.genus.slice(1)}
        </p>
        <p className="text-xs text-zinc-300 ">{props.type + "/" + props.family}</p>
      </div>
      <img
        src={props.img}
        alt={props.genus}
        className="w-[600px] h-[400px] rounded-xl object-cover "
      />
      <div className="flex space-x-2">
        <ButtonComponent Icon1={ExternalLink} text={"About"} redirect={props.genus} />
        <ButtonComponent Icon1={BookOpenText} text={"Articles"} />
      </div>
    </div>
  )
}
