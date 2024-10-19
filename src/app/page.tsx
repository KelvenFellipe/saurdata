"use client"
import { LastAdded } from "@/components/gallery/LastAdded"
import { MiniSaurCard } from "@/components/gallery/MiniSaurCard"
import { trpc } from "@/connection/client/client"
import { SaurType } from "@/types/saurType"
import { useEffect, useState } from "react"

function Main() {
  const { data = [], isFetched, isLoading } = trpc.getSauria.useQuery()
  const [dataSauria, setDataSauria] = useState<Array<SaurType>>([])
  useEffect(() => {
    setDataSauria(() => data)
  }, [isFetched])
  return (
    <div className="h-max grid grid-cols-3 md:grid-cols-2 lg:grid-cols-5 justify-items-center">
      <div className=""></div>
      <div className="col-span-3 max-w-[800px] ">
        {dataSauria.map(dino => (
          <div>
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
