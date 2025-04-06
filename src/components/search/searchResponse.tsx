import { SaurType } from "@/types/schemaTypes"
import { Search } from "lucide-react"
import { useRouter } from "next/navigation"

export const SearchResponse = ({ data, onClick }: { data: SaurType; onClick?: any }) => {
  const router = useRouter()
  return (
    <div
      className="flex  px-3 py-2 items-center ease-in-out cursor-pointer duration-500 text-sm text-zinc-200 space-x-2 hover:bg-zinc-700/50 dark:hover:text-white"
      onClick={() => (router.push(`/gallery/${data.genus}`), onClick())}
    >
      <Search className="size-5" />
      <p>{data.genus}</p>
    </div>
  )
}
