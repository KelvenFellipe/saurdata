import { trpc } from "@/connection/client/client"
import { SaurType } from "@/types/saurType"
import { useEffect, useState } from "react"
import { Loading } from "../global/Loading"
import { MenuSection } from "../navbar/MenuSection"
import { ImageCarousel } from "./ImageCarousel"
import { TemporalRange } from "./TemporalRange"

export function SaurCard({ props }: any) {
  const { data = [], isFetched, isLoading } = trpc.getSauriaByGenus.useQuery(props)
  const [result, setResult] = useState<SaurType>()
  const [show, setShow] = useState(false)

  useEffect(() => {
    setResult(() => data[0])
  }, [isFetched])

  if (isLoading) {
    return <Loading />
  }
  if (result !== null && result !== undefined) {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:mx-20 rounded-xl text-black dark:text-white p-4 text-lg relative lg:space-x-10">
        <p className="mt-3 justify-stretch h-max col-span-2 hidden lg:flex">{result.description}</p>
        <div className="bg-background p-4 rounded-xl w-fit col-span-1 ">
          <div className="flex flex-col ml-4">
            <div className="space-y-3 ">
              <p className="text-2xl">
                {result.genus.charAt(0).toUpperCase() + result.genus.slice(1)}
              </p>
              <p className="">{result.family.charAt(0).toUpperCase() + result.family.slice(1)}</p>
              <TemporalRange age={result.temporal} />
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
          <div className="flex flex-col lg:hidden py-3 p-2">
            <MenuSection name="Description">
              <div className={``}>
                <div className="bg-zinc-500 w-full h-[1px]"></div>
                <div className="text-center p-2">
                  <p className="text-start">{result.description}</p>
                </div>
                <div className="bg-zinc-500 w-full h-[1px]"></div>
              </div>
            </MenuSection>
          </div>
          <div className="mt-2">
            <ImageCarousel Imgs={result.img.split(", ")} />
          </div>
        </div>
      </div>
    )
  }
}