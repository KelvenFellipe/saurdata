import { Notch } from "./_components/Notch"
import CalculatorComponent from "./calculator/calculator"
import NotebookComponent from "./notebook/notebook"
import SearchBox from "./search/searchBox"

function Main() {
  return (
    <div className="h-screen bg-zinc-200 dark:bg-zinc-800">
      <Notch />
      <div className="grid grid-cols-3">
        <div className="col-span-3 m-20">
          <SearchBox />
        </div>
        <CalculatorComponent />
        <NotebookComponent />
      </div>
    </div>
  )
}
export default Main
