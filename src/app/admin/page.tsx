"use client"
import { trpc } from "@/connection/client/client"
import { useSession } from "next-auth/react"
import { redirect } from "next/navigation"
import { DataTableDemo } from "./SauriaList"

export default function DemoPage() {
  const { data } = useSession()
  if (data?.user.role !== "ADMIN") redirect("/")

  const test = trpc.editEnum.useMutation()

  return (
    <div className="max-w-[1800px] w-full m-auto">
      <DataTableDemo />
      <button onClick={() => test.mutate("dsaijdiasj")}>add</button>
    </div>
  )
}
