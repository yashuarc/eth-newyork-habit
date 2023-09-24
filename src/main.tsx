import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "../styles/globals.css";
import { BrowserRouter } from "react-router-dom";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { walletConnectProvider } from "@web3modal/wagmi";
import { mainnet } from "wagmi/chains";
import { createWeb3Modal } from "@web3modal/wagmi/react";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { InjectedConnector } from "wagmi/connectors/injected";
import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";
import W3iContextProvider from "./contexts/W3iContext";
import { initSentry } from "./utils/sentry.ts";
import { polyfill } from "./utils/polyfill.ts";

polyfill();
initSentry();
const projectId = import.meta.env.VITE_PROJECT_ID;

const { chains, publicClient } = configureChains(
  [mainnet],
  [walletConnectProvider({ projectId })]
);

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: [
    new WalletConnectConnector({ options: { projectId, showQrModal: false } }),
    new InjectedConnector({ options: { shimDisconnect: true } }),
    new CoinbaseWalletConnector({ options: { appName: "Web3Inbox" } }),
  ],
  publicClient,
});

createWeb3Modal({
  wagmiConfig,
  projectId,
  chains,
  themeMode: "light",
  themeVariables: { "--w3m-z-index": 9999 },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <WagmiConfig config={wagmiConfig}>
      <BrowserRouter>
        <W3iContextProvider>
          {/* <AllModals /> */}
          <App />
        </W3iContextProvider>
      </BrowserRouter>
    </WagmiConfig>
  </React.StrictMode>
);
