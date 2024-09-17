import { SelectType } from "@/types/selectType"
import { Sentence } from "./Key"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./Select"

export function SelectComponent({ PlaceHolder, data, changevalue }: SelectType) {
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
