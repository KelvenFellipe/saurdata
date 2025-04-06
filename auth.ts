import { db } from "@/database"
import { user } from "@/database/schema"
import { ProfileType } from "@/types/schemaTypes"
import { DrizzleAdapter } from "@auth/drizzle-adapter"
import { eq } from "drizzle-orm"
import NextAuth, { DefaultSession } from "next-auth"
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"

export type ExtendedUser = DefaultSession["user"] & ProfileType
declare module "next-auth"{
  interface Session{
    user: ExtendedUser
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  callbacks: { 
    async session({token, session}){
      if(session.user && token.sub){
        session.user.id = token.sub
      }
      if(session.user && token.role){
        session.user.role = token.role as "ADMIN" | "USER"
      }

    return session
    },
    async jwt({ token }){
      if (!token.sub) return token
      
      const existingUser = await db.select().from(user).where(eq(user.id, token.sub))
      if (!existingUser) return token

      token.role = existingUser[0].role


    return token
    },
  },
  adapter: DrizzleAdapter(db),
  providers: [GitHub, Google],
  session: {strategy: "jwt"}
})