import { db } from "@/database"
import { user } from "@/database/schema"
import { NotificationType } from "@/types/profileType"
import { DrizzleAdapter } from "@auth/drizzle-adapter"
import { eq } from "drizzle-orm"
import NextAuth, { DefaultSession } from "next-auth"
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"

export type ExtendedUser = DefaultSession["user"] & {
  id: string
  name: string
  email: string
  emailVerified: string | null
  image: string
  notifications: NotificationType[]
  role: "ADMIN" | "USER"
}

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
      if(session.user && token.notifications){
        session.user.notifications = token.notifications as NotificationType[]
      }
    return session
    },
    async jwt({ token }){
      if (!token.sub) return token
      
      const existingUser = await db.select().from(user).where(eq(user.id, token.sub))
      console.log(existingUser)
      if (!existingUser) return token

      token.role = existingUser[0].role
      token.notifications = existingUser[0].notifications

    return token
    },
  },
  adapter: DrizzleAdapter(db),
  providers: [GitHub, Google],
  session: {strategy: "jwt"}
})