"use client"
import { supabase } from "@/supabase/config"
import { QueryClient } from "@tanstack/react-query"
import { useState } from "react"
import { Notch } from "../_components/Notch"
import SearchBox from "./searchBox"
import { SearchResponse } from "./searchResponse"

const queryClient = new QueryClient()

const fetchItems = async () => {
  const { data, error } = await supabase.from("items").select("*")
  if (error) throw new Error(error.message)
  return data
}

async function Search() {
  const [search, setSearch] = useState("")

  return (
    <div className="h-screen bg-zinc-200 dark:bg-zinc-800">
      <Notch />
      <div className="bg-zinc-100 w-fit rounded-xl justify-center flex-col shadow-md hover:shadow-2xl hover:duration-300 duration-300 dark:bg-zinc-900 p-[1px] mx-auto">
        <SearchBox setSearch={setSearch} search={search} />
        <div className="bg-zinc-200 p-2 m-2 rounded-xl flex-col text-xl items-center">
          {search !== "" &&
            responseData.map(response => (
              <SearchResponse response={(response.genus, response.species)} key={response.id} />
            ))}
        </div>
      </div>
    </div>
  )
}
export default Search
