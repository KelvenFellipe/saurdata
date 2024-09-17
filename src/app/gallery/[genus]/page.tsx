"use client"
import { SaurCard } from "@/components/gallery/saurCard"
import { SaurType } from "@/types/saurType"
import { useEffect, useState } from "react"
import { fetchSaur } from "../../test/search/fetch"

export default function Page({ params }: { params: { genus: string } }) {
  const search = params.genus
  const [result, setResult] = useState<SaurType | null>(null)

  useEffect(() => {
    async function fetched() {
      if (search) {
        const data = (await fetchSaur(search)) as SaurType[]
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
