"use client"

import { Notch } from "@/components/Notch"
import CalculatorComponent from "./calculator"

function Calculator(){
  return (
    <div className="bg-zinc-300 h-screen">
      <Notch/>
      <CalculatorComponent />
    </div>

    
  )
}
export default Calculator