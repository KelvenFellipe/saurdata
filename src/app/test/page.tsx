"use client"
import { useSession } from "next-auth/react"

function Page() {
  const session = useSession()

  return (
    <div>
      <p>{JSON.stringify(session)}</p>
    </div>
  )
}
export default Page
