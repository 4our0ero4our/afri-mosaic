"use client";
import "./globals.css";
import Navbar from "./components/Navbar";
import "@mysten/dapp-kit/dist/index.css";
import { SuiClientProvider, WalletProvider } from "@mysten/dapp-kit";
import { getFullnodeUrl } from "@mysten/sui/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Footer from "./components/Footer";
import { WalletProviderCustom } from "../app/components/WalletContext";

const queryClient = new QueryClient();
const networks = {
  devnet: { url: getFullnodeUrl("devnet") },
  mainnet: { url: getFullnodeUrl("mainnet") },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Afri Mosaic</title>
        <meta
          name="description"
          content="Africa Arts, Culture, and History NFT Marketplace"
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <QueryClientProvider client={queryClient}>
          <SuiClientProvider networks={networks} defaultNetwork="devnet">
            <WalletProvider>
              <WalletProviderCustom>
                <Navbar />
                {children}
                <Footer />
              </WalletProviderCustom>
            </WalletProvider>
          </SuiClientProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
