export function ShareButton({ clickCopy, click }: any) {
  return (
    <div className="z-[40]">
      <div className="w-fit bg-zinc-800 hover:bg-zinc-700/50 p-2 my-2">
        <div className="">
          <p onClick={clickCopy}>Copy Url</p>
        </div>
      </div>
      <div className="fixed w-full h-full " onClick={click} />
    </div>
  )
}
