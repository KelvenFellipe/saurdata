import { XIcon } from "lucide-react"

export function ImageOVerlay({ src, onClick }: { src: string; onClick: any }) {
  return (
    <div className="fixed z-[50] no-doc-scroll">
      <img
        src={src}
        className="fixed z-40 max-h-screen max-w-screen top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      />
      <button
        className=" fixed z-[200] right-6 top-6 bg-black/20 hover:bg-black/70 text-white ease-in-out duration-300 rounded-full h-10 w-10 items-center justify-center flex"
        onClick={onClick}
      >
        <XIcon className="size-8" />
      </button>
      <div className="fixed w-full h-full top-0 left-0 backdrop-blur-lg bg-black/80"></div>
    </div>
  )
}
