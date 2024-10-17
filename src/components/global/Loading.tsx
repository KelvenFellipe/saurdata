import { Logo4 } from "./Logo"

export function Loading() {
  return (
    <div className="fixed animate-rotate-pulse top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <Logo4 classN={"h-10 w-10 text-teal-500 fill-current"} />
    </div>
  )
}
