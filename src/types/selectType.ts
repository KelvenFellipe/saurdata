import { LucideIcon } from "lucide-react"

export interface SelectType {
  PlaceHolder: LucideIcon | string
  data: any[]
  changevalue: (value: string) => void
}