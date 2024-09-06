interface props {
  click?: any
}
export function NavNotification({ click }: props) {
  return (
    <div className="fixed w-full h-full z-[10] select-none">
      <div className="w-fit h-fit bg-zinc-800 fixed text-sm text-white top-[53px] right-[72px] rounded-xl z-[20]">
        <div className="flex  items-center space-x-[20px] py-3 px-[28px] hover:bg-white/5 my-2 font-bold">
          nothing here
        </div>
      </div>
      <div className="fixed w-full h-full top-0 left-0" onClick={click}></div>
    </div>
  )
}
