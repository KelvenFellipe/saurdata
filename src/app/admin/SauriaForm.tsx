import { family, type } from "@/supabase/schema"
import { Form } from "react-hook-form"
import { z } from "zod"
import { trpc } from "../_trpc/client"
import { SubmitButton, useZodForm } from "./Form"

export const validationSchema = z.object({
  type: z.enum(type.enumValues),
  family: z.enum(family.enumValues),
  genus: z.string(),
  species: z.string().array(),
  img: z.string(),
  temporal: z.string(),
  description: z.string(),
})

export function SauriaForm() {
  //   return (
  //     <form onSubmit={handleSubmit((data: any) => mutate(data))} className="flex flex-col text-black">
  //       <input placeholder="type" {...register("type")} />
  //       <input placeholder="family" {...register("family")} />
  //       <input placeholder="genus" {...register("genus")} />
  //       <input placeholder="species" {...register("species")} />
  //       <input placeholder="img" {...register("img")} />
  //       <input placeholder="temporal" {...register("temporal")} />
  //       <input placeholder="description" {...register("description")} />
  //       <input type="submit" value={"Create"} />
  //     </form>
  //   )
  // }

  const mutation = trpc.addSauria.useMutation()

  const form = useZodForm({
    schema: validationSchema,
    defaultValues: {},
  })

  return (
    <>
      <Form
        form={validationSchema}
        handleSubmit={async values => {
          await mutation.mutateAsync(values)
          form.reset()
        }}
        className="space-y-2"
      >
        <div>
          <label>
            Tipe
            <br />
            <input {...form.register("type")} className="border" />
          </label>

          {form.formState.errors.type?.message && (
            <p className="text-red-700">{form.formState.errors.type?.message}</p>
          )}
        </div>
      </Form>
      <SubmitButton
        form={form} // If you place the submit button outside of the form, you need to specify the form to submit
        className="border bg-primary-500 text-white p-2 font-bold"
      >
        Add post
      </SubmitButton>
    </>
  )
}
