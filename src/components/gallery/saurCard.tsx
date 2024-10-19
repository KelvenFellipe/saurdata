import { trpc } from "@/connection/client/client"
import { SaurType } from "@/types/saurType"
import { useEffect, useState } from "react"
import { Loading } from "../global/Loading"
import { ImageOVerlay } from "./ImageOverlay"
import { TemporalRange } from "./TemporalRange"

export function SaurCard({ props }: any) {
  const { data = [], isFetched, isLoading } = trpc.getSauriaByGenus.useQuery(props)
  const [result, setResult] = useState<SaurType>()
  const [open, setOpen] = useState(false)
  const [imgs, setImgs] = useState("")

  useEffect(() => {
    setResult(() => data[0])
  }, [isFetched])
  console.log(result?.added)
  if (isLoading) {
    return <Loading />
  }
  if (result !== null && result !== undefined) {
    return (
      <div className="grid grid-cols-3 rounded-xl m-auto text-white p-4 text-lg relative mx-40 space-x-10">
        <p className="mt-3 flex justify-stretch h-max col-span-2">{result.description}</p>
        <div className="bg-background p-4 rounded-xl w-fit">
          <div className="flex flex-col    ml-4">
            <div className="space-y-3">
              <p className="text-2xl">
                {result.genus.charAt(0).toUpperCase() + result.genus.slice(1)}
              </p>
              <p className="">{result.family.charAt(0).toUpperCase() + result.family.slice(1)}</p>
              <div className="ml-2">
                <TemporalRange age={result.temporal} />
              </div>
            </div>

            <div className="flex flex-col text-start space-y-2">
              <p>Species:</p>
              <div className="space-y-1">
                {result.species.split(", ").map(item => (
                  <p key={item} className="pl-4">
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div key={result.id} className="flex flex-col cursor-pointer w-[400px] mt-2">
            {result.img.includes(", ") ? (
              result.img
                .split(", ")
                .map(item => (
                  <img
                    key={item}
                    src={item}
                    alt={result.genus}
                    className="rounded-md object-center w-fit h-fit transition ease-in-out duration-300"
                    onClick={() => (setImgs(item), setOpen(() => true))}
                  />
                ))
            ) : (
              <img
                key={result.id}
                src={result.img}
                alt={result.genus}
                className="rounded-md object-center w-fit"
                onClick={() => (setImgs(result.img), setOpen(() => true))}
              />
            )}
          </div>
        </div>

        {open && <ImageOVerlay src={imgs} onClick={() => setOpen(() => false)} />}
      </div>
    )
  }
}
//grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3

