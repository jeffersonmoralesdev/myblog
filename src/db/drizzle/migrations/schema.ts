import { mysqlTable, mysqlSchema, AnyMySqlColumn, primaryKey, unique, varchar, text, tinyint } from "drizzle-orm/mysql-core"
import { sql } from "drizzle-orm"

export const posts = mysqlTable("posts", {
	id: varchar({ length: 36 }).default(sql`(uuid())`).notNull(),
	slug: varchar({ length: 255 }).notNull(),
	title: text().notNull(),
	excerpt: text().notNull(),
	content: text().notNull(),
	coverImageUrl: text().notNull(),
	published: tinyint().notNull(),
	createdAt: text().notNull(),
	updateAt: text().notNull(),
	author: text().notNull(),
},
(table) => [
	primaryKey({ columns: [table.id], name: "posts_id"}),
	unique("posts_slug_unique").on(table.slug),
]);
