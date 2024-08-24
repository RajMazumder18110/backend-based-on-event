CREATE TABLE `indexer` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`lastUpdatedBlock` integer DEFAULT 0 NOT NULL,
	`createdAt` text DEFAULT (CURRENT_TIMESTAMP),
	`updatedAt` text
);
--> statement-breakpoint
CREATE TABLE `storeEvents` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`eventName` text DEFAULT 'Store' NOT NULL,
	`storeValue` blob NOT NULL,
	`data` text NOT NULL,
	`blockNumber` integer NOT NULL,
	`topics` blob NOT NULL,
	`blockHash` text(66) NOT NULL,
	`transactionHash` text(66) NOT NULL,
	`createdAt` text DEFAULT (CURRENT_TIMESTAMP),
	`updatedAt` text
);
