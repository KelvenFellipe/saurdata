export function ShareButton({ clickCopy, click }: any) {
  return (
    <div className="z-[40] ">
      <div className="absolute top-[46px] right-0 w-[100px] bg-zinc-100 dark:bg-zinc-800 text-black dark:text-white z-[50] rounded-xl overflow-hidden shadow-md  shadow-black/40 dark:shadow-black">
        <button
          className="hover:bg-zinc-300/50 dark:hover:bg-zinc-700/50 w-full p-2"
          onClick={clickCopy}
        >
          Copy Url
        </button>
      </div>
      <div className="fixed left-0 top-0 w-full h-full" onClick={click} />
    </div>
  )
}
