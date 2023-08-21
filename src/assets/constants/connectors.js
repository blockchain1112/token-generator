import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";

const POLLING_INTERVAL = 12000;
const RPC_URL =
  "https://polygon-mumbai.infura.io/v3/9c1433a938f34b72b099405c6e90e3aa";
export const injected = new InjectedConnector({
  supportedChainIds: [1],
});

export const walletconnect = new WalletConnectConnector({
  rpc: { 1: RPC_URL },
  bridge: "https://bridge.walletconnect.org",
  qrcode: true,
  pollingInterval: POLLING_INTERVAL,
});
