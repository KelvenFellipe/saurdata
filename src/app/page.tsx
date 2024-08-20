import { Notch } from "./_components/Notch"
import CalculatorComponent from "./calculator/calculator"
import NotebookComponent from "./notebook/notebook"
import { SearchResult } from "./search/searchResult"

function Main() {
  return (
    <div className="h-screen bg-zinc-200 dark:bg-zinc-800">
      <Notch />
      <div className="grid grid-cols-3">
        <CalculatorComponent />
        <NotebookComponent />
        <div className="col-span-3 m-20">
          <SearchResult />
        </div>
      </div>
    </div>
  )
}
export default Main
