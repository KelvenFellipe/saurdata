import { GitSign } from "@/app/components/login/gitSign"
import { GoogleSign } from "@/app/components/login/googleSign"

interface props {
  click?: any
}
export function NotSigned({ click }: props) {
  return (
    <div className="fixed max-w-full max-h-full flex ">
      <div className="p-4 space-y-5 text-white bg-zinc-800 w-fit rounded-xl z-10 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <p>Log In providers</p>
        <GitSign />
        <GoogleSign />
      </div>
      <div className="fixed bg-black/60 w-full h-full top-0 left-0" onClick={click}></div>
    </div>
  )
}