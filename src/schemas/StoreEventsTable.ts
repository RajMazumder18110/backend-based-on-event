/** @notice library imports */
import { integer, sqliteTable, text, blob } from "drizzle-orm/sqlite-core";
/// External imports
import { common } from "@/schemas/common";
import { Events } from "@/constants/contracts";

/// `Store` events table
export const storeEvents = sqliteTable("storeEvents", {
  /// Core fields
  id: integer("id").primaryKey({ autoIncrement: true }),
  eventName: text("eventName").notNull().default(Events.STORE),
  storeValue: blob("storeValue", { mode: "bigint" }).notNull(),

  /// Blockchain fields
  data: text("data").notNull(),
  blockNumber: integer("blockNumber").notNull(),
  topics: blob("topics").$type<readonly string[]>().notNull(),
  blockHash: text("blockHash", { length: 66 }).notNull(),
  transactionHash: text("transactionHash", { length: 66 }).notNull().unique(),

  /// Common fields
  ...common,
});

/// Types
export type StoreEvent = typeof storeEvents.$inferSelect;
export type NewStoreEvent = Omit<
  StoreEvent,
  "id" | "eventName" | "createdAt" | "updatedAt"
>;
