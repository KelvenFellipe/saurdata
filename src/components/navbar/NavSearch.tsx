"use client"
import { SearchResponse } from "@/components/search/searchResponse"
import { trpc } from "@/connection/client/client"
import { cn } from "@/lib/utils"
import { SaurType } from "@/types/schemaTypes"
import { CircleX, Search } from "lucide-react"
import { Dispatch, SetStateAction, useState } from "react"

export function NavSearch({ onClose }: { onClose?: Dispatch<SetStateAction<boolean>> }) {
  const [state, setState] = useState({
    search: "",
    placeholder: "search",
    open: false,
    response: [] as Array<SaurType>,
  })
  const { data: sauria = [] } = trpc.getSauria.useQuery()

  function reset(item: string) {
    setState({ ...state, placeholder: item, search: "" })
  }

  return (
    <div>
      <div className="relative flex w-full items-center flex-1 z-[10]">
        <Search className="block size-5 w-10 pl-1 absolute" />

        <input
          onClick={() => setState({ ...state, open: true })}
          onChange={e =>
            setState({
              ...state,
              search: e.target.value,
              response: sauria.filter(item => item.genus.includes(e.target.value.toLowerCase())),
            })
          }
          value={state.search}
          type="text"
          className=" placeholder:text-zinc-600 dark:placeholder:text-zinc-400 w-full bg-zinc-200 dark:bg-zinc-800 text-sm p-2 ps-10 hover:bg-zinc-400/50 dark:hover:bg-zinc-700/50 rounded-xl ease-in-out duration-300"
          placeholder={state.placeholder}
          maxLength={30}
        />

        <div className="absolute end-0">
          {state.search ? (
            <CircleX
              className="size-5 w-10 pr-2"
              onClick={() => setState({ ...state, search: "" })}
            />
          ) : (
            <p className="size-5 w-10 pr-2"></p>
          )}
        </div>

        {state.open && state.search && (
          <div
            className="absolute z-[10] bg-zinc-200 dark:bg-zinc-800 rounded-xl flex-col text-xl text-zinc-600 dark:text-zinc-300 
           items-center  w-full top-[38px] shadow-md shadow-black"
          >
            {state.response.length === 0 ? (
              <div className="flex my-2 p-1 px-5 justify-start items-center text-sm text-zinc-200 z-[20]">
                no results
              </div>
            ) : (
              <div
                className="max-h-[310px] my-2 overflow-auto scrollbar-none hover:scrollbar-thin pr-[10px] hover:pr-0 scrollbar-track-zinc-800 scrollbar-thumb-[#111316] z-[20]"
                onClick={close}
              >
                {state.response.map(item => (
                  <SearchResponse data={item} key={item.id} onClick={() => reset(item.genus)} />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
      <div
        className={cn(!state.open && "hidden", "fixed left-0 top-0 w-full h-screen z-[0]")}
        onClick={() => (setState({ ...state, open: false }), onClose && onClose(() => false))}
      />
    </div>
  )
}
