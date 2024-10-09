"use client"
import { trpc } from "@/connection/client/client"
import { SaurType } from "@/types/saurType"
import { useEffect, useState } from "react"
import { SortingData } from "../data/SortingData"
import { Loading } from "../global/Loading"
import { SelectComponent } from "../global/SelectComponent"
import { MiniSaurCard } from "./MiniSaurCard"
import { useScrollPosition } from "./ScrollHook"

export function SaurMap() {
  const { data = [], isFetched, isLoading } = trpc.getSauria.useQuery()
  const [dataSauria, setDataSauria] = useState<Array<SaurType>>([])
  const [sortMethod, setSortMethod] = useState("")
  const [end, setEnd] = useState(18)
  const scrollPosition = useScrollPosition()

  useEffect(() => {
    setDataSauria(() => data)
  }, [isFetched, end])

  // useEffect(() => {
  //   if (scrollPosition > 95) {
  //     setEnd(end => end + 18)
  //   }
  // }, [scrollPosition])

  function sort(a: any, b: any) {
    if (sortMethod === "asc") return a.genus.localeCompare(b.genus)
    if (sortMethod === "desc") return b.genus.localeCompare(a.genus)
    if (sortMethod === "last") return b.added.localeCompare(a.added)
    if (sortMethod === "first") return a.added.localeCompare(b.added)
    if (sortMethod === "newer")
      return a.temporal.localeCompare(b.temporal, undefined, {
        numeric: true,
        sensitivity: "base",
      })
    if (sortMethod === "older")
      return b.temporal.localeCompare(a.temporal, undefined, {
        numeric: true,
        sensitivity: "base",
      })
  }
  function changevalue(value: string) {
    setSortMethod(() => value)
  }
  if (isLoading) {
    return <Loading />
  }

  return (
    <div className="z-[0]">
      <div className="flex mx-3 mt-3  justify-end select-none">
        <SelectComponent PlaceHolder={"Sorting"} data={SortingData} changevalue={changevalue} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-fit p-2 divide-y divide-solid">
        <div className="hidden"></div>
        {dataSauria
          .sort((a, b) => sort(a, b))
          .map(item => (
            <div key={item.id} className="">
              <MiniSaurCard {...item} />
              {isLoading && <Loading />}
            </div>
          ))}
      </div>
    </div>
  )
}
