import { Notch } from "@/components/Notch";
import NotebookComponent from "./notebook";

function Notebook(){

  return(
    <div className="bg-zinc-300 h-screen">
      <Notch/>
      <NotebookComponent/>
    </div>
  )
}

export default Notebook