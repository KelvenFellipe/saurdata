"use client"
import { useSession } from "next-auth/react"
import { DataTableDemo } from "./SauriaList"

export default function DemoPage() {
  const { data } = useSession()
  //  if (data?.user.role !== "ADMIN") redirect("/")
  return (
    <div className="max-w-[1800px] w-full m-auto">
      <DataTableDemo />
    </div>
  )
}
