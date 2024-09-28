"use client"
import { Trash2 } from "lucide-react"
import { useState } from "react"
import { ButtonComponent } from "./ButtonComponent"

export function ButtonV({ task }: any) {
  const [open, setOpen] = useState(false)
  function handle() {
    {
      task()
    }
    setOpen(() => false)
  }
  return (
    <div className="relative">
      <ButtonComponent
        Icon1={Trash2}
        Click={() => setOpen(() => true)}
        className="hover:text-[#ff0000]"
      />
      {open === true && (
        <div>
          <div className="bg-zinc-800 rounded-lg p-2 items-center flex flex-col space-y-2 right-0 absolute z-50">
            <p>Delete?</p>
            <div className=" flex space-x-2">
              <button
                className="p-2 hover:bg-zinc-700/50 rounded-lg w-[50px] text-[#ff0000]"
                onClick={handle}
              >
                Yes
              </button>
              <button
                className="p-2 hover:bg-zinc-700/50 rounded-lg w-[50px]"
                onClick={() => setOpen(() => false)}
              >
                No
              </button>
            </div>
          </div>
          <div
            className="fixed w-full h-full top-0 left-0"
            onClick={() => setOpen(() => false)}
          ></div>
        </div>
      )}
    </div>
  )
}
