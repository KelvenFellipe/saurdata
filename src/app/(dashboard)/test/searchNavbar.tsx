"use client"
import { saurType } from "@/app/components/gallery/saurCard"
import { SearchResponse } from "@/app/components/search/searchResponse"
import { CircleX, Search } from "lucide-react"
import { useEffect, useState } from "react"
import { fetchData } from "../search/fetch"

export function SearchNavbar() {
  const [search, setSearch] = useState("")
  const [responseData, setResponseData] = useState<Array<saurType>>([])

  useEffect(() => {
    async function fetched() {
      const data = await fetchData(search)
      if (data) {
        setResponseData(data)
      }
    }
    fetched()
  }, [search])
  return (
    <div className={`relative bg-zinc-800 flex rounded-xl w-full items-center m-2 `}>
      <Search className="size-5 w-10 pl-2" />

      <input
        onChange={e => setSearch(e.target.value)}
        value={search}
        type="text"
        className={`bg-zinc-800 text-xl focus:outline-none p-1 w-full `}
        placeholder="search"
      />

      {search !== "" ? (
        <CircleX className="size-5 w-10 pr-2" onClick={() => setSearch("")} />
      ) : (
        <p className="size-5 w-10 pr-2"></p>
      )}

      {search !== "" && (
        <div
          className={`absolute px-2 bg-zinc-200 dark:bg-zinc-800  rounded-xl flex-col text-xl text-zinc-600 dark:text-zinc-300 duration-300
           items-center transition ease-in-out hover:shadow-md hover:duration-300 overflow-auto max-h-[310px] w-full top-[38px]`}
        >
          {search !== "" && responseData.length === 0 ? (
            <div className="pl-2"> no results</div>
          ) : (
            responseData.map(item => (
              <SearchResponse data={item} key={item.id} click={console.log} />
            ))
          )}
        </div>
      )}
    </div>
  )
}
