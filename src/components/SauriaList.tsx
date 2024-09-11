"use client"
import { trpc } from "@/app/_trpc/client"

export default function TodoList() {
  const getSauria = trpc.getSauria.useQuery()

  return (
    <div>
      <div>{JSON.stringify(getSauria.data)}</div>
    </div>
  )
}
