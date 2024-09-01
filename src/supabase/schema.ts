import { integer, pgEnum, pgTable, primaryKey, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { AdapterAccountType } from "next-auth/adapters";

export const type = pgEnum("type", ['Dinosaur', 'Pterosaur'])
export const family = pgEnum("family", ['Ceratopsidae', 'Azhdarchidae'])

export const sauria = pgTable("sauria", {
	id: uuid("id").defaultRandom().primaryKey().notNull(),
	genus: text("genus").notNull(),
  species: text("species").array().notNull(),
	family: family("family").notNull(),
	temporal: text("temporal").notNull(),
	img: text("img").notNull(),
	type: type("type").notNull(),
	description: text("description").default('').notNull(),
});

export const users = pgTable("user", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  name: text("name"),
  email: text("email").unique(),
  emailVerified: timestamp("emailVerified", { mode: "date" }),
  image: text("image"),
})
 
export const accounts = pgTable(
  "account",
  {
    userId: text("userId")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    type: text("type").$type<AdapterAccountType>().notNull(),
    provider: text("provider").notNull(),
    providerAccountId: text("providerAccountId").notNull(),
    refresh_token: text("refresh_token"),
    access_token: text("access_token"),
    expires_at: integer("expires_at"),
    token_type: text("token_type"),
    scope: text("scope"),
    id_token: text("id_token"),
    session_state: text("session_state"),
  },
  (account) => ({
    compoundKey: primaryKey({
      columns: [account.provider, account.providerAccountId],
    }),
  })
)
 
export const sessions = pgTable("session", {
  sessionToken: text("sessionToken").primaryKey(),
  userId: text("userId")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  expires: timestamp("expires", { mode: "date" }).notNull(),
})
 

 