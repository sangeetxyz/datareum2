import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

export const RightItem = ({ path, id }: { path: string; id: number }) => {
  return (
    <AnimatePresence>
      <motion.div
        key={id}
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
          type: "spring",
        }}
        exit={{
          // scale: 0,
          opacity: 0,
        }}
        className="absolute left-0 top-0 h-full w-full p-8"
      >
        <div className="rounded-full bg-gradient-to-b from-stone-800 to-stone-950 p-16 shadow-xl shadow-stone-950 outline outline-2 outline-stone-700">
          <Image width={1000} height={1000} priority src={path} alt="" />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
