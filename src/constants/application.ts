/** @notice library imports */
/// External imports
import { NODE_ENV } from "@/constants/env";

/// Application constants
export const CRON_JOB_SCHEDULE = "* * * * *";
export const isDevelopment = NODE_ENV === "development";
/// Database
export const DB_SCHEMA_PATH = "./src/schemas/index.ts";
export const DB_MIGRATION_PATH = "./src/database/migrations";
export const SQLITE_DATABASE_URL = "./src/database/database.db";
