"use client"
import { Notch } from "../_components/Notch"
import SearchBox from "./searchBox";

function Search() {
  return (
    <div className="h-screen bg-zinc-200 dark:bg-zinc-800">
      <Notch />
      <SearchBox />
    </div>
  )
}
export default Search