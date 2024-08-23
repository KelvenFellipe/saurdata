"use client"

export function returnData(props: string) {
  let test = props
  console.log(props)

  module.exports = {
    env: {
      customKey: test,
    },
  }
}
export function getData() {
  console.log(process.env.customKey)
  return
}
