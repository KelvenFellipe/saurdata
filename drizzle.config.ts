import { defineConfig } from 'drizzle-kit';

if (process.env.SUPABASE_URL! == null)
  throw new Error("DATABASE_URL is required")

export default defineConfig({
  schema: './src/database/schema.ts',
  out: './src/database/migrations',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.SUPABASE_URL!
  },
}) ;
