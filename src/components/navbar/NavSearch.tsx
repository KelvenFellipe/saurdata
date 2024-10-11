"use client"
import { SearchResponse } from "@/components/search/searchResponse"
import { trpc } from "@/connection/client/client"
import { SaurType } from "@/types/saurType"
import { CircleX, Search } from "lucide-react"
import { useEffect, useState } from "react"

export function NavSearch({ onClose }: { onClose?: any }) {
  const [search, setSearch] = useState("")
  const [placeholder, setPlaceholder] = useState("search")
  const [open, setOpen] = useState(false)
  const [responseData, setResponseData] = useState<Array<SaurType>>([])
  const { data: sauria = [] } = trpc.getSauria.useQuery()

  function reset(item: string) {
    setPlaceholder(() => item)
    setSearch(() => "")
    onClose()
  }
  function close() {
    setOpen(false)
    onClose()
  }
  useEffect(() => {
    setOpen(true)
    setResponseData(() => sauria.filter(item => item.genus.includes(search)))
  }, [search])

  return (
    <div>
      <div className={`relative flex w-full items-center flex-1 z-[10]`}>
        <Search className="block size-5 w-10 pl-1 absolute" />

        <input
          onChange={e => setSearch(e.target.value)}
          value={search}
          type="text"
          className={` placeholder:text-zinc-600 dark:placeholder:text-zinc-400 w-full bg-zinc-200 dark:bg-zinc-800 text-sm p-2 ps-10 hover:bg-zinc-400/50 dark:hover:bg-zinc-700/50 rounded-xl ease-in-out duration-300`}
          placeholder={placeholder}
          maxLength={30}
        />

        <div className="absolute end-0">
          {search ? (
            <CircleX className="size-5 w-10 pr-2" onClick={() => setSearch("")} />
          ) : (
            <p className="size-5 w-10 pr-2"></p>
          )}
        </div>

        {open && search && (
          <div
            className={`absolute z-[10] bg-zinc-200 dark:bg-zinc-800 rounded-xl flex-col text-xl text-zinc-600 dark:text-zinc-300 
           items-center  w-full top-[38px] shadow-md shadow-black`}
          >
            {responseData.length === 0 ? (
              <div className="flex my-2 p-1 px-5 justify-start items-center text-sm text-zinc-200 z-[20]">
                no results
              </div>
            ) : (
              <div
                className="max-h-[310px] my-2 scrollbar-thin overflow-y-auto scrollbar-track-zinc-800 scrollbar-thumb-[#111316] z-[20]"
                onClick={close}
              >
                {responseData.map(item => (
                  <SearchResponse data={item} key={item.id} click={() => reset(item.genus)} />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
      <div
        className={`fixed left-0 top-0 w-full h-screen z-[-10] ${!open && "hidden"}`}
        onClick={close}
      />
    </div>
  )
}
