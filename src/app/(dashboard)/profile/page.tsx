import { redirect } from "next/navigation"
import { auth } from "../../../../auth"
import UserAvatar from "../../components/login/userAvatar"

async function profile() {
  const session = await auth()
  if (session?.user === undefined) return redirect("/login")
  return <UserAvatar {...session?.user} />
}
export default profile
