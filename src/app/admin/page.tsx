"use client"
import { DataTableDemo } from "@/components/admin/SauriaList"
import { useSession } from "next-auth/react"
import { redirect } from "next/navigation"


export default function DemoPage() {
  const { data } = useSession()
  if (data?.user.role !== "ADMIN") redirect("/")

  return (
    <div className="max-w-[1800px] w-full m-auto">
      <DataTableDemo />
    </div>
  )
}
