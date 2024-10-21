"use client"
import { SortingData } from "@/components/data/SortingData"
import { LastAdded } from "@/components/gallery/LastAdded"
import { MiniSaurCard } from "@/components/gallery/MiniSaurCard"
import { Loading } from "@/components/global/Loading"
import { SelectComponent } from "@/components/global/SelectComponent"
import { trpc } from "@/connection/client/client"
import { SaurType } from "@/types/saurType"
import { useEffect, useState } from "react"

function Main() {
  const { data = [], isFetched, isLoading } = trpc.getSauria.useQuery()
  const [dataSauria, setDataSauria] = useState<Array<SaurType>>([])
  const [sortMethod, setSortMethod] = useState("")

  useEffect(() => {
    setDataSauria(() => data)
  }, [isFetched])

  function changevalue(value: string) {
    setSortMethod(() => value)
  }

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

  if (isLoading) return <Loading />

  return (
    <div className="h-max grid grid-cols-3 md:grid-cols-2 lg:grid-cols-5 justify-items-center z-[10]">
      <div className=""></div>
      <div className="col-span-3 max-w-[800px] ">
        <div className={`m-4 ${isLoading && "hidden"}`}>
          <SelectComponent PlaceHolder={"Sorting"} data={SortingData} changevalue={changevalue} />
        </div>

        {dataSauria
          .sort((a, b) => sort(a, b))
          .map(dino => (
            <div className="divide-y divide-solid">
              <MiniSaurCard {...dino} />
            </div>
          ))}
      </div>
      <div className=" justify-end mt-6 hidden md:flex">
        <LastAdded />
      </div>
    </div>
  )
}
export default Main
