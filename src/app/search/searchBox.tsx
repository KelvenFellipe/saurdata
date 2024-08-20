"use client"
import { SearchIcon } from "lucide-react"

interface SearchProps {
  setSearch: React.Dispatch<React.SetStateAction<string>>
  search: any
}

export function SearchBox({ search, setSearch }: SearchProps) {
  return (
    <div
      className="h-12 w-[500px] bg-white p-4 rounded-xl flex items-center justify-center shadow-shape gap-3 m-2 
        hover:shadow-md hover:duration-300 duration-300 dark:bg-black"
    >
      <input
        onChange={e => setSearch(e.target.value)}
        value={search}
        placeholder="search"
        type="text"
        className="w-max bg-transparent text-xl placeholder-zinc-400 text-zinc-600 dark:text-zinc-300 outline-none flex-1"
      />
      <SearchIcon className="text-zinc-400 transition ease-in-out hover:scale-125 duration-300 hover:text-black dark:hover:text-white" />
    </div>
  )
}
export default SearchBox
