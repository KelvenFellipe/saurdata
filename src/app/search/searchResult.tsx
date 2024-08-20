"use client"
import { Key, useEffect, useState } from "react"
import { fetchData } from "./fetch"
import SearchBox from "./searchBox"
import { SearchResponse } from "./searchResponse"

interface dataTypes {
  id: Key
  genus: string
}

export function SearchResult() {
  const [search, setSearch] = useState("")
  const [responseData, setResponseData] = useState<Array<dataTypes>>([])
  let visible: string = ""

  useEffect(() => {
    async function fetched() {
      const data = await fetchData(search)
      if (data) setResponseData(Object.values(data))
      //console.log(responseData)
    }
    fetched()
  }, [search])

  if (search === "") {
    visible = "hidden"
  }
  return (
    <div className=" bg-zinc-100 w-fit rounded-xl justify-center flex-col shadow-md hover:shadow-2xl duration-300 dark:bg-zinc-900 p-[1px] mx-auto">
      <SearchBox search={search} setSearch={setSearch} />

      <div
        className={`bg-zinc-200 dark:bg-zinc-800 p-2 m-2 rounded-xl flex-col text-xl text-zinc-600 dark:text-zinc-300 duration-300 items-center ${visible} transition ease-in-out hover:shadow-md hover:duration-300`}
      >
        {search !== "" && responseData.length === 0 ? (
          <div> no results</div>
        ) : (
          responseData.map(item => <SearchResponse key={item.id} response={item.genus} />)
        )}
      </div>
    </div>
  )
}
