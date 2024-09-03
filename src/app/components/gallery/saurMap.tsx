"use client"
import { useEffect, useState } from "react"
import { fetchData } from "../../(dashboard)/search/fetch"
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
    <div className="grid grid-cols-8 w-fit p-2 z-[0]">
      {responseData.map(item => (
        <MiniSaurCard {...item} />
      ))}
    </div>
  )
}
