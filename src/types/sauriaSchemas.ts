import { type } from "@/database/schema"
import { z } from "zod"

export const sauriaSchema = z.object({
  id: z.string(),
  type: z.enum(type.enumValues),
  family: z.string(),
  genus: z.string(),
  species: z.string(),
  img: z.string(),
  temporal: z.string(),
  description: z.string(),
})
export const sauriaSchemaNoID = sauriaSchema.omit({ id: true })
export type SauriaSchema = z.infer<typeof sauriaSchema>
export type SauriaSchemaNoID = z.infer<typeof sauriaSchemaNoID>