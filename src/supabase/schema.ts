import { pgTable, text, uuid } from "drizzle-orm/pg-core";

export const sauria = pgTable("sauria", {
  id: uuid("id").primaryKey().defaultRandom().notNull(),
  genus: text("genus").notNull(),
  family: text("family").notNull(),
  species: text("species").array().notNull(),
  temporal: text("temporal").notNull(),
  img: text("img").notNull(),
  type: text("type").notNull(),
  description: text("description").notNull().default("img")
})