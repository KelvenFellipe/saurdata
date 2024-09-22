export interface sortProps {
  Icon: string
  value: string
}

export const SortingData: sortProps[] = [
  { Icon: "Ascending", value: "asc" },
  { Icon: "Descending", value: "desc" },
  { Icon: "Last Added", value: "last" },
  { Icon: "First Added", value: "first" },
  { Icon: "By Newest", value: "newer" },
  { Icon: "By Oldest", value: "older" },

]