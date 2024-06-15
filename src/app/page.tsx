import { AnimatedNumber, AnimatedNumberLtap } from "./animated-number";

export default function Home() {
  return (
    // Step 1: Wrap the main content in a div with relative positioning
    <div className="relative min-h-screen bg-[#0a0949] p-8 pt-4 text-center text-black">
      <main className="flex flex-col items-start justify-between">
        <div />

        <div className="w-full items-center justify-center space-y-8 p-0 font-digital text-6xl font-bold text-[#faafe7] md:text-7xl">
        <p className="text-sm md:text-6xl font-semibold tracking-wider text-white font-sans -mt-5 mt-8">
  Tapioca aoTAP Data
</p>

          <div className="flex w-full flex-col justify-center gap-8 sm:flex-row sm:gap-16">
            <div className="space-y-4">
              <AnimatedNumber />
              <p className="text-lg font-semibold tracking-wider">
                Total $USDC accumulated from exercised options
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto font-sans font-semibold text-[#faafe7] space-y-4">
          View the live Airdrop Options contract on{" "}
          <a
            href="https://arbiscan.io/address/0xcf2e155eaa30706ff245679838006e6e092dd8b5"
            className="underline underline-offset-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            Arbiscan
          </a>
          <hr className="border-t border-gray-200" />
          <p>Real-time analytics brought to you by </p>
          
          <span className="underline underline-offset-4">
          Capy Data Analytics
        </span>
        </div>
      </main>



      <a
        href="https://app.uniswap.org/swap?outputCurrency=0x2C650dAb03A59332e2E0C0C4A7F726913e5028C1&chain=arbitrum"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-0 right-0 mt-8 mr-8 bg-[#faafe7] text-white font-bold py-3 px-5 rounded text-lg"
      >
        Buy TAP
      </a>
    </div>
  );
}
