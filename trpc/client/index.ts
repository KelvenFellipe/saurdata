import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import type { AppRouter } from '../server/index.ts';

const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: 'http://localhost:3000',
    }),
  ],
})

const sauriaList = await trpc.sauriaList.query();
//    ^?
console.log('List:', sauriaList);