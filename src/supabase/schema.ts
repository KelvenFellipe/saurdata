import { pgTable, uuid, varchar } from "drizzle-orm/pg-core";

export const DinosauriaTable = pgTable("dinosauria", {
  id: uuid("id").primaryKey().defaultRandom(),
  genus: varchar("genus").notNull(),
  species: varchar("species").notNull(),
});