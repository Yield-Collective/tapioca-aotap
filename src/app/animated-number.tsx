"use client";

import { motion, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";
import { useBalance } from "wagmi";
import { arbitrum } from "viem/chains";
import { Address } from "viem";

export function AnimatedNumber() {
  const result = useBalance({
    chainId: arbitrum.id,
    address: process.env.NEXT_PUBLIC_ADDRESS as Address,
    token: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
  });

  const value = parseInt(result.data?.formatted ?? "000");

  let spring = useSpring(value, {
    mass: 0.8,
    stiffness: 75,
    damping: 15,
  });
  let display = useTransform(spring, (current) =>
    Math.round(current).toLocaleString(),
  );

  useEffect(() => {
    spring.set(value);
  }, [spring, value]);

  return <motion.span>{display}</motion.span>;
}

export function AnimatedNumberLtap() {
  const result = useBalance({
    chainId: arbitrum.id,
    address: process.env.NEXT_PUBLIC_ADDRESS as Address,
    token: "0x00BeBF0fA54D8e67914Be964a7FA20130822a88d",
  });

  const ltapLeft = parseInt(result.data?.formatted ?? "000");

  let spring = useSpring(ltapLeft, {
    mass: 0.8,
    stiffness: 75,
    damping: 15,
  });
  let display = useTransform(spring, (current) =>
    Math.round(current).toLocaleString(),
  );

  useEffect(() => {
    spring.set(ltapLeft);
  }, [spring, ltapLeft]);

  return <motion.span>{display}</motion.span>;
}
