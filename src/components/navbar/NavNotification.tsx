import { ProfileType } from "@/types/profileType"
import { useEffect, useState } from "react"

interface props {
  click: any
  data: ProfileType
}
export function NavNotification({ click, data }: props) {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    setOpen(() => true)
  }, [])

  function handleClick() {
    setOpen(() => false)
    setTimeout(click, 1000)
  }

  return (
    <div className={`fixed z-[10] select-none`}>
      <div
        className={`fixed z-[20] w-fit top-[56px] right-[72px] bg-zinc-100 dark:bg-zinc-800 text-black dark:text-white text-sm rounded-xl transition-[max-height]
           duration-1000 overflow-hidden shadow-md shadow-black/40 dark:shadow-black ${
             !open ? "max-h-0" : "max-h-full"
           } `}
      >
        <div className="my-2">
          {data.notifications !== null && data.notifications.length !== 0 ? (
            data.notifications.map((item, index) => (
              <p
                key={index}
                className="flex flex-row items-center space-x-[20px] px-4 py-3 hover:bg-zinc-300/50 dark:hover:bg-zinc-700/50 font-bold ease-in-out duration-300"
              >
                {item.notification}
                {item.read}
              </p>
            ))
          ) : (
            <div className="flex  items-center space-x-[20px] py-3 px-[28px] hover:bg-zinc-700/50 font-bold">
              nothing here
            </div>
          )}
        </div>
      </div>
      <div
        className={`fixed w-full h-full top-0 left-0 ${!open && "hidden"}`}
        onClick={handleClick}
      ></div>
    </div>
  )
}
