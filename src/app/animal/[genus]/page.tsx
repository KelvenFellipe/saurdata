"use client"
import { useEffect, useState } from "react"
import { fetchData } from "../../search/fetch"
import { SaurCard, saurType } from "../saurCard"

export default function page({ params }: { params: { genus: string } }) {
  const search = params.genus
  const [result, setResult] = useState<saurType | null>(null)

  useEffect(() => {
    async function fetched() {
      if (search) {
        const data = (await fetchData(search)) as saurType[]
        if (data) setResult(data[data.length - 1])
      }
    }

    fetched()
    console.log("Carregado", result)
  }, [search])
  if (result !== null && result !== undefined) {
    return <SaurCard {...result} />
  }

  return (
    <div className="flex justify-center">
      <div>loading</div>
    </div>
  )
}
