
import { pgEnum, pgTable, uniqueIndex, uuid, varchar } from "drizzle-orm/pg-core";

export const UserRole = pgEnum("userRole", ["ADMIN", "BASIC"])

export const DinosauriaTable = pgTable("dinosauria", {
  id: uuid("id").primaryKey().defaultRandom(),
  genus: varchar("genus").notNull(),
  species: varchar("species").notNull(),
});

export const UserTable = pgTable("users", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("name", { length: 10 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  role: UserRole("userRole").default("BASIC").notNull()
}, table => {
  return{
    emailIndex: uniqueIndex("emailIndex").on(table.email)
  }
})