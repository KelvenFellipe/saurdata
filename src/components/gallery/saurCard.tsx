import { trpc } from "@/connection/client/client"
import { SaurType } from "@/types/saurType"
import { X } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Loading } from "../global/Loading"

export function SaurCard({ props }: any) {
  const { data = [], isFetched, isLoading } = trpc.getSauriaByGenus.useQuery(props)
  const [result, setResult] = useState<SaurType>()

  useEffect(() => {
    setResult(() => data[0])
  }, [isFetched])

  if (isLoading) {
    return <Loading />
  }
  if (result !== null && result !== undefined) {
    return (
      <div className="flex flex-col dark:bg-black bg-white max-w-fit rounded-xl m-auto text-zinc-400 p-4 text-lg relative ">
        <Link href={"/gallery"}>
          <X className="absolute right-1 top-1 size-7" />
        </Link>

        <div key={result.id} className="flex">
          {result.img.includes(", ") ? (
            result.img.split(", ").map(item => (
              <Link href={item}>
                <img
                  src={item}
                  alt={result.genus}
                  className="rounded-3xl object-center max-w-[700px] max-h-[700px] hover:scale-105 transition ease-in-out duration-300"
                />
              </Link>
            ))
          ) : (
            <Link href={result.img}>
              <img
                src={result.img}
                alt={result.genus}
                className="rounded-3xl object-center max-w-[700px] max-h-[700px] hover:scale-105 transition ease-in-out duration-300"
              />
            </Link>
          )}
          <div className="grid grid-cols-2 grid-rows-4 h-[180px] w-[392px] items-center ml-4 ">
            <p className="col-span-2 text-2xl ">{result.genus}</p>
            <p className="col-span-2">{result.family}</p>
            <p className="col-span-2 flex">
              Species:
              <div>
                {result.species.split(", ").map(item => (
                  <p>{item}</p>
                ))}
              </div>
            </p>
            <p className="col-span-2">Temporal range: {result.temporal} million years</p>
          </div>
        </div>
        <p className="mt-3 flex justify-stretch h-max ">{result.description}</p>
      </div>
    )
  }
}


