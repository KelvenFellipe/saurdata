"use client"
import { sauria } from "@/supabase/schema"
import { getTableConfig } from "drizzle-orm/pg-core"
import { trpc } from "../../../trpc/client/client"

function admin() {
  const columns = getTableConfig(sauria)
  const users = trpc.sauriaList.useQuery()
  return (
    <div className="p-5 text-sm">
      <table className="text-center grid">
        <thead>
          <tr className="border border-white justify-between ">
            {columns.columns.map(item => (
              <th>{item.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {users.data?.map(item => (
            <tr key={item.id} className="border-b border-white w-96">
              <td>{item.id}</td>
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
export default admin
