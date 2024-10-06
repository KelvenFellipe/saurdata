import { LastAdded } from "@/components/gallery/LastAdded"

function Main() {
  return (
    <div className="h-max grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-items-center">
      <div className="col-span-2"></div>
      <div className="mt-10 hidden md:flex">
        <LastAdded />
      </div>
    </div>
  )
}
export default Main
