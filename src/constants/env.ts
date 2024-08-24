/** @notice library imports */
import "dotenv/config";

/// Env grabbing
const getEnv = (envName: AppEnv, defaultValue?: string): string => {
  /// Checking for env
  const env = process.env[envName] || defaultValue;
  if (!env) throw new Error(`"${envName}" is missing`);
  return env;
};

/// Envs
export const PORT = getEnv("PORT", "3000");
export const BSC_TESTNET_RPC = getEnv("BSC_TESTNET_RPC");
export const NODE_ENV = getEnv("NODE_ENV", "development");
