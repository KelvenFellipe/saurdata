import * as schema from "@/supabase/schema"
import { config } from "dotenv"
import { drizzle } from "drizzle-orm/postgres-js"
import postgres from "postgres"

config({ path: ".env" })

if (process.env.SUPABASE_URL == null)
  throw new Error("DATABASE_URL is required")

const drizzleClient = drizzle(
  postgres(process.env.SUPABASE_URL, {
    prepare: false,
  }),
  { schema }
)

export const db = global.database ?? drizzleClient
if (process.env.NODE_ENV !== "production") globalThis.database = db