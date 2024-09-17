import UserAvatar from "@/components/login/userAvatar"
import { redirect } from "next/navigation"
import { auth } from "../../../auth"


async function profile() {
  const session = await auth()
  if (session?.user === undefined) return redirect("/")
  return <UserAvatar {...session?.user} />
}
export default profile
