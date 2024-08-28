import { LucideIcon } from "lucide-react"
import { Sentence } from "./Key"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./Select"

export interface componentProps {
  PlaceHolder: LucideIcon | string
  data: any[]
  changevalue: (value: string) => void
}

export function SelectComponent({ PlaceHolder, data, changevalue }: componentProps) {
  return (
    <Select onValueChange={changevalue}>
      <SelectTrigger>
        <SelectValue
          placeholder={typeof PlaceHolder === "string" ? <div>{PlaceHolder}</div> : <PlaceHolder />}
        />
      </SelectTrigger>
      <SelectContent>
        {data?.map((item, index) => (
          <SelectItem value={item.value} key={index}>
            <Sentence KeyName={item.Icon} />
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
