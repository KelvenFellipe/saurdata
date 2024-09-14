"use client"
import { family, type } from "@/supabase/schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { trpc } from "../_trpc/client"

export const sauriaSchema = z.object({
  type: z.enum(type.enumValues),
  family: z.enum(family.enumValues),
  genus: z.string(),
  species: z.string(),
  img: z.string(),
  temporal: z.string(),
  description: z.string(),
})

export type SauriaSchema = z.infer<typeof sauriaSchema>

export function SauriaForm() {
  const { register, handleSubmit } = useForm<SauriaSchema>({
    resolver: zodResolver(sauriaSchema),
  })

  const addsauria = trpc.addSauria.useMutation()

  return (
    <form
      className="flex flex-col text-black"
      onSubmit={handleSubmit((values: SauriaSchema) => addsauria.mutate(values))}
    >
      <input placeholder="type" {...register("type")} />
      <input placeholder="family" {...register("family")} />
      <input placeholder="genus" {...register("genus")} />
      <input placeholder="species" {...register("species")} />
      <input placeholder="img" {...register("img")} />
      <input placeholder="temporal" {...register("temporal")} />
      <input placeholder="description" {...register("description")} />
      <button type="submit" className="bg-white p-2 ">
        Add
      </button>
    </form>
  )
}
