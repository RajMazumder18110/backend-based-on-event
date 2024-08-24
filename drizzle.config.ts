/** @notice library imports */
import { defineConfig } from "drizzle-kit";
/// External imports
import {
  DB_SCHEMA_PATH,
  DB_MIGRATION_PATH,
  SQLITE_DATABASE_URL,
} from "./src/constants";

/// Drizzle config
export default defineConfig({
  schema: DB_SCHEMA_PATH,
  out: DB_MIGRATION_PATH,
  dialect: "sqlite",
  dbCredentials: {
    url: SQLITE_DATABASE_URL,
  },
});
