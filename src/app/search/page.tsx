"use client"
import { Notch } from "../_components/Notch"
import { SearchResult } from "./searchResult"

function Search() {
  return (
    <div className="h-screen bg-zinc-200 dark:bg-zinc-800">
      <Notch />
      <SearchResult />
    </div>
  )
}
export default Search
