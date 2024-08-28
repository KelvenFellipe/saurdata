import { pgTable, pgEnum, uuid, text } from "drizzle-orm/pg-core"
  import { sql } from "drizzle-orm"

export const type = pgEnum("type", ['Dinosaur', 'Pterosaur'])
export const user = pgEnum("user", ['ADMIN', 'DEFAULT'])


export const sauria = pgTable("sauria", {
	id: uuid("id").defaultRandom().primaryKey().notNull(),
	genus: text("genus").notNull(),
	family: text("family").notNull(),
	species: text("species").array().notNull(),
	temporal: text("temporal").notNull(),
	img: text("img").notNull(),
	type: type("type").notNull(),
	description: text("description").default('img').notNull(),
});

export const users = pgTable("users", {
	id: uuid("id").defaultRandom().primaryKey().notNull(),
	name: text("name").notNull(),
	email: text("email").notNull(),
	user: user("user").notNull(),
});