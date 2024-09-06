import { db } from "@/supabase"
import { users } from "@/supabase/schema"

 export async function GET() {
  const user = await db.select().from(users)
  return Response.json({user})
}