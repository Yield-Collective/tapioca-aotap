import { AnimatedNumber } from "./animated-number";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#0a0949] p-8 pt-4 text-center text-black">
      <main className="flex flex-col items-center justify-between">
        <div />

        <div className="w-full max-w-screen-lg mx-auto mt-16 mb-16 text-[#faafe7] text-center">
          <h1 className="text-6xl font-bold leading-tight md:text-7xl mb-8">
            aoTAP Data: Phase 2 Live
          </h1>
          <div className="mt-8 flex flex-col md:flex-row md:justify-center md:space-x-16">
            <div className="text-5xl md:text-6xl font-bold">
              <AnimatedNumber />
              <p className="text-lg font-semibold tracking-wider">
                Cumulative $USDC from all Exercised Options (aoTAP)
              </p>
            </div>
          </div>
        </div>

        <div className="text-[#faafe7] text-center space-y-4 mb-8">
          <p>
            View the Tapioca Airdrop Options contract on{" "}
            <a
              href="https://arbiscan.io/address/0xcf2e155eaa30706ff245679838006e6e092dd8b5"
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Arbiscan
            </a>
          </p>
          <hr className="border-t border-gray-200 my-4" />
          <p>Real-time analytics brought to you by</p>
          <p className="font-bold">Capy Data Analytics</p>
        </div>

        <a
          href="https://app.uniswap.org/swap?outputCurrency=0x2C650dAb03A59332e2E0C0C4A7F726913e5028C1&chain=arbitrum"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-8 right-8 bg-[#faafe7] text-white font-bold py-2 px-4 md:py-3 md:px-5 rounded text-base md:text-lg"
        >
          Buy TAP
        </a>
      </main>
    </div>
  );
}
