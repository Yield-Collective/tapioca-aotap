import { AnimatedNumber, AnimatedNumberLtap } from "./animated-number";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-start justify-between bg-[#0a0949] p-8 text-center text-black">
      <div />

      <div className="w-full items-center justify-center space-y-8 p-0 font-digital text-6xl  font-bold text-[#faafe7] md:text-7xl">
        <p className="text-lg font-semibold tracking-wider">
          tapioca genesis lbp
        </p>

        <div className="flex w-full flex-col justify-center gap-8 sm:flex-row sm:gap-16">
          <div className="space-y-4">
            <AnimatedNumber />
            <p className="text-lg font-semibold tracking-wider">
              total USDC Contributed
            </p>
          </div>

          <div className="space-y-4">
            <AnimatedNumberLtap />
            <p className="text-lg font-semibold tracking-wider">
              Remaining LTAP
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto font-sans font-semibold text-[#faafe7]">
        Real Time LBP stats brought to you by{" "}
        <span className="underline underline-offset-4">
          Capy Data Analytics
        </span>
      </div>
    </main>
  );
}
