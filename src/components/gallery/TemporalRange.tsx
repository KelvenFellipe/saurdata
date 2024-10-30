import { CornerLeftDown, MoveLeft, MoveRight } from "lucide-react"
import { useEffect, useState } from "react"

export function TemporalRange({ age }: { age: string }) {
  const [where, setWhere] = useState(0)
  const [when, setWhen] = useState("")

  useEffect(() => {
    if (age.includes("-")) {
      const my = age.split("-")
      const position = my.map(function (x) {
        return parseFloat(x)
      })
      setWhere(position[0])
    } else {
      setWhere(parseInt(age))
    }
  }, [])

  useEffect(() => {
    calculate()
  }, [where])

  function calculate() {
    const age = where
    setWhen(
      age >= 66 && age < 100.5
        ? "Late Cretaceous"
        : age >= 100.5 && age < 145
        ? "Early Cretaceous"
        : age >= 145 && age < 161.5
        ? "Late Jurassic"
        : age >= 161.5 && age < 174.7
        ? "Middle Jurassic"
        : age >= 174.7 && age < 201.4
        ? "Early Jurassic"
        : age >= 201.4 && age < 237
        ? "Late Triassic"
        : age >= 237 && age < 247.2
        ? "Middle Triassic"
        : age >= 247.2 && age <= 252
        ? "Early Triassic"
        : ""
    )
  }
  return (
    <div className="space-y-3">
      <p>
        {when}, {age} Ma
      </p>

      <div className="w-fit h-20 my-2 flex relative select-none text-xs items-center  ">
        <div className="flex absolute top-0 " style={{ left: 252 - where - 7 }}>
          <CornerLeftDown className={`flex size-5 rounded-sm justify-end mt-1`} />
          <p className="w-[60px]">{where + " Ma"}</p>
        </div>

        <div
          className={`absolute flex flex-col justify-center items-center top-6 right-0`}
          style={{ right: 66 - 7 }}
        >
          <div className="w-[2px] h-8 bg-[#ff0909] rounded-sm"></div>
          <p className="text-red-600">66</p>
        </div>

        <div
          className={`absolute flex flex-col justify-center items-center top-6 right-0`}
          style={{ right: 252 - 10 }}
        >
          <div className="w-[2px] h-8 bg-[#ff0909] rounded-sm"></div>
          <p className="text-red-600">252</p>
        </div>

        <div className="flex flex-col items-center ">
          <div className="flex text-center ">
            <div className="w-[51px] flex h-6 items-center justify-center bg-zinc-600 text-white">
              triassic
            </div>
            <div className="w-[56px] flex h-6 items-center justify-center bg-zinc-500 text-white">
              jurassic
            </div>
            <div className="w-[79px] flex h-6 items-center justify-center bg-zinc-400 text-white">
              cretaceous
            </div>
          </div>
          <div className="w-[186px] flex justify-center h-1 bg-green-900 pt-1">
            <MoveLeft className="size-4" />
            <p>mesozoic</p>
            <MoveRight className="size-4" />
          </div>
        </div>

        <div className="w-[66px]  flex text-center items-center">
          <div className="w-[43px] flex h-8 items-center justify-center bg-orange-500 text-white">
            P
          </div>
          <div className="w-[23px] flex h-8 items-center justify-center bg-orange-600 text-white">
            N
          </div>
        </div>
      </div>
    </div>
  )
}
