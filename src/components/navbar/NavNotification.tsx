import { ProfileType } from "@/types/profileType"

interface props {
  click: any
  data: ProfileType
}
export function NavNotification({ click, data }: props) {
  return (
    <div className="fixed w-full h-full z-[10] select-none">
      <div className="h-fit bg-zinc-800 fixed text-sm text-white top-[52px] right-[72px] rounded-xl py-2 z-[20] overflow-auto max-w-[200px] max-h-[200px]">
        {data.notifications !== null && data.notifications.length !== 0 ? (
          data.notifications.map((item, index) => (
            <p
              key={index}
              className="flex flex-row items-center space-x-[20px] p-3 hover:bg-zinc-700/50 font-bold ease-in-out duration-300"
            >
              {item.notification}
              {item.read}
            </p>
          ))
        ) : (
          <div className="flex  items-center space-x-[20px] py-3 px-[28px] hover:bg-zinc-700/50 my-2 font-bold">
            nothing here
          </div>
        )}
      </div>
      <div className="fixed w-full h-full top-0 left-0" onClick={click}></div>
    </div>
  )
}
