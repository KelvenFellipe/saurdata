import { LastAdded } from "@/components/gallery/LastAdded"

function Main() {
  return (
    <div className="h-max grid grid-cols-3 items-center justify-items-center">
      <div className="col-span-2"></div>
      <div className="mt-10">
        <LastAdded />
      </div>
    </div>
  )
}
export default Main
