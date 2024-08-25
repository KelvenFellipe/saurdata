import { supabase } from "@/supabase/config"

const tableName = "dinosauria"

export async function fetchData(search: string) {
  const { data, error } = await supabase.from(tableName).select().ilike("genus", `%${search}%`)
  if (error) {
    console.error("Error fetching data:", error)
    return
  }
  if (data.length === 0) return

  console.log("Fetched data:", data)
  return data
}

export async function fetchSaur(search: string) {
  const { data, error } = await supabase.from(tableName).select().textSearch("genus", `%${search}%`)
  if (error) {
    console.error("Error fetching data:", error)
    return
  }
  if (data.length === 0) return

  console.log("Fetched data:", data)
  return data
}

