"use client"
import { useEffect, useState } from "react"
import { fetchData } from "../search/fetch"
import { DinoCard, dinoType } from "./dinoCard"
import { getData } from "./returnData"

export default function page() {
  const search = getData()
  console.log(search)
  const [result, setResult] = useState<Array<dinoType>>([])

  useEffect(() => {
    async function fetched() {
      if (search) {
        const data = await fetchData(search)
        console.log(data)
        if (data) setResult(Object.values(data))
      }
    }
    fetched()
  }, [])

  return (
    <div>{process.env.customKey !== undefined && <DinoCard data={process.env.customKey} />}</div>
  )
}
