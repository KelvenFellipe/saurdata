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
      <p>{when}</p>
      <p>{age} million years</p>

      <div className="w-fit h-10 my-2 flex relative select-none text-xs">
        <div className={`absolute w-[4px] h-10 bg-[#ffd413] rounded-sm`} style={{ right: where }} />
        <div
          className={`absolute w-[2px] h-10 bg-[#ff0909] rounded-sm`}
          style={{ right: 66 }}
        ></div>
        <div className={`absolute w-[2px] h-10 bg-[#ff0909] rounded-sm`} style={{ left: 0 }}></div>

        <div className="w-[186px] flex text-center items-center">
          <div className="w-[51px] flex h-8 items-center justify-center bg-zinc-600 ">triassic</div>
          <div className="w-[56px] flex h-8 items-center justify-center bg-zinc-500">jurassic</div>
          <div className="w-[79px] flex h-8 items-center justify-center bg-zinc-400">
            cretaceous
          </div>
        </div>
        <div className="w-[66px]  flex text-center items-center">
          <div className="w-[43px] flex h-8 items-center justify-center bg-orange-500">P</div>
          <div className="w-[23px] flex h-8 items-center justify-center bg-orange-600">N</div>
        </div>
        <div className="absolute text-xs flex -top-[16px]" style={{ right: where - 8 }}>
          <p className="w-fit">{where}</p>
        </div>
        <div className="absolute text-xs right-[59px] text-red-600 top-10">66</div>
        <div className="absolute text-xs -left-[10px] text-red-600 top-10">252</div>
      </div>
    </div>
  )
}
