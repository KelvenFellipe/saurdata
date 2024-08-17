"use client"

import { Notch } from "@/app/_components/Notch"
import CalculatorComponent from "./calculator"

function Calculator(){
  return (
    <div className="h-screen bg-zinc-200 dark:bg-zinc-800">
      <Notch />
      <CalculatorComponent />
    </div>
  )
}
export default Calculator