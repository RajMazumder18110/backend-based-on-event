/** @notice library imports */
import { eq } from "drizzle-orm";
/// External imports
import { sqliteDb } from "@/database";
import { indexer, SyncedBlockParams } from "@/schemas";

/// Indexer Services
export class IndexerServices {
  /**
   * @description Inserts the initial entity
   */
  static async initialEntity() {
    await sqliteDb
      .insert(indexer)
      .values({
        id: 1,
      })
      .onConflictDoNothing();
  }

  /**
   * @description Updates the synced block to latest.
   * @param {SyncedBlockParams} params The last updated blockNumber
   */
  static async syncedToBlockNumber(params: SyncedBlockParams) {
    await sqliteDb.update(indexer).set(params).where(eq(indexer.id, 1));
  }

  /**
   * @description Returns the last synced blockNumber
   * @returns The blockNumber
   */
  static async getLastSyncedBlock() {
    const resp = await sqliteDb.query.indexer.findFirst({
      where: eq(indexer.id, 1),
    });

    /// Incase of no initial entity
    if (!resp) throw Error("Initial entry is missing");
    return resp.lastUpdatedBlock;
  }
}
