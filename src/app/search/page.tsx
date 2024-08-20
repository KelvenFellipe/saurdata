"use client"
import { useState } from "react"
import { Notch } from "../_components/Notch"
import { fetchData } from "./fetch"
import SearchBox from "./searchBox"
import { SearchResponse } from "./searchResponse"

interface dataProps {
  genus: string
  id: any
}

function Search() {
  const [search, setSearch] = useState("")
  const responseData = fetchData(search)

  return (
    <div className="h-screen bg-zinc-200 dark:bg-zinc-800">
      <Notch />
      <div className="bg-zinc-100 w-fit rounded-xl justify-center flex-col shadow-md hover:shadow-2xl hover:duration-300 duration-300 dark:bg-zinc-900 p-[1px] mx-auto">
        <SearchBox search={search} setSearch={setSearch} />
        <div className="bg-zinc-200 p-2 m-2 rounded-xl flex-col text-xl items-center">
          {Object.values(responseData).map(response => (
            <SearchResponse key={response.id} response={response.genus} />
          ))}
        </div>
      </div>
    </div>
  )
}
export default Search
