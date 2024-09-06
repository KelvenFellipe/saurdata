import { db } from "@/supabase"
import { sauria } from "@/supabase/schema"
import { eq } from "drizzle-orm"

 export async function GET(request: Request, {params}: {params: {genus: string}}) {
  const genus = await db.select().from(sauria).where(eq(sauria.genus, params.genus))
  console.log(params.genus)
  return Response.json({genus})
}