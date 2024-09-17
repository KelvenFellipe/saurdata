import { type AppRouter } from "@/connection/server"
import { createTRPCReact } from "@trpc/react-query"

export const trpc = createTRPCReact<AppRouter>({})