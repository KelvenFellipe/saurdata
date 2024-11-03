import { Bone, Trash2 } from "lucide-react"

export function NotificationOptions({ onClick }: { onClick: any }) {
  return (
    <div className="absolute z-40 top-11 right-[200px]">
      <div
        className="fixed z-50 w-fit h-fit bg-zinc-100 dark:bg-zinc-800 text-black dark:text-white text-sm rounded-xl flex flex-col
        shadow-md shadow-black/40 dark:shadow-black cursor-pointer ease-in-out duration-500 overflow-hidden"
      >
        <div className="">
          <div className="flex p-2 px-4 space-x-3  hover:bg-zinc-300/50 dark:hover:bg-zinc-700/50">
            <Bone className="size-5" />
            <p className="" onClick={onClick}>
              Go to Page
            </p>
          </div>
          <div className="flex p-2 px-4 space-x-3  hover:bg-zinc-300/50 dark:hover:bg-zinc-700/50">
            <Trash2 className="size-5" />
            <p className="" onClick={onClick}>
              Delete notification
            </p>
          </div>
        </div>
      </div>
      <div className="fixed w-full h-full top-0 left-0" onClick={onClick}></div>
    </div>
  )
}
