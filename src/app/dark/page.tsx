"use client";
import { isDark } from "@/jotai/atom";
import { AnimatePresence, motion, useMotionValue } from "framer-motion";
import { useAtom } from "jotai";
import React, { useState } from "react";

const Dark = () => {
  const [isLite, setIsLite] = useAtom(isDark);
  //   const [scale, setScale] = useState(1);
  return (
    <motion.div
      animate={{ backgroundColor: `${!isLite ? "#fff" : "#000"}` }}
      transition={{ duration: 2, ease: "easeIn" }}
      className="flex h-screen items-center justify-center bg-black"
    >
      <motion.div
        animate={{ color: `${isLite ? "#fff" : "#000"}` }}
        transition={{ duration: 2, ease: "easeIn" }}
        onClick={() => {
          setIsLite(!isLite);
        }}
        className="cursor-pointer text-9xl"
      >
        click me
      </motion.div>
    </motion.div>
  );
};

export default Dark;
