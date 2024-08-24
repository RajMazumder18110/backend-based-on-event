/** @notice library imports */
import { integer, sqliteTable } from "drizzle-orm/sqlite-core";
/// External imports
import { common } from "@/schemas/common";

/// Indexer Details
export const indexer = sqliteTable("indexer", {
  /// Core fields
  id: integer("id").primaryKey({ autoIncrement: true }),
  lastUpdatedBlock: integer("lastUpdatedBlock").notNull().default(0),

  /// Common fields
  ...common,
});

/// Types
export type Indexer = typeof indexer.$inferSelect;
export type SyncedBlockParams = Pick<Indexer, "lastUpdatedBlock">;
