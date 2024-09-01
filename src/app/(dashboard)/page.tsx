import { SearchResult } from "../components/search/searchResult"
import CalculatorComponent from "./calculator/calculator"
import NotebookComponent from "./notebook/notebook"

function Main() {
  return (
    <div className="h-max grid grid-cols-3 items-center justify-items-center">
      <CalculatorComponent />
      <SearchResult />
      <NotebookComponent />
    </div>
  )
}
export default Main
