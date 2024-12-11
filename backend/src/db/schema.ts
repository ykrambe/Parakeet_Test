import { integer, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

export const facilities = pgTable('facilities', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  street_address: text('street_address').notNull(),
  city: text('city').notNull(),
  state: text('state').notNull(),
  zip_code: text('zip_code').notNull(),
  phone_number: text('phone_number').notNull(),
  images_url: text('images_url'),
  created_at: timestamp('created_at').defaultNow().notNull(),
  updated_at: timestamp('updated_at').notNull().$onUpdate(() => new Date()),
});

export type InsertUser = typeof facilities.$inferInsert;
export type SelectUser = typeof facilities.$inferSelect;
