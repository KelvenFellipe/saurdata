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

  if (isLoading) {
    return <Loading />
  }
  if (result !== null && result !== undefined) {
    return (
      <div className=" rounded-xl m-auto text-white p-4 text-lg relative ">
        <div className="grid grid-cols-2 grid-rows-4 h-fit w-fit items-center ml-4 ">
          <p className="col-span-2 text-2xl ">
            {result.genus.charAt(0).toUpperCase() + result.genus.slice(1)}
          </p>
          <TemporalRange age={result.temporal} />
          
          <p className="col-span-2">{result.family}</p>
          <div className="col-span-2 flex">
            Species:
            <div>
              {result.species.split(", ").map(item => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </div>
          <p className="col-span-2">Temporal range: {result.temporal} million years</p>
        </div>

        <div key={result.id} className="flex flex-col cursor-pointer max-w-[400px]">
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

        <p className="mt-3 flex justify-stretch h-max ">{result.description}</p>
        {open && <ImageOVerlay src={imgs} onClick={() => setOpen(() => false)} />}
      </div>
    )
  }
}
//grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3

