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
        <div className=" flex">
          <p className="text-xs text-zinc-300 ">
            {props.type + "/" + props.family + " • " + getTime(props.added)}
          </p>
          <p className="text-xs ">{}</p>
        </div>
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

export function getTime(added: any) {
  const created = new Date(added)
  const now = new Date()

  let difference = now.getTime() - created.getTime()

  let daysDifference = Math.floor(difference / 1000 / 60 / 60 / 24)
  difference -= daysDifference * 1000 * 60 * 60 * 24

  let hoursDifference = Math.floor(difference / 1000 / 60 / 60)
  difference -= hoursDifference * 1000 * 60 * 60

  let minutesDifference = Math.floor(difference / 1000 / 60)
  difference -= minutesDifference * 1000 * 60

  let secondsDifference = Math.floor(difference / 1000)

  // console.log(
  //   "difference = " +
  //     daysDifference +
  //     " day/s " +
  //     hoursDifference +
  //     " hour/s " +
  //     minutesDifference +
  //     " minute/s " +
  //     secondsDifference +
  //     " second/s "
  // )
  let result

  if (daysDifference > 0) {
    result = daysDifference === 1 ? daysDifference + " day ago" : daysDifference + " days ago"
  } else if (hoursDifference > 0) {
    result = hoursDifference === 1 ? hoursDifference + " hour ago" : hoursDifference + " hours ago"
  } else if (minutesDifference > 0) {
    result =
      minutesDifference === 1
        ? minutesDifference + " minute ago"
        : minutesDifference + " minutes ago"
  } else if (secondsDifference > 0) {
    result = "just added"
  }
  if (daysDifference === -1) result = "just added"
  return result
}