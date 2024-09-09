import { db } from "@/supabase"
import { user } from "@/supabase/schema"
import { eq } from "drizzle-orm"

 export async function GET(request: Request, {params}: {params: {email: string}}) {
  const email = await db.select().from(user).where(eq(user.email, params.email))
  console.log(params.email)
  return Response.json({email})
}