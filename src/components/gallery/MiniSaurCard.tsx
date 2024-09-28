"use client"
import { SaurType } from "@/types/saurType"
import {
  BookOpenText,
  ChevronLeftIcon,
  ChevronRightIcon,
  ExternalLink,
  Share,
  XIcon,
} from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { ButtonComponent } from "../global/ButtonComponent"
import { getTime } from "./TimeHook"

export function MiniSaurCard(props: SaurType) {
  const [indexCount, setIndexCount] = useState(0)
  const [open, setOpen] = useState(false)
  const ImgArray = props.img.split(", ")
  const router = useRouter()

  if (indexCount < 0) {
    setIndexCount(() => 0)
  }
  if (indexCount > ImgArray.length - 1) {
    setIndexCount(() => ImgArray.length - 1)
  }
  return (
    <div
      key={props.id}
      className="flex flex-col text-base hover:bg-zinc-300/50 dark:hover:bg-zinc-800/50 duration-300 hover:duration-300 p-4 py-1.5 rounded-xl  m-1 space-y-2 select-none"
    >
      <div className="flex flex-col md:flex-row md:items-center">
        <p className="text-lg font-bold flex-1">
          {props.genus.charAt(0).toUpperCase() + props.genus.slice(1) + ", " + props.temporal}
        </p>
        <div className=" flex">
          <p className="text-xs text-zinc-700 dark:text-zinc-300 ">
            {props.type + "/" + props.family + " • " + getTime(props.added)}
          </p>
        </div>
      </div>
      <div className="overflow-hidden relative rounded-xl">
        <ChevronLeftIcon
          onClick={() => setIndexCount(indexCount - 1)}
          className={`absolute size-8 top-1/2 left-2 -translate-y-1/2 rounded-full bg-black/20 hover:bg-black/70 ease-in-out duration-300 z-30 text-white ${
            indexCount === 0 && "-translate-x-10"
          }`}
        />
        <ChevronRightIcon
          onClick={() => setIndexCount(indexCount + 1)}
          className={`absolute size-8 top-1/2 right-2 -translate-y-1/2 rounded-full bg-black/20 hover:bg-black/70 ease-in-out duration-300 z-30 text-white ${
            indexCount === ImgArray.length - 1 && "translate-x-10"
          }`}
        />
        <div
          className="sm:w-screen-sm md:w-screen-md lg:w-screen-lg h-[calc(100vh/2.3)] flex transition-transform ease-out duration-500"
          style={{ transform: `translateX(-${indexCount * 100}%)` }}
        >
          {ImgArray.map(item => (
            <img
              key={item.length}
              src={item}
              className={`aspect-video object-cover cursor-pointer`}
              onClick={() => setOpen(() => true)}
            />
          ))}
        </div>
      </div>
      <div className="flex space-x-2">
        <ButtonComponent
          Icon1={ExternalLink}
          text={"About"}
          Click={() => router.push(`/gallery/${props.genus}`)}
        />
        <ButtonComponent Icon1={BookOpenText} text={"Articles"} />
        <div className="flex-1 justify-end flex">
          <ButtonComponent Icon1={Share} className="rounded-full hover:bg-zinc-800 p-2" />
        </div>
      </div>
      {open && (
        <div className="fixed z-[50] no-doc-scroll">
          <img
            src={ImgArray[indexCount]}
            className="fixed z-40 max-h-screen max-w-screen-xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
          <button
            className=" fixed z-[200] right-6 top-6 bg-black/20 hover:bg-black/70 ease-in-out duration-300 rounded-full h-10 w-10 items-center justify-center flex"
            onClick={() => setOpen(() => false)}
          >
            <XIcon className="size-8" />
          </button>
          <div className="fixed w-full h-full top-0 left-0 backdrop-blur-lg bg-black/80"></div>
        </div>
      )}
    </div>
  )
}
