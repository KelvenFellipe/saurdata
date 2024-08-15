"use client"

import { Notch } from "@/components/Notch"
import { AlignCenter, AlignJustify, AlignLeft, AlignRight, Image, Italic, Type } from "lucide-react"

function Notebook(){

  return(
    <div className="bg-zinc-900 h-screen w-screen">
      <Notch/>
      <div className="flex justify-center m-auto">
        <div className="flex-col">
          <div className="w-[368px] h-[32px] rounded-xl bg-white text-3xl">
            <div className="bg-white w-[352px] h-8 m-auto text-center text-zinc-900 justify-center border-b-2 border-b-zinc-400">
              <div className="flex m-auto text-zinc-400 space-x-2">
                <Type/>
                <Italic/>
                <AlignCenter/>
                <AlignJustify/>
                <AlignLeft/>
                <AlignRight/>
                <Image/>
              </div>
            </div>
          </div>
          
          <div className="w-[368px] h-[h-10]">
            <div>
                <textarea className="bg-blue-700"></textarea>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Notebook