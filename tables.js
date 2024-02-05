import { sql } from "drizzle-orm";
import { text, sqliteTable } from "drizzle-orm/sqlite-core";

const course = sqliteTable('course', {
    id: int('id').unique(),
    name: text('name').notNull(),
    city: text('city'),
    state: text('state'),
    zip: text('zip'),
});