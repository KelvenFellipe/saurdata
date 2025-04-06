"use client"
import { ProfileType } from "@/types/schemaTypes"
import { MiniNavSearch } from "./MiniNavSearch"
import { NotificationIcon } from "./NotificationsIcon"
import { ProfileIcon } from "./ProfileIcon"

export function Profile({ user }: { user: ProfileType }) {
  return (
    <div className="flex space-x-4 items-center justify-end p-1 flex-1 select-none">
      <MiniNavSearch />
      <NotificationIcon user={user} />
      <ProfileIcon user={user} />
    </div>
  )
}

