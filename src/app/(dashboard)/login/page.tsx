import { GitSign } from "@/app/components/login/gitSign"
import { Session } from "./session"

function Page() {
  return (
    <Session>
      <GitSign />
    </Session>
  )
}
export default Page
