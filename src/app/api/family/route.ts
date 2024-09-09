import { db } from "@/supabase"
import { sauria } from "@/supabase/schema"

 export async function GET() {
  const family = await db.select({name: sauria.family}).from(sauria)
  return Response.json({family})
}