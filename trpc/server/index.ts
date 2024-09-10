import { db } from "@/supabase";
import { sauria } from "@/supabase/schema";
import { createHTTPServer } from "@trpc/server/adapters/standalone";
import { asc } from "drizzle-orm";
import { publicProcedure, router } from './trpc';
 
export const appRouter = router({
  sauriaList: publicProcedure.query(async ()=> {
    const sauriaList = await db.select().from(sauria).orderBy(asc(sauria.genus))
    return sauriaList
  })
  
})
export type AppRouter = typeof appRouter;

const server = createHTTPServer({
  router: appRouter,
});

server.listen(3000);
