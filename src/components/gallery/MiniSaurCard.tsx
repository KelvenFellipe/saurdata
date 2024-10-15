"use client"
import { SaurType } from "@/types/saurType"
import { BookOpenText, ChevronLeftIcon, ChevronRightIcon, ExternalLink, Share } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { ButtonComponent } from "../global/ButtonComponent"
import { ImageOVerlay } from "./ImageOverlay"
import { ShareButton } from "./ShareButton"
import { getTime } from "./TimeHook"

export function MiniSaurCard(props: SaurType) {
  const [indexCount, setIndexCount] = useState(0)
  const [open, setOpen] = useState(false)
  const [share, setShare] = useState(false)
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
      className="flex flex-col text-base hover:bg-zinc-300/50 dark:hover:bg-zinc-800/50 duration-300 hover:duration-300 p-4 py-1.5 rounded-xl min-w-[200px] m-1 space-y-2 select-none"
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
          className="sm:w-screen-sm md:w-screen-md lg:w-screen-lg flex transition-transform ease-out duration-500"
          style={{ transform: `translateX(-${indexCount * 100}%)` }}
        >
          {ImgArray.map(item => (
            <img
              key={item.length}
              src={item}
              className={`object-cover aspect-video w-full cursor-pointer`}
              onClick={() => setOpen(() => true)}
            />
          ))}
        </div>
      </div>
      <div className="flex space-x-2 relative">
        <ButtonComponent
          Icon1={ExternalLink}
          text={"About"}
          Click={() => router.push(`/gallery/${props.genus}`)}
        />
        <ButtonComponent Icon1={BookOpenText} text={"Articles"} />
        <div className="flex-1 justify-end flex relative">
          <ButtonComponent
            Icon1={Share}
            className="rounded-full dark:hover:bg-zinc-800 hover:bg-zinc-300 p-2"
            Click={() => setShare(true)}
          />

          {share === true && (
            <ShareButton
              clickCopy={() =>
                navigator.clipboard.writeText(`https://saurdata.vercel.app/gallery/${props.genus}`)
              }
              click={() => setShare(false)}
            />
          )}
        </div>
      </div>
      {open && <ImageOVerlay src={ImgArray[indexCount]} onClick={() => setOpen(() => false)} />}
    </div>
  )
}
