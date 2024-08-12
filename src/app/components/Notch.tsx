import { Calculator, NotebookIcon, Search } from "lucide-react";
import Link from "next/link";

export function Notch(){
  return(
    <div className="flex justify-center p-5 text-3xl bg-zinc-900">
      <div className="rounded-xl grid grid-cols-3 gap-3 p-3 bg-white size-xl text-zinc-400">
        <Link href="/calculator"><Calculator className="transition ease-in-out delay-150 hover:scale-150 duration-300 hover:text-zinc-900"/></Link>        
        <Link href=""><NotebookIcon className="transition ease-in-out delay-150 hover:scale-150 duration-300 hover:text-zinc-900"/></Link>
        <Link href="/search"><Search className="transition ease-in-out delay-150 hover:scale-150 duration-300 hover:text-zinc-900"/></Link>
      </div>
    </div>
  )
}