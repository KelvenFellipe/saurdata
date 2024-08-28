import type { Metadata } from "next"
import CalculatorComponent from "./calculator"

export const metadata: Metadata = {
  title: "calculator | saurdata",
}

function Calculator() {
  return (
    <div className="h-max justify-center grid">
      <CalculatorComponent />
    </div>
  )
}
export default Calculator
