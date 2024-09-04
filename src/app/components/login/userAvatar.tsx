import { User } from "next-auth"

export default function UserAvatar(props: User | null) {
  if (props == null) return null

  return (
    <div className="select-none flex m-auto bg-zinc-800 w-fit p-4 space-x-4 rounded-lg">
      {props.image == null ? null : (
        <img src={props.image} alt="User Avatar" className="w-20 h-20" />
      )}
      <div>
        <p>{props.name}</p>
        <p>{props.email}</p>
      </div>
    </div>
  )
}
