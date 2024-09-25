import { db } from "@/database"
import { sauria, type, user } from "@/database/schema"
import { eq, sql } from "drizzle-orm"
import z from "zod"
import { adminProcedure, publicProcedure, router } from "./trpc"

export const appRouter = router({
  getSauria: publicProcedure.query(async () => {
    return await db.select().from(sauria)
  }),

  getSauriaByGenus: publicProcedure.input(z.string()).query(async (opts) => {
    const {input} = opts
    return await db.select().from(sauria).where(eq(sauria.genus, `${input}`))
  }),

  addSauria: adminProcedure.input(
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

  deleteSauria: adminProcedure.input(
    z.object({
      id: z.string(),
  })).mutation(async (opts) => {
    const { input } = opts
    return await db.delete(sauria).where(eq(sauria.id, `${input.id}`)).returning()
  }),

  editSauria: adminProcedure.input(
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
    
  getUsersByID: adminProcedure.input(z.string())
  .query(async (opts) => {
    const { input } = opts
    return await db.select().from(user).where(eq(user.id, input))
  }),
  getUsersByName: adminProcedure.input(z.string())
  .query(async (opts) => {
    const { input } = opts
    return await db.select().from(user).where(eq(user.name, input))
  }),
  editEnum: adminProcedure.input(z.string()).mutation(async (opts) => {
    const {input} = opts
    console.log("typed: "+ input)
    return await db.execute(sql.raw(`alter type test add value '${input}'`))
  })

})

export type AppRouter = typeof appRouter

// .output(z.object({
//   id: z.string(),
//   name: z.string(),
//   email: z.string(),
//   emailVerified: z.string().nullable(),
//   image: z.string(),
//   notifications: z.array(z.object({
//     notification: z.string(),
//     read: z.boolean()
//   }))
// }))