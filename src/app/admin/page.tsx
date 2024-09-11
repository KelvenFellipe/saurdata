"use client"

import { sauria } from "@/supabase/schema"
import { getTableConfig } from "drizzle-orm/pg-core"
import { trpc } from "../_trpc/client"

export default function admin() {
  const columns = getTableConfig(sauria)
  const sauriaList = trpc.getSauria.useQuery()

  return (
    <div className="p-5 text-sm grid">
      <table className="text-left">
        <thead>
          <tr className="border-y border-white justify-between ">
            {columns.columns.map(item => (
              <th key={item.name}>{item.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sauriaList.data &&
            sauriaList.data.map(item => (
              <tr key={item.id} className="border-b border-white w-96">
                <td>{item.type}</td>
                <td>{item.genus}</td>
                <td>{item.species.join(", ")}</td>
                <td>{item.temporal}</td>
                <td className="max-w-[400px] truncate">{item.img}</td>
                <td>{item.family}</td>
                <td>{item.type}</td>
                <td>{item.description}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}
