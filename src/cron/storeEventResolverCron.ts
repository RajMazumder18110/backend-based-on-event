/** @notice library imports */
import cron from "node-cron";
/// External imports
import { CRON_JOB_SCHEDULE } from "@/constants";
import { bscTestnetStorage } from "@/constants/contracts";
import { syncMissingStoreEvents } from "@/listeners/storeEvent";

/// `Store` event cron
cron.schedule(CRON_JOB_SCHEDULE, () => {
  syncMissingStoreEvents(bscTestnetStorage)
    .then(() => {
      console.log(`⏱️ "STORE" corn job finished`);
    })
    .catch(() => {
      console.error(`⏱️ "STORE" corn job Failed`);
    });
});
