"use client"
import { type } from "@/supabase/schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { trpc } from "../_trpc/client"
import { SauriaSchema, sauriaSchema } from "./SauriaForm"

interface props {
  click?: any
  data: SauriaSchema
}
export function SauriaUpdate({ click, data }: props) {
  const { register, handleSubmit } = useForm<SauriaSchema>({
    resolver: zodResolver(sauriaSchema),
    defaultValues: data,
  })
  const utils = trpc.useContext()
  const editSauria = trpc.editSauria.useMutation({
    onSettled: () => {
      utils.getSauria.invalidate()
      click()
    },
  })

  return (
    <div className="fixed max-w-full max-h-full flex select-none z-40">
      <div className="p-4 space-y-5 bg-[#111316] text-white text-sm w-fit rounded-xl z-10 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <form
          className="flex flex-col text-white space-y-4 max-w-fit "
          onSubmit={handleSubmit((values: SauriaSchema) => editSauria.mutate(values))}
        >
          <div className="space-x-4 justify-between flex">
            <select
              {...register("type")}
              className="bg-zinc-800 pl-2 w-[250px] border-r-8 border-transparent rounded-xl hover:bg-white/10 "
            >
              <option selected disabled className="bg-zinc-800 hover:bg-white/10">
                Type
              </option>
              {type.enumValues.map(item => (
                <option className="bg-zinc-800 pl-2 p-2 hover:bg-white/10 rounded-xl" value={item}>
                  {item}
                </option>
              ))}
            </select>
            <input
              className="bg-zinc-800 w-[150px] p-2 pl-2 hover:bg-white/10 rounded-xl"
              placeholder="Million years"
              {...register("temporal", { required: true })}
            />
          </div>
          <div className="space-x-4 flex ">
            <input
              className="bg-zinc-800 w-[200px] p-2 pl-2 hover:bg-white/10 rounded-xl"
              placeholder="Genus"
              {...register("genus", { required: true })}
            />
            <input
              className="bg-zinc-800 w-[200px] p-2 pl-2 hover:bg-white/10 rounded-xl"
              placeholder="Family"
              {...register("family", { required: true })}
            />
          </div>
          <input
            className="bg-zinc-800 w-full p-2 pl-2 hover:bg-white/10 rounded-xl"
            placeholder="Species"
            {...register("species", { required: true })}
          />

          <textarea
            className="bg-zinc-800 p-2 pl-2 h-20 resize-none hover:bg-white/10 rounded-xl scrollbar-none"
            placeholder="Image"
            {...register("img", { required: true })}
          />

          <textarea
            className="bg-zinc-800 p-2 pl-2 h-32 resize-none hover:bg-white/10 rounded-xl scrollbar-none"
            placeholder="Description"
            {...register("description", { required: true })}
          />
          <div className="flex justify-between">
            <button
              onClick={click}
              className=" text-white inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-red-600 bg-background hover:text-accent-foreground h-10 px-4 py-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className=" text-white inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
            >
              Update item
            </button>
          </div>
        </form>
      </div>
      <div className="fixed bg-black/60 w-full h-full top-0 left-0"></div>
    </div>
  )
}
