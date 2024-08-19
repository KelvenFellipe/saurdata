import "dotenv/config"
import { SearchIcon } from "lucide-react"

function SearchBox() {
  return (
    <div className="flex justify-center m-auto">
      <div className="bg-zinc-100 rounded-xl justify-center flex shadow-md hover:shadow-2xl hover:duration-300 duration-300 dark:bg-zinc-900">
        <div
          className="h-12 w-[500px] bg-white p-4 rounded-xl flex items-center justify-center shadow-shape gap-3 m-2 
        hover:shadow-md hover:duration-300 duration-300 dark:bg-black"
        >
          <input
            placeholder="search"
            type="text"
            className="w-max bg-transparent text-xl placeholder-zinc-400 text-zinc-800 dark:text-zinc-200 outline-none flex-1"
          />
          <SearchIcon className="text-zinc-400 transition ease-in-out hover:scale-125 duration-300 hover:text-black dark:hover:text-white" />
        </div>
      </div>
    </div>
  )
}
export default SearchBox
