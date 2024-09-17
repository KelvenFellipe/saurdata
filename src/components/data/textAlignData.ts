import { AlignCenter, AlignJustify, AlignLeft, AlignRight, LucideIcon } from "lucide-react";

export interface textProps {
  Icon: LucideIcon
  value: string
}

export const textAlign: textProps[] = [
  { Icon: AlignCenter, value: "text-center" },
  { Icon: AlignJustify, value: "text-justify" },
  { Icon: AlignRight, value: "text-right" },
  { Icon: AlignLeft, value: "text-left" },
]