"use client"
import { trpc } from "@/connection/client/client"
import { SaurType } from "@/types/saurType"
import { useEffect, useState } from "react"
import { SortingData } from "../data/SortingData"
import { SelectComponent } from "../global/SelectComponent"
import { MiniSaurCard } from "./saurCard"

export function SaurMap() {
  const { data = [], isFetched } = trpc.getSauria.useQuery()
  const [dataSauria, setDataSauria] = useState<Array<SaurType>>([])
  const [sortMethod, setSortMethod] = useState("")

  useEffect(() => {
    setDataSauria(() => data)
  }, [isFetched])

  function sort(a: any, b: any) {
    if (sortMethod === "asc") return b.genus.localeCompare(a.genus)
    if (sortMethod === "desc") return a.genus.localeCompare(b.genus)
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

  return (
    <div className=" z-[0] ">
      <div className="flex mx-3 my-2 ">
        <SelectComponent PlaceHolder={"Sorting"} data={SortingData} changevalue={changevalue} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-fit p-2">
        {dataSauria
          .sort((a, b) => sort(a, b))
          .map(item => (
            <div key={item.id} className="divide-y divide-solid">
              <MiniSaurCard {...item} />
            </div>
          ))}
      </div>
    </div>
  )
}

//(a, b) => a.genus.localeCompare(b.genus)
//(a, b) => b.genus.localeCompare(a.genus)
//(a, b) => a.temporal.localeCompare(b.temporal)
//(a, b) => b.temporal.localeCompare(a.temporal)
