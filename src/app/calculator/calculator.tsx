"use client"

import { Delete, Divide, Equal, History, Minus, Plus, X } from "lucide-react";

import { useState } from "react";
import { Key } from "../../components/Key";

function CalculatorComponent() {

  const [result, setResult] = useState("")
  const [value1, setValue1] = useState<number | undefined>()
  const [value2, setValue2] = useState<number | undefined>()
  const [operator, setOperator] = useState("")
  const [equalsign, setEqualsign] = useState("")
  let hold:any = undefined 
  let data:any = undefined
  
  // useEffect(() => {
  //   console.log(result)
  //   hold = result
    
  // },[result]);
   
    
  function numberPress(value:number){
    let inputa: string = " " + value
    inputa = inputa+ value
      
      
    

    console.log("value:",inputa, "result:",result)
    // if(value === Number(result))return value
    // if(result == "0" && value == 0){
    //   setResult("0")
    // } else if(result === "0"){
    //   setResult(value.toString())
    // } else{
    //   setResult(result + value)
    // }

  }

  function math(values1:number, values2:number){
    let number1 = Number(values1)
    let number2 = Number(values2)

    let data = number1 + number2
    return data
  }

  function addition(){
    if(result !== ""){
      setValue1(Number(result))
      setOperator("+")
    }
    if(value1 !== undefined){
      setOperator("+")
      setResult("")
    }
    if(operator !== ""){
      data =  (value1&& value2&& value1 + value2)
      console.log("aa")
    }

    
  }
  // function subtraction(){
  //   if (value1 === ""){
  //     return
  //   }
  //   if(value1 !== ""){
  //     let data = math( value1, value2)
  //     setEqualsign("=")
  //     setResult(data)
  //     console.log("aa")
  //   }
  //   setOperator("+")
  //   setValue1(result)
  //   setResult("")
  // }

  function equal(values2:string){
    if(value1 !== undefined){
      setEqualsign("=")
      setValue2(hold)
      data = (value1&& value2&& value1 + value2)
      setResult(data)
      console.log("value1",value1,"value2",value2)
    }
    
  }

  function clearResult(){
    setValue1(undefined)
    setValue2(undefined)
    setResult("0")
    setOperator("")
    setEqualsign("")
  }
  
  function clearLast(){
    if (result.length === 1 || result === " 0"){
      setResult("0")
    } else(
      setResult(result.substring(0, result .length - 1))
    ) 
  }

  return(
    <div className="flex justify-center">
        <div className="h-fit w-fit bg-zinc-200 rounded-xl ">
          <div className="h-[96px] w-max] p-1 text-right text-3xl text-zinc-900">
            <div className="flex justify-between items-center">
              <History/>
              <div className="flex">
                <p>{value1}</p>
                <p>{operator}</p>
                <p>{value2}</p>
                <p>{equalsign}</p>
              </div>
            </div>
            <p className="text-5xl">{result}</p>
          </div>
          
          <div className="grid grid-cols-4 h-fit w-fit p-2">
            <Key keyName={["%"]}/>
            <Key keyName={[<Plus/>]}/>
            <Key keyName={["CE"]} click={clearResult}/>
            <Key keyName={[<Delete/>]} click={clearLast}/>
            <Key keyName={[<Plus/>]}/>
            <Key keyName={[<Plus/>]}/>
            <Key keyName={[<Plus/>]}/>
            <Key keyName={[<Divide/>]}/>
            <Key keyName={[7]} click={() => numberPress(7)}/>
            <Key keyName={[8]} click={() => numberPress(8)}/>
            <Key keyName={[9]} click={() => numberPress(9)}/>
            <Key keyName={[<X/>]}/>
            <Key keyName={[4]} click={() => numberPress(4)}/>
            <Key keyName={[5]} click={() => numberPress(5)}/>
            <Key keyName={[6]} click={() => numberPress(6)}/>
            <Key keyName={[<Minus/>]}/>
            <Key keyName={[1]} click={() => numberPress(1)}/>
            <Key keyName={[2]} click={() => numberPress(2)}/>
            <Key keyName={[3]} click={() => numberPress(3)}/>
            <Key keyName={[<Plus/>]} click={addition}/>
            <Key keyName={[<Plus/>]}/>
            <Key keyName={[0]} click={() => numberPress(0)}/>
            <Key keyName={["."]}/>
            <Key keyName={[<Equal/>]} click={()=>equal(result)}/>
          </div>
        </div>
    </div>
  )
}
export default CalculatorComponent