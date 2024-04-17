"use client";

import { MotionValue, motion, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const fontSize = 60;
const padding = 30;
const height = fontSize + padding;

function Number({ mv, number }: { mv: MotionValue; number: number }) {
  let y = useTransform(mv, (latest) => {
    let placeValue = latest % 10;
    let offset = (10 + number - placeValue) % 10;

    let memo = offset * height;

    if (offset > 5) {
      memo -= 10 * height;
    }

    return memo;
  });

  return (
    <motion.span
      style={{ y }}
      className="absolute inset-0 flex items-center justify-center"
    >
      {symbols.get(number)}
    </motion.span>
  );
}

const symbols = new Map<number, string>([
  [0, "!"],
  [1, "?"],
  [2, "."],
  [3, "*"],
  [4, "#"],
  [5, "!"],
  [6, "%"],
  [7, "!"],
  [8, "@"],
  [9, "$"],
]);

export function Digit({
  place,
  value,
  delay,
}: {
  place: number;
  value: number;
  delay: number;
}) {
  const [valueState, setValueState] = useState(value);
  let valueRoundedToPlace = Math.floor(valueState / place);
  let animatedValue = useSpring(valueRoundedToPlace, {
    bounce: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      let nextValue = valueState + 1;

      while (nextValue === valueState) {
        nextValue = Math.floor(Math.random() * 10);
      }

      setValueState(nextValue);
    }, delay);

    return () => clearInterval(interval);
  }, [setValueState, delay, valueState]);

  useEffect(() => {
    animatedValue.set(valueRoundedToPlace);
  }, [animatedValue, valueRoundedToPlace]);

  return (
    <div
      style={{ height }}
      className="relative top-[33px] inline-block w-[1ch] overflow-hidden font-digital font-bold text-[#faafe7] md:top-[26px]"
    >
      {[...symbols.keys()].map((i) => (
        <Number key={i} mv={animatedValue} number={i} />
      ))}
    </div>
  );
}
