"use client"
import { Alert } from "@/components/global/Alert"
import { NotificationOptions } from "@/components/navbar/NotificationOptions"
import { useState } from "react"
import Stopwatch from "./stopwatch"

function Page() {
  const [alert, setAlert] = useState(false)
  return (
    <div className="flex justify-center h-screen items-center ">
      <button onClick={() => setAlert(true)} className="p-2 rounded-xl bg-blue-600 ">
        Alert
      </button>
      <Stopwatch />
      <NotificationOptions onClick={() => console.log("test")} />
      {alert && <Alert text="testing" close={() => setAlert(false)} />}
    </div>
  )
}
export default Page
