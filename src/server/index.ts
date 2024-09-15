import { db } from "@/supabase"
import { sauria, type } from "@/supabase/schema"
import { eq } from "drizzle-orm"
import z from "zod"
import { publicProcedure, router } from "./trpc"

export const appRouter = router({
  getSauria: publicProcedure.query(async () => {
    return await db.select().from(sauria)
  }),
  
  addSauria: publicProcedure.input(
    z.object({
      type: z.enum(type.enumValues),
      family: z.string(),
      genus: z.string(),
      species: z.string(),
      img: z.string(),
      temporal: z.string(),
      description: z.string(),
    })).mutation(async (opts) => {
      const { input } = opts
      return await db.insert(sauria).values(input)
    }),

  deleteSauria: publicProcedure.input(
    z.object({
      id: z.string(),
  })).mutation(async (opts) => {
    const { input } = opts
    return await db.delete(sauria).where(eq(sauria.id, `${input.id}`)).returning()
  }),

  editSauria: publicProcedure.input(
    z.object({
      id: z.string(),
      type: z.enum(type.enumValues),
      family: z.string(),
      genus: z.string(),
      species: z.string(),
      img: z.string(),
      temporal: z.string(),
      description: z.string(),
    })).mutation(async (opts) => {
      const { input } = opts
      return await db.update(sauria).set(input).where(eq(sauria.id, `${input.id}`))
    }),
})

export type AppRouter = typeof appRouter