import { User } from "next-auth"

export default function UserAvatar(props: User | null) {
  if (props == null) return null

  return (
    <div className="select-none">
      {props.image == null ? null : <img src={props.image} alt="User Avatar" />}
      <p>{props.name}</p>
      <p>{props.email}</p>
    </div>
  )
}
