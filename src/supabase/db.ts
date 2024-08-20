import { drizzle } from "drizzle-orm/postgres-js"
import postgres from "postgres"

const connectionString = process.env.NEXT_PUBLIC_SUPABASE_URL as string
const client = postgres(connectionString, { prepare: false })
export const db = drizzle(client)

