"use client"
import { SaurType } from "@/types/saurType"
import Link from "next/link"
import { useEffect, useState } from "react"

export function FetchFamily(family: string) {
  const [data, setData] = useState<SaurType>()

  useEffect(() => {
    async function call() {
      await fetch(`http://localhost:3000/api/${family}/`)
        .then(res => res.json())
        .then(data => {
          setData(() => data.family)
        })
    }
    call()
  }, [])
  console.log(data)
  return (
    <div className="flex flex-col">
      {data !== undefined &&
        Object.values(data)
          .sort()
          .map(item => (
            <Link
              href={`/gallery/${item.genus}`}
              className="text-left text-zinc-300 px-2 py-1 rounded-xl hover:text-white"
              key={item.genus}
            >
              <li>{item.genus}</li>
            </Link>
          ))}
    </div>
  )
}
