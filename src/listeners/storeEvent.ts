/** @notice library imports */
import { Contract, ContractEventPayload, EventLog } from "ethers";
/// External imports
import { Events } from "@/constants/contracts";
import { IndexerServices, StoreEventServices } from "@/services";

/// Listener
export const listenStoreEvents = async (contract: Contract) => {
  /// Listener
  await contract.on(
    Events.STORE,
    async (storeValue: bigint, event: ContractEventPayload) => {
      /// Extracting data
      const { blockNumber, blockHash, data, topics, transactionHash } =
        event.log;

      /// Sync
      await StoreEventServices.syncStoreEvent({
        data,
        topics,
        blockHash,
        storeValue,
        blockNumber,
        transactionHash,
      });
    }
  );
};

export const syncMissingStoreEvents = async (contract: Contract) => {
  /// Grabbing last sync block
  const lastSyncedBlock = await IndexerServices.getLastSyncedBlock();
  if (Boolean(lastSyncedBlock)) {
    /// Get the latest block number
    const currentBlock = await contract.runner!.provider!.getBlockNumber();
    if (lastSyncedBlock < currentBlock) {
      const events = await contract.queryFilter(
        Events.STORE,
        lastSyncedBlock + 1,
        currentBlock
      );

      /// Sync all the events.
      for (const event of events) {
        /// Extracting data
        const { blockNumber, blockHash, data, topics, transactionHash, args } =
          event as EventLog;
        const storeValue = args.at(0) as bigint;
        /// Sync
        await StoreEventServices.syncStoreEvent({
          data,
          topics,
          blockHash,
          storeValue,
          blockNumber,
          transactionHash,
        });
      }

      /// Updating the latest block
      await IndexerServices.syncedToBlockNumber({
        lastUpdatedBlock: currentBlock,
      });
    }
  }
};
