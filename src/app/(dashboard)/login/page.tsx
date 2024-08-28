import type { Metadata } from "next"
import { GitHubSign } from "./signinButton"

export const metadata: Metadata = {
  title: "login | saurdata",
}

function Login() {
  return (
    <div className="grid bg-black p-20 w-fit rounded-xl justify-center items-center m-auto">
      <GitHubSign />
    </div>
  )
}

export default Login
