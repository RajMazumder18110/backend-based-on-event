/** @notice library imports */
import { JsonRpcProvider, Contract } from "ethers";
/// External imports
import { storeAbi } from "@/abis/storeAbi";
import { BSC_TESTNET_RPC, BSC_TESTNET_STORAGE_ADDRESS } from "@/constants";

/// Events
export enum Events {
  STORE = "Store",
}

/// Providers
const bscTestnetProvider = new JsonRpcProvider(BSC_TESTNET_RPC);

/// Contracts
export const bscTestnetStorage = new Contract(
  BSC_TESTNET_STORAGE_ADDRESS,
  storeAbi,
  bscTestnetProvider
);
