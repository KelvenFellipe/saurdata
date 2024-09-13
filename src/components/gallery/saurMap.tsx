"use client"
import { fetchData } from "@/app/test/search/fetch"
import { useEffect, useState } from "react"
import { MiniSaurCard, saurType } from "./saurCard"

export function SaurMap() {
  const [responseData, setResponseData] = useState<Array<saurType>>([])
  useEffect(() => {
    async function fetched() {
      const data = await fetchData("")
      if (data) {
        setResponseData(data)
      }
    }
    fetched()
  }, [])
  return (
    <div className="grid grid-cols-4 w-fit p-4 z-[0] divide-y divide-solid">
      {responseData.map(item => (
        <MiniSaurCard {...item} />
      ))}
    </div>
  )
}
