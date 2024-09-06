import { db } from "@/supabase"
import { users } from "@/supabase/schema"
import { eq } from "drizzle-orm"

 export async function GET(request: Request, {params}: {params: {email: string}}) {
  const email = await db.select().from(users).where(eq(users.email, params.email))
  console.log(params.email)
  return Response.json({email})
}