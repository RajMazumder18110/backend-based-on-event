/** @notice library imports */
/// External imports
import { sqliteDb } from "@/database";
import { IndexerServices } from "@/services";
import { storeEvents, NewStoreEvent } from "@/schemas";

/// Store Event Services
export class StoreEventServices {
  /**
   * @description Creates new `StoreEvent` entity.
   *  - In case of duplicate transaction hash it will ignore insert.
   * @param {NewStoreEvent} params The store event params
   */
  private static async createNewStoreEvent(params: NewStoreEvent) {
    await sqliteDb.insert(storeEvents).values(params).onConflictDoNothing();
  }

  /**
   * @description Creates a new store event and also update the last sync block.
   *  - Create a new `Store` event.
   *  - Updates the last synced block number.
   * @param {NewStoreEvent} params The event parameters.
   */
  static async syncStoreEvent(params: NewStoreEvent) {
    // Create new entity
    await this.createNewStoreEvent(params);
    /// Update synced to latest block
    await IndexerServices.syncedToBlockNumber({
      lastUpdatedBlock: params.blockNumber,
    });
    console.log(`✅ "STORE" event registered.`);
  }
}
