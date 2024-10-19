"use client"
import { Alert } from "@/components/global/Alert"
import { useState } from "react"

function Page() {
  const [alert, setAlert] = useState(false)
  return (
    <div className="flex justify-center h-screen items-center ">
      <button onClick={() => setAlert(true)} className="p-2 rounded-xl bg-blue-600">
        Alert
      </button>
      {alert && <Alert text="testing" close={() => setAlert(false)} />}
    </div>
  )
}
export default Page
