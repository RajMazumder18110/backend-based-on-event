/** @notice library imports */
import "module-alias/register";
/// External imports
import { IndexerServices } from "@/services/";
import { bscTestnetStorage } from "@/constants/contracts";
import {
  listenStoreEvents,
  syncMissingStoreEvents,
} from "@/listeners/storeEvent";

/// Cron jobs
import "@/cron";

const main = async () => {
  /// Sync missing events
  await syncMissingStoreEvents(bscTestnetStorage);

  /// Listen events
  listenStoreEvents(bscTestnetStorage);

  /// Initial entity
  await IndexerServices.initialEntity();
};

main()
  .then(() => {
    console.clear();
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
