"use client"
export function LoadingProfile() {
  return (
    <div className="p-[10px] flex space-x-[24px] items-center justify-end ml-auto px-2 animate-pulse">
      <button className=" bg-zinc-300/50 dark:bg-zinc-700/50 rounded-full duration-300 h-7 w-7" />
      <button className=" bg-zinc-300/50 dark:bg-zinc-700/50 rounded-full duration-300 h-8 w-8" />
    </div>
  )
}
