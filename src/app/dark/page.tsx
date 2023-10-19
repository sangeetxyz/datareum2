"use client";
import { isDark } from "@/jotai/atom";
import { AnimatePresence, motion, useMotionValue } from "framer-motion";
import { useAtom } from "jotai";
import React, { useState } from "react";

const Dark = () => {
  //   const [isLite, setIsLite] = useAtom(isDark);
  const val = useMotionValue(1);
  return (
    <div className="flex h-screen items-center justify-center bg-black">
      <AnimatePresence>
        <motion.div
          key={"1"}
          onClick={() => {
            val.set(10);
          }}
          initial={{ backgroundColor: "white" }}
          animate={{ backgroundColor: "black" }}
          transition={{ duration: 39, ease: "easeInOut" }}
          className="cursor-pointer text-9xl"
        >
          dark
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Dark;
