import Image from "next/image";
import imageTapioca from "./tapioca.png";
import Link from "next/link";
import { Digit } from "./digit";

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

      <div className="text-wrapflex w-full items-center justify-center p-0 font-digital text-4xl font-bold  text-[#faafe7] sm:p-24 md:text-6xl">
        <div className="leading-[0]">
          <span>OM : GW : E&apos;RE : SO : FCK : ING : CLO : SE</span>
          <span className="pl-4">
            <span className="pr-3">:</span>
            <Digit place={1} value={0} delay={10000} />
            <Digit place={1} value={0} delay={1000} />
          </span>
        </div>
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
