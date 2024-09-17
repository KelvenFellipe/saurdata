"use client"
import { trpc } from "@/connection/client/client"

export default function TodoList() {
  const getSauria = trpc.getSauria.useQuery()

  return (
    <div>
      <div>{JSON.stringify(getSauria.data)}</div>
    </div>
  )
}
