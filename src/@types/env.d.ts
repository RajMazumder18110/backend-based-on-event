/// Global env types
type ExtendedProcessEnv = {
  PORT?: string;
  BSC_TESTNET_RPC: string;
  NODE_ENV: "production" | "development";
};

declare module NodeJS {
  interface ProcessEnv extends ExtendedProcessEnv {}
}
type AppEnv = keyof ExtendedProcessEnv;
