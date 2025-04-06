import { pgTable, foreignKey, pgEnum, text, timestamp, uuid, boolean, unique, json, primaryKey, integer } from "drizzle-orm/pg-core"
  import { sql } from "drizzle-orm"

export const role = pgEnum("role", ['ADMIN', 'USER'])
export const status = pgEnum("status", ['READ', 'UNREAD', 'HIDDEN'])
export const type = pgEnum("type", ['dinosaur', 'pterosaur', 'mosasaur', 'undefined'])


export const families = pgTable("families", {
	name: text("name").primaryKey().notNull(),
	type: text("type").notNull().references(() => types.name, { onDelete: "cascade", onUpdate: "cascade" } ),
	temporal: text("temporal").notNull(),
	description: text("description").default('').notNull(),
	added: timestamp("added", { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
});

export const types = pgTable("types", {
	name: text("name").primaryKey().notNull(),
	temporal: text("temporal").notNull(),
	description: text("description").default('').notNull(),
	added: timestamp("added", { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
});

export const session = pgTable("session", {
	sessionToken: text("sessionToken").primaryKey().notNull(),
	userId: uuid("userId").notNull().references(() => user.id, { onDelete: "cascade" } ),
	expires: timestamp("expires", { mode: 'string' }).notNull(),
});

export const sauria = pgTable("sauria", {
	id: uuid("id").defaultRandom().primaryKey().notNull(),
	genus: text("genus").notNull(),
	species: text("species").notNull(),
	temporal: text("temporal").notNull(),
	img: text("img").notNull(),
	family: text("family").notNull().references(() => families.name, { onDelete: "cascade", onUpdate: "cascade" } ),
	type: type("type").references(() => types.name).default('undefined').notNull(),
	description: text("description").default('').notNull(),
	added: timestamp("added", { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
	disabled: boolean("disabled").default(false).notNull(),
});

export const user = pgTable("user", {
	id: uuid("id").defaultRandom().primaryKey().notNull(),
	name: text("name").notNull(),
	email: text("email").notNull(),
	emailVerified: timestamp("emailVerified", { mode: 'string' }),
	image: text("image").notNull(),
	role: role("role").default('USER').notNull(),
},
(table) => {
	return {
		userEmailUnique: unique("user_email_unique").on(table.email),
	}
});

export const notification = pgTable("notification", {
	id: uuid("id").defaultRandom().notNull().primaryKey(),
	createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
    userId: uuid("userId").notNull().references(() => user.id, { onDelete: "cascade" } ),
	content: text("content").default(''),
	status: status("status").default('UNREAD').notNull(),
});

export const account = pgTable("account", {
	userId: uuid("userId").notNull().references(() => user.id, { onDelete: "cascade" } ),
	type: text("type").notNull(),
	provider: text("provider").notNull(),
	providerAccountId: text("providerAccountId").notNull(),
	refreshToken: text("refresh_token"),
	accessToken: text("access_token"),
	expiresAt: integer("expires_at"),
	tokenType: text("token_type"),
	scope: text("scope"),
	idToken: text("id_token"),
	sessionState: text("session_state"),
},
(table) => {
	return {
		accountProviderProviderAccountIdPk: primaryKey({ columns: [table.provider, table.providerAccountId], name: "account_provider_providerAccountId_pk"}),
	}
});