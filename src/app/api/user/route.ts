import { db } from "@/database"
import { user } from "@/database/schema"

 export async function GET() {
  const users = await db.select().from(user)
  return Response.json({users})
}