import { NavMenu } from "@/components/navbar/NavMenu"

function Page() {
  return (
    <div>
      <NavMenu click={console.log} />
    </div>
  )
}
export default Page
