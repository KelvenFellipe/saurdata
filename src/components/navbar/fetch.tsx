"use client"

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
    <div>
      {data !== undefined && Object.values(data).map(item => <p key={item.genus}>{item.genus}</p>)}
    </div>
  )
}
