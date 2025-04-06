import { relations } from "drizzle-orm/relations";
import { types, families, user, session, sauria, notification, account } from "./schema";

export const familiesRelations = relations(families, ({one, many}) => ({
	type: one(types, {
		fields: [families.type],
		references: [types.name]
	}),
	saurias: many(sauria),
}));

export const typesRelations = relations(types, ({many}) => ({
	families: many(families),
	saurias: many(sauria),
}));

export const sessionRelations = relations(session, ({one}) => ({
	user: one(user, {
		fields: [session.userId],
		references: [user.id]
	}),
}));

export const userRelations = relations(user, ({many}) => ({
	sessions: many(session),
	notifications: many(notification),
	accounts: many(account),
}));

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

export const notificationRelations = relations(notification, ({one}) => ({
	user: one(user, {
		fields: [notification.userId],
		references: [user.id]
	}),
}));

export const accountRelations = relations(account, ({one}) => ({
	user: one(user, {
		fields: [account.userId],
		references: [user.id]
	}),
}));