"use client"
import { fetchData } from "@/app/test/search/fetch"
import { SaurType } from "@/types/saurType"
import { useEffect, useState } from "react"
import { MiniSaurCard } from "./saurCard"

export function SaurMap() {
  const [responseData, setResponseData] = useState<Array<SaurType>>([])
  useEffect(() => {
    async function fetched() {
      const data = await fetchData("")
      if (data) {
        setResponseData(data)
        console.log(data)
      }
    }
    fetched()
  }, [])

  return (
    <div className="grid grid-cols-3 w-fit p-2 z-[0] ">
      {responseData
        .sort((a, b) => b.added.localeCompare(a.added))
        .map(item => (
          <div className="divide-y divide-solid">
            <MiniSaurCard {...item} />
            <div></div>
          </div>
        ))}
    </div>
  )
}
//(a, b) => a.genus.localeCompare(b.genus)
//(a, b) => b.genus.localeCompare(a.genus)
//(a, b) => a.temporal.localeCompare(b.temporal)
//(a, b) => b.temporal.localeCompare(a.temporal)
