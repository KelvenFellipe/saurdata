"use client"
import { SaurType } from "@/types/saurType"
import { BookOpenText, ExternalLink, Share } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { ButtonComponent } from "../global/ButtonComponent"
import { ImageCarousel } from "./ImageCarousel"
import { ShareButton } from "./ShareButton"
import { getTime } from "./TimeHook"

export function MiniSaurCard(props: SaurType) {
  const [share, setShare] = useState(false)
  const ImgArray = props.img.split(", ")
  const router = useRouter()

  return (
    <div
      key={props.id}
      className="flex flex-col text-base hover:bg-zinc-300/50 dark:hover:bg-zinc-800/50 duration-300 hover:duration-300 p-4 py-1.5 rounded-xl min-w-[200px] m-1 space-y-2 select-none"
    >
      <div className="flex flex-col md:flex-row md:items-center">
        <p className="text-lg font-bold flex-1 capitalize">{props.genus}</p>
        <div className="flex">
          <p className="text-xs text-zinc-700 dark:text-zinc-300 ">
            {props.type + "/" + props.family + " • " + getTime(props.added)}
          </p>
        </div>
      </div>
      <ImageCarousel Imgs={ImgArray} />
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
    </div>
  )
}
