"use client"

import { Notch } from "../components/Notch"
import CalculatorComponent from "./calculator/calculator"
import NotebookComponent from "./notebook/notebook"
import SearchBox from "./search/searchBox"

function Main() {

  return (
    <div className="h-screen bg-zinc-300">
      <Notch />
      <div className="grid grid-cols-3">
      <CalculatorComponent/>
      <NotebookComponent/>
        <div className="col-span-3 m-20">
          <SearchBox/>
        </div>

      </div>
    </div>
  )
}
export default Main
