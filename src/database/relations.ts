import { relations } from "drizzle-orm/relations";
import { families, sauria, types, user, session, account } from "./schema";

export const sauriaRelations = relations(sauria, ({one}) => ({
	family: one(families, {
		fields: [sauria.family],
		references: [families.name]
	}),
	type: one(types, {
		fields: [sauria.type],
		references: [types.name]
	}),
}));

export const familiesRelations = relations(families, ({one, many}) => ({
	saurias: many(sauria),
	type: one(types, {
		fields: [families.type],
		references: [types.name]
	}),
}));

export const typesRelations = relations(types, ({many}) => ({
	saurias: many(sauria),
	families: many(families),
}));

export const sessionRelations = relations(session, ({one}) => ({
	user: one(user, {
		fields: [session.userId],
		references: [user.id]
	}),
}));

export const userRelations = relations(user, ({many}) => ({
	sessions: many(session),
	accounts: many(account),
}));

export const accountRelations = relations(account, ({one}) => ({
	user: one(user, {
		fields: [account.userId],
		references: [user.id]
	}),
}));