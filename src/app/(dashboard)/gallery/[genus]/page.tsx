"use client"
import { useEffect, useState } from "react"
import { SaurCard, saurType } from "../../../components/gallery/saurCard"
import { fetchSaur } from "../../search/fetch"

export default function Page({ params }: { params: { genus: string } }) {
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
