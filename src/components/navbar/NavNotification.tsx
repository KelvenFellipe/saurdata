import { ProfileType } from "@/types/profileType"

interface props {
  click: any
  data: ProfileType
}

export function NavNotification({ click, data }: props) {
  console.log(data.notifications)
  return (
    <div className="fixed w-full h-full z-[10] select-none">
      <div className="h-fit bg-zinc-800 fixed text-sm text-white top-[53px] right-[72px] rounded-xl z-[20] overflow-auto w-[150px] max-h-[200px]">
        {data.notifications !== undefined && data.notifications.length !== 0 ? (
          data.notifications.map(item => (
            <p className="flex flex-row items-center space-x-[20px] py-1 px-[28px] hover:bg-white/5 my-2 font-bold ">
              {item.notification}
            </p>
          ))
        ) : (
          <div className="flex  items-center space-x-[20px] py-3 px-[28px] hover:bg-white/5 my-2 font-bold">
            nothing here
          </div>
        )}
      </div>
      <div className="fixed w-full h-full top-0 left-0" onClick={click}></div>
    </div>
  )
}
