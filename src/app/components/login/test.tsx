import { auth } from "../../../../auth"
import { Sign } from "./sign"
import { SignIn } from "./signIn"
import { SignOut } from "./signOut"

async function Comp() {
  const session = await auth()

  return <Sign children1={<SignOut {...session?.user} />} children2={<SignIn />} />
}
export default Comp
