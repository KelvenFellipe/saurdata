import { db } from "@/supabase"
import { user } from "@/supabase/schema"

 export async function GET() {
  const users = await db.select().from(user)
  return Response.json({users})
}