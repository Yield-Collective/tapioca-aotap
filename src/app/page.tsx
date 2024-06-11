import Image from "next/image";
import imageTapioca from "./tapioca.png";
import Link from "next/link";
import { AnimatedNumber } from "./animated-number";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-start justify-between bg-[#0a0949] p-8 text-center text-black">
      <Link
        className="underline underline-offset-4"
        href="https://www.tapioca.xyz/"
        target="_blank"
      >
        <Image src={imageTapioca} alt="Tapioca SVG" className="h-5 w-auto" />
      </Link>
      <div className="w-full items-center justify-center space-y-8 p-0 font-digital text-4xl font-bold  text-[#faafe7] sm:p-24 md:text-6xl">
        <AnimatedNumber />

        <p className="text-lg font-semibold tracking-wider">
          total USDC Contributed
        </p>
      </div>

      <div className="mx-auto font-sans font-semibold text-[#faafe7]">
        Made by{" "}
        <Link
          className="underline underline-offset-4"
          href="https://twitter.com/blupandaman"
          target="_blank"
        >
          blupandaman
        </Link>{" "}
        💙🐼 in support for{" "}
        <Link
          className="underline underline-offset-4"
          href="https://www.tapioca.xyz/"
          target="_blank"
        >
          tapioca.xyz
        </Link>
      </div>
    </main>
  );
}
