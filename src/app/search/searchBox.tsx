import { SearchIcon } from "lucide-react"

function SearchBox(){

  return(
    <div className=" flex justify-center m-auto">
      <div className="bg-zinc-100 shadow-2xl rounded-2xl justify-center flex">
        <div className="h-14 w-[800px] bg-white px-4 rounded-xl flex items-center border-2 border-white justify-center shadow-shape gap-3 m-10 hover:shadow-md hover:duration-500 duration-500">
          <input
            placeholder="search"
            type="text"
            className="w-max bg-transparent text-xl placeholder-zinc-400 text-zinc-900 outline-none flex-1 "
          />
            <SearchIcon 
            className="text-zinc-400 transition ease-in-out delay-150 hover:scale-150 duration-300 hover:text-zinc-900"    
          />
        </div>
      </div>
    </div>
    
  )
}
export default SearchBox