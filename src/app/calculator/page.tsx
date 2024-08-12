"use client"

import { Plus } from "lucide-react";
import Key from "../components/Key";
import { Notch } from "../components/Notch";

function Calculator() {
  return(
    <div className="bg-zinc-900 h-screen w-screen">
      <Notch/>
      <Key keyName={[<Plus/>]}/>
          
    </div>
  )
}
export default Calculator