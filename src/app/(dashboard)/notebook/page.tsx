import type { Metadata } from "next"
import NotebookComponent from "./notebook"

export const metadata: Metadata = {
  title: "notebook | saurdata",
}

function Notebook() {
  return (
    <div className="h-max justify-center grid">
      <NotebookComponent />
    </div>
  )
}
export default Notebook
