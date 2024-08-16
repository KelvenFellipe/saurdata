"use client"

import { Delete, Divide, Equal, History, Minus, Plus, X } from "lucide-react";

import { useEffect, useState } from "react"
import { Key } from "../../components/Key"

function CalculatorComponent() {
  const [result, setResult] = useState("")
  const [value1, setValue1] = useState<number | undefined>()
  const [value2, setValue2] = useState<number | undefined>()
  const [operator, setOperator] = useState("")
  const [equalsign, setEqualsign] = useState("")
  let data: any = undefined

  useEffect(() => {
    if (value2 !== undefined) {
      data = math()
      setResult(data.toString())
    }
  }, [equalsign, value2])

  function math() {
    if (value1 !== undefined && value2 !== undefined) {
      return operator === "+"
        ? value1 + value2
        : operator === "-"
        ? value1 - value2
        : operator === "×"
        ? value1 * value2
        : operator === "÷" && value1 / value2
    }
  }

  function numberPress(value: number) {
    if (result == "0" && value == 0) {
      setResult("0")
    } else if (result === "0") {
      setResult(value.toString())
    } else {
      setResult(result + value)
    }
  }

  function addition() {
    if (result !== "") {
      setValue1(Number(result))
      setOperator("+")
      setResult("")
    }
    if (operator !== "") {
      data = value1 && value2 && value1 + value2
      console.log("aa")
    }
  }

  function subtraction() {
    if (result !== "") {
      setValue1(Number(result))
      setOperator("-")
      setResult("")
    }
    if (operator !== "") {
      data = value1 && value2 && value1 + value2
      console.log("aa")
    }
  }
  function multiplication() {
    if (result !== "") {
      setValue1(Number(result))
      setOperator("×")
      setResult("")
    }
    if (operator !== "") {
      data = value1 && value2 && value1 + value2
      console.log("aa")
    }
  }

  function division() {
    if (result !== "") {
      setValue1(Number(result))
      setOperator("÷")
      setResult("")
    }
    if (operator !== "") {
      data = value1 && value2 && value1 + value2
      console.log("aa")
    }
  }

  function equal() {
    if (value1 !== undefined) {
      setEqualsign("=")
      console.log(result)
      setValue2(Number(result))
    }
  }

  function clearResult() {
    setValue1(undefined)
    setValue2(undefined)
    setResult("0")
    setOperator("")
    setEqualsign("")
  }

  function clearLast() {
    if (result.length === 1 || result === " 0") {
      setResult("0")
    } else setResult(result.substring(0, result.length - 1))
  }

  return (
    <div className="flex justify-center">
      <div className="h-fit w-fit bg-zinc-100 rounded-xl shadow-md hover:shadow-2xl hover:duration-500 duration-500 dark:bg-zinc-900 ">
        <div className="h-[96px] w-max] p-1 text-right text-3xl text-zinc-900 select-none dark:text-zinc-200">
          <div className="flex justify-between ">
            <History className="text-left" />
            <div className="flex">
              <p>{value1}</p>
              <p>{operator}</p>
              <p>{value2}</p>
              <p>{equalsign}</p>
            </div>
          </div>
          <p className="text-5xl">{result}</p>
        </div>

        <div className="grid grid-cols-4 h-fit w-fit p-2 select-none">
          <Key keyName={["%"]} />
          <Key keyName={[<Plus />]} />
          <Key keyName={["CE"]} click={clearResult} />
          <Key keyName={[<Delete />]} click={clearLast} />
          <Key keyName={[<Plus />]} />
          <Key keyName={[<Plus />]} />
          <Key keyName={[<Plus />]} />
          <Key keyName={[<Divide />]} click={division} />
          <Key keyName={[7]} click={() => numberPress(7)} />
          <Key keyName={[8]} click={() => numberPress(8)} />
          <Key keyName={[9]} click={() => numberPress(9)} />
          <Key keyName={[<X />]} click={multiplication} />
          <Key keyName={[4]} click={() => numberPress(4)} />
          <Key keyName={[5]} click={() => numberPress(5)} />
          <Key keyName={[6]} click={() => numberPress(6)} />
          <Key keyName={[<Minus />]} click={subtraction} />
          <Key keyName={[1]} click={() => numberPress(1)} />
          <Key keyName={[2]} click={() => numberPress(2)} />
          <Key keyName={[3]} click={() => numberPress(3)} />
          <Key keyName={[<Plus />]} click={addition} />
          <Key keyName={[<Plus />]} />
          <Key keyName={[0]} click={() => numberPress(0)} />
          <Key keyName={["."]} />
          <Key keyName={[<Equal />]} click={equal} />
        </div>
      </div>
    </div>
  )
}
export default CalculatorComponent