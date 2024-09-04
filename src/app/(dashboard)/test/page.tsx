import { MenuBar } from "./Menu"
import { InNavBar } from "./signNavbar"

function Page() {
  return (
    <div>
      <MenuBar click={console.log} />
      <InNavBar />
    </div>
  )
}
export default Page
