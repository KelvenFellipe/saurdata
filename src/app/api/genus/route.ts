import { db } from "@/supabase"
import { sauria } from "@/supabase/schema"

 export async function GET() {
  const genus = await db.select().from(sauria)
  return Response.json({genus})
}