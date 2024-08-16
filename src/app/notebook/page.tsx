import { Notch } from "@/components/Notch";
import NotebookComponent from "./notebook";

function Notebook(){

  return (
    <div className="h-screen bg-zinc-200 dark:bg-zinc-800">
      <Notch />
      <NotebookComponent />
    </div>
  )
}

export default Notebook