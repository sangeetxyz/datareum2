import React, { useEffect, useRef } from "react";
import { Lora } from "next/font/google";
const lora = Lora({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });
import {
  AnimatePresence,
  motion,
  useInView,
} from "framer-motion";
import { cn } from "@/lib/utils";
import { useAtom } from "jotai";
import {  keyHolder } from "@/jotai/atom";

export const LeftItem = ({
  text,
  description,
  id,
}: {
  text: string;
  description: string;
  id: number;
}) => {
  const [key, setKey] = useAtom(keyHolder);
  const eleRef = useRef<HTMLDivElement>(null);
  const isInMiddle = useInView(eleRef, {
    margin: "-50% 0px -50% 0px",
  });
  const isInView = useInView(eleRef, {});
  useEffect(() => {
    if (isInMiddle) {
      setKey(id);
    }
  }, [isInMiddle, setKey]);

  return (
    <AnimatePresence>
      <motion.div
        ref={eleRef}
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: isInView && isInMiddle ? 1 : isInView ? 0.5 : 0,
          scale: isInView && isInMiddle ? 1 : isInView ? 0.8 : 0.5,
        }}
        transition={{
          duration: 0.6,
        }}
        className="w- mx-4 flex flex-col space-y-4 rounded-xl bg-gradient-to-b from-stone-800 to-stone-950 p-8 shadow-xl shadow-stone-950 outline outline-2 outline-stone-700"
      >
        <motion.div
          className={cn(
            "text-center text-3xl font-bold capitalize transition-colors md:text-4xl lg:text-5xl",
            isInMiddle ? "text-acc" : "text-stone-100",
            lora.className,
          )}
        >
          {text}
        </motion.div>
        <div className="text-center">{description}</div>
      </motion.div>
    </AnimatePresence>
  );
};
