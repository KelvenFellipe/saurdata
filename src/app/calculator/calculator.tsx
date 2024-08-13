"use client"

import { Delete, Divide, Equal, History, Minus, Plus, X } from "lucide-react";

import { Key } from "../../components/Key";
import { Notch } from "../../components/Notch";

function CalculatorComponent() {
  return(
    <div className="bg-zinc-900 h-screen w-screen">
        <Notch/>
        <div className="h-fit w-fit bg-zinc-200 rounded-md">
          <div className="h-[96px] w-max] p-1 text-right text-3xl text-zinc-900">
            <div className="flex justify-between">
              <History/>
              <p>0</p>
            </div>
            <p className="text-5xl">0</p>
          </div>
          
          <div className="grid grid-cols-4 h-fit w-fit p-1">
            <Key keyName={["%"]}/>
            <Key keyName={[<Plus/>]}/>
            <Key keyName={["CE"]}/>
            <Key keyName={[<Delete/>]}/>
            <Key keyName={[<Plus/>]}/>
            <Key keyName={[<Plus/>]}/>
            <Key keyName={[<Plus/>]}/>
            <Key keyName={[<Divide/>]}/>
            <Key keyName={[9]}/>
            <Key keyName={[8]}/>
            <Key keyName={[7]}/>
            <Key keyName={[<X/>]}/>
            <Key keyName={[6]}/>
            <Key keyName={[5]}/>
            <Key keyName={[4]}/>
            <Key keyName={[<Minus/>]}/>
            <Key keyName={[3]}/>
            <Key keyName={[2]}/>
            <Key keyName={[1]}/>
            <Key keyName={[<Plus/>]}/>
            <Key keyName={[<Plus/>]}/>
            <Key keyName={[0]}/>
            <Key keyName={["."]}/>
            <Key keyName={[<Equal/>]}/>
          </div>
        </div>
    </div>
  )
}
export default CalculatorComponent