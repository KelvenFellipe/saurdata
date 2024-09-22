"use client"
import { fetchData } from "@/app/test/search/fetch"
import { SearchResponse } from "@/components/search/searchResponse"
import { SaurType } from "@/types/saurType"
import { CircleX, Search } from "lucide-react"
import { useEffect, useState } from "react"

export function NavSearch() {
  const [search, setSearch] = useState("")
  const [placeholder, setPlaceholder] = useState("search")
  const [responseData, setResponseData] = useState<Array<SaurType>>([])

  function reset(item: string) {
    setPlaceholder(() => item)
    setSearch(() => "")
  }
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
    <div className={`relative flex w-full items-center`}>
      <Search className="block size-5 w-10 pl-1 absolute" />

      <input
        onChange={e => setSearch(e.target.value)}
        value={search}
        type="text"
        className={` w-full bg-zinc-800 text-sm p-2 ps-10 hover:bg-zinc-700/50 rounded-xl ease-in-out duration-300`}
        placeholder={placeholder}
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
          className={`absolute bg-zinc-200 dark:bg-zinc-800 rounded-xl flex-col text-xl text-zinc-600 dark:text-zinc-300 
           items-center max-h-[310px] w-full top-[38px] z-[1] scrollbar-none overflow-y-scroll shadow-md shadow-black`}
        >
          {search !== "" && responseData.length === 0 ? (
            <div className="pl-2 my-2"> no results</div>
          ) : (
            <div className="my-2">
              {responseData.map(item => (
                <SearchResponse data={item} key={item.id} click={() => reset(item.genus)} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
