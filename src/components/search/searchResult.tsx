"use client"
import { fetchData } from "@/app/test/search/fetch"
import { SaurType } from "@/types/saurType"
import { useEffect, useState } from "react"
import SearchBox from "./searchBox"
import { SearchResponse } from "./searchResponse"

export function SearchResult() {
  const [search, setSearch] = useState("")
  const [responseData, setResponseData] = useState<Array<SaurType>>([])

  let visible: string = ""
  useEffect(() => {
    async function fetched() {
      const data = await fetchData(search)
      if (data) {
        setResponseData(data)
      }
    }
    fetched()
  }, [search])

  if (search === "") {
    visible = "hidden"
  }
  return (
    <div className=" bg-zinc-100 max-w-[700px] rounded-xl justify-center flex flex-col shadow-md hover:shadow-2xl duration-300 dark:bg-zinc-900 p-2">
      <SearchBox search={search} setSearch={setSearch} />

      <div
        className={`bg-zinc-200 dark:bg-zinc-800 p-2 rounded-xl flex-col text-xl text-zinc-600 dark:text-zinc-300 duration-300
           items-center ${visible} transition ease-in-out hover:shadow-md hover:duration-300 overflow-auto max-h-[310px]`}
      >
        {search !== "" && responseData.length === 0 ? (
          <div className="pl-2"> no results</div>
        ) : (
          responseData.map(item => <SearchResponse data={item} key={item.id} click={console.log} />)
        )}
      </div>
    </div>
  )
}
