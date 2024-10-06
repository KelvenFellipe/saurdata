export function LoginButton({ click }: any) {
  return (
    <div className="p-[9px] flex space-x-[24px] items-center justify-end ml-auto px-2">
      <button
        onClick={click}
        className=" text-white bg-teal-500 text-base h-[36px] w-[80px] p-1 rounded-xl font-bold border border-teal-500 hover:border-teal-500 hover:bg-[#111316] duration-300 hover:duration-300 "
      >
        Log In
      </button>
    </div>
  )
}
