export interface ProfileType {
  id: string
  name: string
  email: string
  emailVerified: string | null
  image: string
  notifications: NotificationType[]
  role: "ADMIN" | "USER"
}

export interface NotificationType{
  notification: string
  read: boolean

}