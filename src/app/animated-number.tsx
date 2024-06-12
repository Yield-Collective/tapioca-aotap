"use client";

import { useBalance } from "wagmi";
import { arbitrum } from "viem/chains";
import { Address } from "viem";
import { NumberTicker } from "./magic-ticker";

export function AnimatedNumber() {
  const result = useBalance({
    chainId: arbitrum.id,
    address: process.env.NEXT_PUBLIC_ADDRESS as Address,
    token: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
  });

  const value = parseInt(result.data?.formatted ?? "000");

  return <NumberTicker value={value} />;
}

export function AnimatedNumberLtap() {
  const result = useBalance({
    chainId: arbitrum.id,
    address: process.env.NEXT_PUBLIC_ADDRESS as Address,
    token: "0x00BeBF0fA54D8e67914Be964a7FA20130822a88d",
  });

  const ltapLeft = parseInt(result.data?.formatted ?? "0");

  return <NumberTicker value={ltapLeft} />;
}
