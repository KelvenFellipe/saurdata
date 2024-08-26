import { defineConfig } from 'drizzle-kit';

if (process.env.SUPABASE_URL == null)
  throw new Error("DATABASE_URL is required")

export default defineConfig({
  schema: './src/supabase/schema.ts',
  out: './src/supabase/migrations',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.SUPABASE_URL as string
  },
}) ;

