import type { Metadata } from "next"
import { SearchResult } from "./searchResult"

export const metadata: Metadata = {
  title: "search | saurdata",
}

function Search() {
  return (
    <div className="h-max grid justify-center">
      <SearchResult />
    </div>
  )
}
export default Search
