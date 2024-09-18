import { type } from "@/database/schema"
import { z } from "zod"

export const sauriaSchem = z.object({
  id: z.string(),
  type: z.enum(type.enumValues),
  family: z.string(),
  genus: z.string(),
  species: z.string(),
  img: z.string(),
  temporal: z.string(),
  description: z.string(),
  added: z.string().datetime()
})
export const sauriaSchema = sauriaSchem.omit({ added: true })
export const sauriaSchemaNoID = sauriaSchema.omit({ id: true })
export type SauriaSchema = z.infer<typeof sauriaSchema>
export type SauriaSchemaNoID = z.infer<typeof sauriaSchemaNoID>