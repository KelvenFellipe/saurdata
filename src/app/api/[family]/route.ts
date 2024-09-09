import { db } from "@/supabase"
import { sauria } from "@/supabase/schema"
import { eq } from "drizzle-orm"

 export async function GET(request: Request, {params}: {params: {family: any}}) {
  const family = await db.select({genus: sauria.genus}).from(sauria).where(eq(sauria.family, params.family))
  console.log(params.family)
  return Response.json({family})
}