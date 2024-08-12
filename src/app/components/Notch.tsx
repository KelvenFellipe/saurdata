import { Calculator, NotebookIcon, Search } from "lucide-react";

export function Notch(){
  return(
    <div className="flex justify-center p-10 text-3xl bg-zinc-900">
      <div className="flex border-2 border-zinc-100 rounded-xl w-[150px] h-[60px] justify-between items-center ">
        <Calculator className="hover:opacity-80 hover:duration-150 hover:size-7 m-auto"/>
        <NotebookIcon className="hover:opacity-80 hover:duration-150 hover:size-7 m-auto"/>
        <Search className="hover:opacity-80 hover:duration-150 hover:size-7 m-auto"/>
        
      </div>
    </div>
  )
}