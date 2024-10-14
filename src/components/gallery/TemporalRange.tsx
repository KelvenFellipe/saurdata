export function TemporalRange({ age }: { age: string }) {
  const my = age.split("-")
  const position = my.map(function (x) {
    return parseInt(x)
  })
  return (
    <div className="w-fit h-8 flex rounded-md overflow-hidden relative">
      <div className={`absolute w-[2px] h-8 bg-[#ffd900] `} style={{ right: position[0] }} />
      <div className="w-[186px] flex text-center items-center">
        <div className="w-[51px] bg-zinc-600">T</div>
        <div className="w-[56px] bg-zinc-500">J</div>
        <div className="w-[79px] bg-zinc-400">C</div>
      </div>
      <div className="w-[66px] bg-green-600 flex justify-center items-center">C</div>
    </div>
  )
}
