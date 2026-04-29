/*import { mysqlTable, mysqlSchema, AnyMySqlColumn, primaryKey, int, varchar } from "drizzle-orm/mysql-core"
import { sql } from "drizzle-orm"

export const user = mysqlTable("user", {
	id: int().notNull(),
	name: varchar({ length: 200 }),
},
(table) => [
	primaryKey({ columns: [table.id], name: "user_id"}),
]);*/
//import { boolean } from "drizzle-orm/gel-core";
import { sql } from "drizzle-orm";
import { mysqlTable, text, varchar, tinyint } from "drizzle-orm/mysql-core";

export const posts = mysqlTable("posts",{
    id: varchar('id',{length:36}).primaryKey().default(sql`(uuid())`).notNull(),
    slug: varchar('slug',{length:255}).notNull().unique(),
    title: text('title').notNull(),
    excerpt: text('excerpt').notNull(),
    content: text('content').notNull(),
    coverImageUrl: text('coverImageUrl').notNull(),
    published: tinyint('published').notNull(),
    createdAt: text('createdAt').notNull(),
    updatedAt: text('updateAt').notNull(),
    author: text('author').notNull(),
})
