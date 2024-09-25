export function getTime(added: any) {
  const created = new Date(added)
  const now = new Date()

  let difference = now.getTime() - created.getTime()

  let daysDifference = Math.floor(difference / 1000 / 60 / 60 / 24)
  difference -= daysDifference * 1000 * 60 * 60 * 24

  let hoursDifference = Math.floor(difference / 1000 / 60 / 60)
  difference -= hoursDifference * 1000 * 60 * 60

  let minutesDifference = Math.floor(difference / 1000 / 60)
  difference -= minutesDifference * 1000 * 60

  let secondsDifference = Math.floor(difference / 1000)

  // console.log(
  //   "difference = " +
  //     daysDifference +
  //     " day/s " +
  //     hoursDifference +
  //     " hour/s " +
  //     minutesDifference +
  //     " minute/s " +
  //     secondsDifference +
  //     " second/s "
  // )
  let result

  if (daysDifference > 0) {
    result = daysDifference === 1 ? daysDifference + " day ago" : daysDifference + " days ago"
  } else if (hoursDifference > 0) {
    result = hoursDifference === 1 ? hoursDifference + " hour ago" : hoursDifference + " hours ago"
  } else if (minutesDifference > 0) {
    result =
      minutesDifference === 1
        ? minutesDifference + " minute ago"
        : minutesDifference + " minutes ago"
  } else if (secondsDifference > 0) {
    result = "just added"
  }
  if (daysDifference === -1) result = "just added"
  return result
}