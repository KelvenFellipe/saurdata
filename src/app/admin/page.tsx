"use client"
import { SauriaForm } from "./SauriaForm"
import { DataTableDemo } from "./SauriaList"

export default function DemoPage() {
  return (
    <div className="max-w-[1600px] w-full m-auto">
      <DataTableDemo />
      <SauriaForm />
    </div>
  )
}
