import { Metadata } from "next"
import { SaurMap } from "../../components/gallery/saurMap"

export const metadata: Metadata = {
  title: "gallery | saurdata",
}

function Page() {
  return (
    <div className="w-fit m-auto">
      <SaurMap />
    </div>
  )
}
export default Page
