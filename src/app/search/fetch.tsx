// Import the Supabase client
import { supabase } from "@/supabase/config"

// Initialize the client with your Supabase project URL and API key

// Define the table you want to query
const tableName = "dinosauria"

// Fetch data from the table
export async function fetchData(search: string) {
  const { data, error } = await supabase.from(tableName).select("genus , id")
  if (error) {
    console.error("Error fetching data:", error)
    return
  }

  console.log("Fetched data:", data)
  return data
}

// Call the fetchData function to retrieve data
