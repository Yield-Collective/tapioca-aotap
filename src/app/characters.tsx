"use client";

import { MotionValue, motion, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const fontSize = 60;
const padding = 30;
const height = fontSize + padding;

const puncuationSymbols = new Map<number, string>([
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

const characterSymbols = new Map<number, string>([
  [0, "O"],
  [1, "M"],
  [2, "G"],
  [3, "W"],
  [4, "E"],
  [5, "'"],
  [6, "R"],
  [7, "S"],
  [8, "F"],
  [9, "C"],
  [10, "K"],
  [11, "I"],
  [12, "N"],
  [13, "L"],
  [14, "0"],
]);

function Symbol({ mv, number }: { mv: MotionValue; number: number }) {
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
      {puncuationSymbols.get(number)}
    </motion.span>
  );
}

export function Puncuation({ value, delay }: { value: number; delay: number }) {
  const [valueState, setValueState] = useState(value);
  let valueRoundedToPlace = Math.floor(valueState / 1);
  let animatedValue = useSpring(valueRoundedToPlace, {
    bounce: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      let nextValue = valueState + 1;

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
      {[...puncuationSymbols.keys()].map((i) => (
        <Symbol key={i} mv={animatedValue} number={i} />
      ))}
    </div>
  );
}

function Letter({ mv, number }: { mv: MotionValue; number: number }) {
  let y = useTransform(mv, (latest) => {
    let placeValue = latest % 15;
    let offset = (15 + number - placeValue) % 15;

    let memo = offset * height;

    if (offset > 5) {
      memo -= 15 * height;
    }

    return memo;
  });

  return (
    <motion.span
      style={{ y }}
      className="absolute inset-0 flex items-center justify-center"
    >
      {characterSymbols.get(number)}
    </motion.span>
  );
}

export function Character({ value }: { value: number }) {
  const [valueState, setValueState] = useState(14);
  let valueRoundedToPlace = Math.floor(valueState / 1);
  let animatedValue = useSpring(valueRoundedToPlace, {
    bounce: 0,
  });

  useEffect(() => {
    setValueState(value);
  }, [setValueState, value]);

  useEffect(() => {
    animatedValue.set(valueRoundedToPlace);
  }, [animatedValue, valueRoundedToPlace]);

  return (
    <div
      style={{ height }}
      className="relative top-[33px] inline-block w-[1ch] overflow-hidden font-digital font-bold text-[#faafe7] md:top-[26px]"
    >
      {[...characterSymbols.keys()].map((i) => (
        <Letter key={i} mv={animatedValue} number={i} />
      ))}
    </div>
  );
}
