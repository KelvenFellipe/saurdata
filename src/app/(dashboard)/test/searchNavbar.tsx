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
    <div className={`relative flex w-full items-center m-2`}>
      <Search className="block size-5 w-10 pl-1 absolute" />

      <input
        onChange={e => setSearch(e.target.value)}
        value={search}
        type="text"
        className={`block w-full bg-zinc-800 text-xl text-white p-1 ps-10 focus:outline-none hover:bg-white/20 rounded-xl`}
        placeholder="search"
        maxLength={30}
      />

      <div className="absolute end-0">
        {search !== "" ? (
          <CircleX className="size-5 w-10 pr-2" onClick={() => setSearch("")} />
        ) : (
          <p className="size-5 w-10 pr-2"></p>
        )}
      </div>

      {search !== "" && (
        <div
          className={`absolute px-2 bg-zinc-200 dark:bg-zinc-800 rounded-xl flex-col text-xl text-zinc-600 dark:text-zinc-300 
           items-center hover:shadow-md  overflow-auto max-h-[310px] w-full top-[38px]`}
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
