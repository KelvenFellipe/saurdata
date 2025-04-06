import { sauria, user } from "@/database/schema"
import { InferModel } from "drizzle-orm"

export type ProfileType = InferModel<typeof user>;

export type SaurType = InferModel<typeof sauria>

export interface NotificationType{
    notification: string
    read: boolean
    when: string
  }