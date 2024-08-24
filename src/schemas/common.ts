/** @notice library imports */
import { sql } from "drizzle-orm";
import { text } from "drizzle-orm/sqlite-core";

/// Common fields
export const common = {
  createdAt: text("createdAt").default(sql`(CURRENT_TIMESTAMP)`),
  updatedAt: text("updatedAt").$onUpdate(() => sql`(CURRENT_TIMESTAMP)`),
};
