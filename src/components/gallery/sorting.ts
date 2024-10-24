export function sort(a: any, b: any, sort: string) {
  if (sort === "asc") return a.genus.localeCompare(b.genus)
  if (sort === "desc") return b.genus.localeCompare(a.genus)
  if (sort === "last") return b.added.localeCompare(a.added)
  if (sort === "first") return a.added.localeCompare(b.added)
  if (sort === "newer")
      return a.temporal.localeCompare(b.temporal, undefined, {
        numeric: true,
        sensitivity: "base",
      })
  if (sort === "older")
    return b.temporal.localeCompare(a.temporal, undefined, {
      numeric: true,
      sensitivity: "base",
    })
}