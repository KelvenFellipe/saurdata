"use client"
import { useEffect, useState } from "react"
import { fetchSaur } from "../../search/fetch"
import { SaurCard, saurType } from "../saurCard"

export default function page({ params }: { params: { genus: string } }) {
  const search = params.genus
  const [result, setResult] = useState<saurType | null>(null)

  useEffect(() => {
    async function fetched() {
      if (search) {
        const data = (await fetchSaur(search)) as saurType[]
        if (data) setResult(data[0])
      }
    }

    fetched()
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
