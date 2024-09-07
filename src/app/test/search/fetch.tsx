"use server"
import { db } from "@/supabase"
import { sauria } from "@/supabase/schema"
import { ilike, like } from "drizzle-orm"

export async function fetchData(search: string) {
  const data = await db
    .select()
    .from(sauria)
    .where(ilike(sauria.genus, `%${search}%`))

  if (data.length === 0) return

  log(data)
  return data
}

export async function fetchSaur(search: any) {
  const data = await db
    .select()
    .from(sauria)
    .where(like(sauria.genus, `%${search}%`))

  if (data.length === 0) return

  log(data)
  return data
}

function log(data: any) {
  console.log("Fetched data:", data)
}