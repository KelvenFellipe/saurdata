export function LoginButton({ click }: any) {
  return (
    <button
      onClick={click}
      className="ml-auto text-white bg-teal-500 text-base h-[36px] w-[80px] p-1 rounded-xl font-bold border border-teal-500 hover:border-teal-500 hover:bg-[#111316] duration-300 hover:duration-300 "
    >
      Log In
    </button>
  )
}
