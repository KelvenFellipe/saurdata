import { profileType } from "./Profile"

interface props {
  user: profileType
  click?: any
}
export function NavNotification({ user, click }: props) {
  return (
    <div className="fixed w-full h-full z-[10] select-none">
      <div className="h-fit bg-zinc-800 fixed text-sm text-white top-[53px] right-[72px] rounded-xl z-[20] overflow-auto w-[150px] max-h-[200px] justify-end">
        {user.notifications !== null ? (
          user.notifications.map(item => (
            <div
              className="flex  items-center space-x-[20px] py-1 px-[28px] hover:bg-white/5 my-2 font-bold "
              key={item}
            >
              {item}
            </div>
          ))
        ) : (
          <div className="flex  items-center space-x-[20px] py-3 px-[28px] hover:bg-white/5 my-2 font-bold">
            "nothing here"
          </div>
        )}
      </div>
      <div className="fixed w-full h-full top-0 left-0" onClick={click}></div>
    </div>
  )
}
