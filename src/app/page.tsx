import Image from "next/image";
import imageTapioca from "./tapioca.png";
import Link from "next/link";
import { Character, Puncuation } from "./characters";

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
      <div className="text-wrapflex w-full items-center justify-center space-y-8 p-0 font-digital text-4xl font-bold  text-[#faafe7] sm:p-24 md:text-6xl">
        <div className="leading-[0]">
          <span>
            <Character value={0} />
            <Character value={1} />
          </span>
          <span className="pl-4">
            <span className="pr-3">:</span>
            <Character value={1} />
            <Character value={0} />
          </span>
          <span className="pl-4">
            <span className="pr-3">:</span>
            <Character value={2} />
            <Character value={3} />
          </span>
          <span className="pl-4">
            <span className="pr-3">:</span>
            <Character value={2} />
            <Character value={4} />
          </span>
          <span className="pl-4">
            <span className="pr-3">:</span>
            <Character value={4} />
            <Character value={1} />
          </span>
          <span className="pl-4">
            <span className="pr-3">:</span>
            <Puncuation value={1} delay={10000} />
            <Puncuation value={6} delay={1000} />
          </span>
        </div>

        <p className="text-lg font-semibold tracking-wider">
          Currently on testnet phase 2
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
