import { ButtonType } from "@/types/buttonType"

export function ButtonComponent({ text, Icon1, Icon2, Click, className }: ButtonType) {
  return (
    <button
      className={`flex space-x-2 w-fit rounded-2xl text-sm ease-in-out duration-500 items-center ${
        className !== undefined
          ? className
          : "bg-white dark:bg-background border border-zinc-300 dark:border-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-800 px-3 py-1.5"
      }`}
      onClick={Click}
    >
      {Icon1 !== undefined && <Icon1 className="size-5" />}
      {text !== undefined && <p>{text}</p>}
      {Icon2 !== undefined && <Icon2 />}
    </button>
  )
}
