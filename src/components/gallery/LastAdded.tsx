"use client"

import { trpc } from "@/connection/client/client"
import { SaurType } from "@/types/saurType"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export function LastAdded() {
  const { data = [], isFetched, isLoading } = trpc.getSauriaNew.useQuery()
  const [result, setResult] = useState<Array<SaurType>>([])
  const [lenght, setLenght] = useState(6)
  const router = useRouter()

  useEffect(() => {
    setResult(() => data.slice(0, lenght))
  }, [isFetched, lenght])

  return (
    <div className={`w-[300px] rounded-xl space-y-2 text-sm ${isLoading && "hidden"}`}>
      <p className="h-10 bg-black rounded-xl flex justify-center items-center">Last Added</p>
      <div
        className={`max-h-[800px] overflow-y-scroll scrollbar-none space-y-2 ${
          lenght > 6 && "hover:max-w-[310px] hover:scrollbar-thin"
        } scrollbar-thumb-transparent-transparent`}
      >
        {result.map(item => (
          <div
            className="flex h-fit overflow-auto bg-black p-2 rounded-xl space-x-2 cursor-pointer"
            onClick={() => router.push(`/gallery/${item.genus}`)}
          >
            <div className="flex flex-col flex-1 space-y-2 flex-wrap">
              <div className="max-w-[200px] max-h-[100px] text-wrap truncate">
                {item.description}
              </div>
            </div>
            <img
              src={item.img.includes(", ") ? item.img.split(", ")[0] : item.img}
              alt={item.genus}
              className="h-[100px] w-[100px] aspect-square object-cover blur-[0.5px] rounded-lg "
            />
          </div>
        ))}
      </div>
      <p
        className="h-10 bg-black rounded-xl flex justify-center items-center cursor-pointer"
        onClick={() => setLenght(() => lenght + 6)}
      >
        Show more
      </p>
    </div>
  )
}
