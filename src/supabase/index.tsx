import { DinosauriaTable } from "@/supabase/schema"
import { drizzle } from "drizzle-orm/postgres-js"
import postgres from "postgres"

const connectionString = process.env.DATABASE_URL as string
const client = postgres(connectionString, { prepare: false })
const db = drizzle(client)

async function show() {
  const allUsers = await db.select().from(DinosauriaTable)
  console.log(allUsers)
}
show()
