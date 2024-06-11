"use client";

import { http, createConfig } from "wagmi";
import { arbitrum } from "wagmi/chains";
import { WagmiProvider as WagmiProviderBase } from "wagmi";
import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const config = createConfig({
  chains: [arbitrum],
  transports: {
    [arbitrum.id]: http(
      "https://arb-mainnet.g.alchemy.com/v2/mL7w2dTT_ji4IkDwWm9wcI7r_zN1tsF0",
    ),
  },
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
      refetchInterval: 2000,
    },
  },
});

export function WagmiProvider({ children }: { children: ReactNode }) {
  return (
    <WagmiProviderBase config={config}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProviderBase>
  );
}
