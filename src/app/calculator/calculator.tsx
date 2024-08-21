"use client"

import { Delete, Divide, Equal, History, Minus, Plus, Radical, X } from "lucide-react"

import { useEffect, useState } from "react"
import { Key } from "../_components/Key"

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

  function numberPress(value: string) {
    if (result == "0" && value == "0") {
      setResult("0")
    } else if (result === "0") {
      setResult(value)
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
    <div className="h-fit w-fit bg-zinc-100 rounded-xl shadow-md flex-col justify-center hover:shadow-2xl hover:duration-300 duration-300 dark:bg-zinc-900">
      <div className="h-[76px] text-right text-zinc-400 select-none p-2">
        <div className="flex justify-between">
          <History className="text-left text-xl" />
          <div className="flex">
            <p>{value1}</p>
            <p>{operator}</p>
            <p>{value2}</p>
            <p>{equalsign}</p>
          </div>
        </div>
        <p className="text-4xl text-wrap">{result}</p>
      </div>

      <div className="grid grid-cols-4 h-fit w-fit p-1 select-none">
        <Key KeyName={"%"} />
        <Key KeyName={"CE"} />
        <Key KeyName={"C"} click={clearResult} />
        <Key KeyName={Delete} click={clearLast} />
        <Key KeyName={"x³"} />
        <Key KeyName={"x²"} />
        <Key KeyName={Radical} />
        <Key KeyName={Divide} click={division} />
        <Key KeyName={"7"} click={() => numberPress("7")} />
        <Key KeyName={"8"} click={() => numberPress("8")} />
        <Key KeyName={"9"} click={() => numberPress("9")} />
        <Key KeyName={X} click={multiplication} />
        <Key KeyName={"4"} click={() => numberPress("4")} />
        <Key KeyName={"5"} click={() => numberPress("5")} />
        <Key KeyName={"6"} click={() => numberPress("6")} />
        <Key KeyName={Minus} click={subtraction} />
        <Key KeyName={"1"} click={() => numberPress("1")} />
        <Key KeyName={"2"} click={() => numberPress("2")} />
        <Key KeyName={"3"} click={() => numberPress("3")} />
        <Key KeyName={Plus} click={addition} />
        <Key KeyName={"+/-"} />
        <Key KeyName={"0"} click={() => numberPress("0")} />
        <Key KeyName={"."} click={() => numberPress(".")} />
        <Key KeyName={Equal} click={equal} />
      </div>
    </div>
  )
}
export default CalculatorComponent