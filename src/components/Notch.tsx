import { Calculator, NotebookIcon, Search } from "lucide-react";
import Icon from "./Icon";

export function Notch(){
  return(
    <div className="flex justify-center p-5 text-3xl">
      <div className="rounded-xl grid grid-cols-3 gap-3 p-3 bg-white size-xl text-zinc-400">
        <Icon iconTag={<Calculator/>} link={"/calculator"} />
        <Icon iconTag={<NotebookIcon/>} link={""} />
        <Icon iconTag={<Search/>} link={"/search"} />
      </div>
    </div>
  )
}