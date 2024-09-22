"use client"
import { trpc } from "@/connection/client/client"
import { SaurType } from "@/types/saurType"
import { useEffect, useState } from "react"
import { MiniSaurCard } from "./saurCard"

export function SaurMap() {
  const { data = [], isFetched } = trpc.getSauria.useQuery()
  const [dataSauria, setDataSauria] = useState<Array<SaurType>>([])
  const [sort, setSort] = useState()

  useEffect(() => {
    setDataSauria(() => data)
  }, [isFetched])

  return (
    <div className=" z-[0] ">
      <div>Sort</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-fit p-2">
        {dataSauria
          .sort((a, b) => a.genus.localeCompare(b.genus))
          .map(item => (
            <div key={item.id} className="divide-y divide-solid">
              <MiniSaurCard {...item} />
              <div></div>
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
