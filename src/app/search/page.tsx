"use client"
import { Notch } from "../../components/Notch";
import SearchBox from "./searchBox";

function Search() {
  return(
    <div className="bg-zinc-900 h-screen w-screen">
      <Notch/>
      <SearchBox/>
          
    </div>
  )
}
export default Search