/** @notice library imports */
import Database from "better-sqlite3";
import { drizzle } from "drizzle-orm/better-sqlite3";
/// External imports
import * as schema from "@/schemas";
import { SQLITE_DATABASE_URL } from "@/constants";

const sqlite = new Database(SQLITE_DATABASE_URL);
export const sqliteDb = drizzle(sqlite, { schema });
