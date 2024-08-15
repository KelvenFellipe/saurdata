"use client"

import { AlignCenter, AlignJustify, AlignLeft, AlignRight, Image, Italic, Type } from "lucide-react"

function NotebookComponent(){

  return(
    <div className="flex justify-center">
      <div className="w-[368px] h-[448px] rounded-xl shadow-md hover:shadow-2xl hover:duration-500 duration-500">
        <div className="bg-white w-[368px] h-8 m-auto text-center flex justify-center text-zinc-400 space-x-2 text-3xl rounded-t-xl p-1 ">
          <Type/>
          <Italic/>
          <AlignCenter/>
          <AlignJustify/>
          <AlignLeft/>
          <AlignRight/>
          <Image/>
        </div>
        
          <textarea placeholder="type something" className="text-xl text-zinc-900 bg-zinc-100 w-[368px] h-[416px] resize-none focus:outline-0 rounded-b-xl p-2"></textarea>
        
      </div>
    </div>
  )
}

export default NotebookComponent