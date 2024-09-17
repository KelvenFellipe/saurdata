"use server"
import { db } from "@/database"
import { sauria } from "@/database/schema"
import { eq, ilike } from "drizzle-orm"

export async function fetchData(search: string) {
  const data = await db
    .select()
    .from(sauria)
    .where(ilike(sauria.genus, `%${search}%`))

  if (data.length === 0) return

  // log(data)
  return data
}

export async function fetchSaur(search: any) {
  const data = await db.select().from(sauria).where(eq(sauria.genus, search))

  if (data.length === 0) return

  // log(data)
  return data
}
export async function fetcha() {
  const data = await db.select().from(sauria)

  if (data.length === 0) return

  // log(data)
  return data
}

// function log(data: any) {
//   console.log("Fetched data:", data)
// }
