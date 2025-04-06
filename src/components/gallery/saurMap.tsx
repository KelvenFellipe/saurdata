"use client"
import { trpc } from "@/connection/client/client"
import { useEffect, useState } from "react"
import { SortingData } from "../data/SortingData"
import { Loading } from "../global/Loading"
import { SelectComponent } from "../global/SelectComponent"
import { MiniSaurCard } from "./MiniSaurCard"
import { useScrollPosition } from "./ScrollHook"
import { sort } from "./sorting"
import { SaurType } from "@/types/schemaTypes"

export function SaurMap() {
  const { data = [], isFetched, isLoading } = trpc.getSauria.useQuery()
  const [dataSauria, setDataSauria] = useState<Array<SaurType>>([])
  const [sortMethod, setSortMethod] = useState("")
  const [end, setEnd] = useState(18)
  const scrollPosition = useScrollPosition()

  useEffect(() => {
    setDataSauria(() => data)
  }, [isFetched, end])

  function changevalue(value: string) {
    setSortMethod(() => value)
  }

  if (isLoading) {
    return <Loading />
  }

  return (
    <div className="z-[0]">
      <div className="flex mx-5 mt-2 justify-between select-none">
        <p className="p-2">{dataSauria.length} animals found</p>
        <SelectComponent PlaceHolder={"Sorting"} data={SortingData} changevalue={changevalue} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-fit p-2 divide-y divide-solid">
        <div className="hidden"></div>
        {dataSauria
          .sort((a, b) => sort(a, b, sortMethod))
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
