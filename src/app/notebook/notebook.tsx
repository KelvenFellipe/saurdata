"use client"

import { AlignCenter, AlignJustify, AlignLeft, AlignRight, Image, Italic, Type } from "lucide-react"

function NotebookComponent(){

  return (
    <div className="flex justify-center m-auto">
      <div className="h-[448px] w-[368px] rounded-xl shadow-md hover:shadow-2xl hover:duration-500 duration-500  ">
        <div
          className="bg-white w-[368px] h-8 m-auto items-center flex justify-center text-zinc-400 space-x-2 text-3xl rounded-t-xl dark:bg-black
          hover:shadow-md hover:text-black dark:hover:text-white hover:duration-500 duration-500"
        >
          <Type />
          <Italic />
          <AlignCenter />
          <AlignJustify />
          <AlignLeft />
          <AlignRight />
          <Image />
        </div>
        <textarea
          placeholder="type something"
          className="text-xl text-zinc-700 bg-zinc-100 w-[368px] h-[416px] resize-none focus:outline-0 rounded-b-xl p-3 dark:bg-zinc-900 dark:text-zinc-100
          hover:duration-500 duration-500"
        />
      </div>
    </div>
  )
}

export default NotebookComponent