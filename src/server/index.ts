import { db } from "@/supabase"
import { family, sauria, type } from "@/supabase/schema"
import z from "zod"
import { publicProcedure, router } from "./trpc"

export const appRouter = router({
  getSauria: publicProcedure.query(async () => {
    return await db.select().from(sauria)
  }),
  addSauria: publicProcedure.input(
    z.object({
      type: z.enum(type.enumValues),
      family: z.enum(family.enumValues),
      genus: z.string(),
      species: z.string().array(),
      img: z.string(),
      temporal: z.string(),
      description: z.string(),
    })).mutation(async (opts) => {
      const { input } = opts
      const [{ insertedID }] = await db.insert(sauria).values(input).returning({ insertedID: sauria.id })
      return insertedID
    })
})

export type AppRouter = typeof appRouter