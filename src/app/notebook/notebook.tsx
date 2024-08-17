"use client"

import SelectComponent from "@/app/_components/SelectComponent"
import { Bold, Italic, Type } from "lucide-react"
import { useState } from "react"
import { fontSelect } from "../_data/fontSelectData"
import { textAlign } from "../_data/textAlignData"

function NotebookComponent() {
  const [textType, setTextType] = useState("")
  const [font, setFont] = useState("")

  function selectType(value: string) {
    setTextType(value)
  }

  function selectFont(value: string) {
    setFont(value)
  }

  return (
    <div className="flex justify-center m-auto">
      <div className="h-[384px] w-[336px] rounded-xl shadow-md hover:shadow-2xl hover:duration-500 duration-500  ">
        <div
          className="bg-white w-[336] h-10 m-auto items-center flex justify-between px-14 text-zinc-400 space-x-2 text-3xl rounded-t-xl dark:bg-black
           hover:duration-500 duration-500"
        >
          <div className="transition ease-in-out delay-150 duration-300 hover:text-zinc-900 dark:hover:text-zinc-100 text-lg text-center w-10">
            <SelectComponent PlaceHolder={"font"} data={fontSelect} changevalue={selectFont} />
          </div>

          <Type />
          <Italic />
          <Bold />

          <div className="transition ease-in-out delay-150 duration-300 hover:text-zinc-900 dark:hover:text-zinc-100">
            <SelectComponent
              PlaceHolder={textAlign[3].Icon}
              data={textAlign}
              changevalue={selectType}
            />
          </div>
        </div>
        <textarea
          placeholder="type something"
          className={`text-xl ${font} ${textType} text-zinc-700 bg-zinc-100 w-[336px] h-[344px] resize-none focus:outline-0 rounded-b-xl p-3 dark:bg-zinc-900 dark:text-zinc-100
            hover:duration-500 duration-500 `}
        ></textarea>
      </div>
    </div>
  )
}

export default NotebookComponent