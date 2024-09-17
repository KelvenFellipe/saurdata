export interface ProfileType {
  id: string
  name: string
  email: string
  emailVerified?: string
  image: string
  notifications: NotificationType[]
}

export interface NotificationType{
  length: number
  notification: string
  read: boolean
}