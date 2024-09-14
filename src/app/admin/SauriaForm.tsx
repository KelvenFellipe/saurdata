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

interface props {
  click?: any
}
export function SauriaForm({ click }: props) {
  const { register, handleSubmit } = useForm<SauriaSchema>({
    resolver: zodResolver(sauriaSchema),
  })

  const addsauria = trpc.addSauria.useMutation({
    onSettled: () => {
      click()
    },
  })
  return (
    <div className="fixed max-w-full max-h-full flex select-none z-40">
      <div className="p-4 space-y-5 bg-[#111316] text-white text-base w-fit rounded-xl z-10 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <form
          className="flex flex-col text-white space-y-4 max-w-fit "
          onSubmit={handleSubmit((values: SauriaSchema) => addsauria.mutate(values))}
        >
          <div className="space-x-4 justify-between flex">
            <select
              {...register("type")}
              className="bg-zinc-800 pl-2 w-[200px] border-r-8 border-transparent rounded-xl hover:bg-white/10 "
            >
              <option selected disabled className="bg-zinc-800 hover:bg-white/10">
                type
              </option>
              {type.enumValues.map(item => (
                <option className="bg-zinc-800 pl-2 p-2 hover:bg-white/10 rounded-xl" value={item}>
                  {item}
                </option>
              ))}
            </select>
            <select
              {...register("family")}
              className="bg-zinc-800 w-[200px] pl-2 border-r-8 border-transparent selecet p-2 hover:bg-white/10 rounded-xl"
            >
              <option selected disabled className="bg-zinc-800 hover:bg-white/10">
                family
              </option>
              {family.enumValues.map(item => (
                <option className="bg-zinc-800 p-2 pl-2 hover:bg-white/10 rounded-xl" value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <input
            className="bg-zinc-800 p-2 pl-2 hover:bg-white/10 rounded-xl"
            placeholder="genus"
            required
            {...register("genus")}
          />
          <div className="space-x-4 flex ">
            <input
              className="bg-zinc-800 w-[200px] p-2 pl-2 hover:bg-white/10 rounded-xl"
              placeholder="species"
              required
              {...register("species")}
            />
            <input
              className="bg-zinc-800 w-[200px] p-2 pl-2 hover:bg-white/10 rounded-xl"
              placeholder="Ma"
              required
              {...register("temporal")}
            />
          </div>
          <input
            className="bg-zinc-800 p-2 pl-2 hover:bg-white/10 rounded-xl"
            placeholder="img"
            required
            {...register("img")}
          />

          <textarea
            className="bg-zinc-800 p-2 pl-2 h-20 resize-none  hover:bg-white/10 rounded-xl"
            placeholder="description"
            required
            {...register("description")}
          />
          <button
            type="submit"
            className=" text-white inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
          >
            Add item
          </button>
        </form>
      </div>
      <div className="fixed bg-black/60 w-full h-full top-0 left-0" onClick={click}></div>
    </div>
  )
}
