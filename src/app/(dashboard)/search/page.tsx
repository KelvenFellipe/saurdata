import { SearchResult } from "@/app/components/search/searchResult"
import type { Metadata } from "next"

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
