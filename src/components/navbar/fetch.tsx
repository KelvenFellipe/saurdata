"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

interface fetch {
  family: string
}
interface fetchf {
  genus: string
}

export function FetchFamily({ family }: fetch) {
  const [data, setData] = useState<fetchf>()

  useEffect(() => {
    async function call() {
      await fetch(`http://localhost:3000/api/${family}/`)
        .then(res => res.json())
        .then(data => {
          console.log(data.family), setData(() => data.family)
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
              className="text-left text-zinc-200 px-2 py-1 ml-4"
              key={item.genus}
            >
              {item.genus}
            </Link>
          ))}
    </div>
  )
}
