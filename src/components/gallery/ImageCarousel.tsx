"use client"
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"
import { useState } from "react"
import { ImageOVerlay } from "./ImageOverlay"

interface props {
  Imgs: string[]
}

export function ImageCarousel({ Imgs }: props) {
  const [open, setOpen] = useState(false)
  const [indexCount, setIndexCount] = useState(0)
  if (indexCount < 0) {
    setIndexCount(() => 0)
  }
  if (indexCount > Imgs.length - 1) {
    setIndexCount(() => Imgs.length - 1)
  }
  return (
    <div className="overflow-hidden relative rounded-xl select-none">
      <ChevronLeftIcon
        onClick={() => setIndexCount(indexCount - 1)}
        className={`absolute size-8 top-1/2 left-2 -translate-y-1/2 rounded-full bg-black/20 hover:bg-black/70 ease-in-out duration-300 z-30 text-white ${
          indexCount === 0 && "-translate-x-10"
        }`}
      />
      <ChevronRightIcon
        onClick={() => setIndexCount(indexCount + 1)}
        className={`absolute size-8 top-1/2 right-2 -translate-y-1/2 rounded-full bg-black/20 hover:bg-black/70 ease-in-out duration-300 z-30 text-white ${
          indexCount === Imgs.length - 1 && "translate-x-10"
        }`}
      />
      <div
        className="sm:w-screen-sm md:w-screen-md lg:w-screen-lg flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${indexCount * 100}%)` }}
      >
        {Imgs.map(item => (
          <img
            key={item.length}
            src={item}
            className={`object-cover aspect-video w-full cursor-pointer`}
            onClick={() => setOpen(() => true)}
          />
        ))}
      </div>
      {open && <ImageOVerlay src={Imgs[indexCount]} onClick={() => setOpen(() => false)} />}
    </div>
  )
}
