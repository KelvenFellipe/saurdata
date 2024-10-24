"use client"
import { SortingData } from "@/components/data/SortingData"
import { LastAdded } from "@/components/gallery/LastAdded"
import { MiniSaurCard } from "@/components/gallery/MiniSaurCard"
import { sort } from "@/components/gallery/sorting"
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

  if (isLoading) return <Loading />

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 justify-items-center z-[10]">
      <div className="hidden lg:flex"></div>
      <div className="col-span-4 md:col-span-2 max-w-[800px] ">
        <div className={`m-4 ${isLoading && "hidden"}`}>
          <SelectComponent
            PlaceHolder={"Sorting"}
            data={SortingData}
            changevalue={e => setSortMethod(() => e)}
          />
        </div>
        <div className="divide-y divide-solid">
          <div className="hidden" />
          {dataSauria
            .sort((a, b) => sort(a, b, sortMethod))
            .map(dino => (
              <div key={dino.id}>
                <MiniSaurCard {...dino} />
              </div>
            ))}
        </div>
      </div>
      <div className="sticky top-20 hidden md:flex col-span-1 h-screen">
        <LastAdded />
      </div>
    </div>
  )
}
export default Main
