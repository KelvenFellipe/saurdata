"use client"

import { fontSelect } from "@/components/data/fontSelectData"
import { textAlign } from "@/components/data/textAlignData"
import { SelectComponent } from "@/components/global/SelectComponent"
import { Bold, Italic } from "lucide-react"
import { useState } from "react"

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
    <div className="h-[384px] w-[336px] rounded-xl shadow-md hover:shadow-2xl hover:300 duration-300 justify-center flex-col">
      <div className="w-[336] h-10 px-4 bg-white flex justify-between dark:bg-black text-zinc-400 rounded-t-xl duration-300 hover:duration-300">
        <div className="transition ease-in-out delay-150 duration-300 hover:text-black dark:hover:text-white text-xl text-center">
          <SelectComponent PlaceHolder={"font"} data={fontSelect} changevalue={selectFont} />
        </div>
        <div className="flex space-x-2 items-center text-xl">
          <Italic />
          <Bold />
          <div className="transition ease-in-out delay-150 duration-300 hover:text-black dark:hover:text-white">
            <SelectComponent
              PlaceHolder={textAlign[3].Icon}
              data={textAlign}
              changevalue={selectType}
            />
          </div>
        </div>
      </div>
      <textarea
        placeholder="type something"
        className={`text-xl ${font} ${textType} text-zinc-800 bg-zinc-100 w-[336px] h-[344px] resize-none focus:outline-0 rounded-b-xl p-3 dark:bg-zinc-900 dark:text-zinc-200
            hover:duration-300 duration-300`}
      ></textarea>
    </div>
  )
}

export default NotebookComponent
