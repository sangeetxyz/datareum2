import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
const Se = () => {
  const mainDivRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: mainDivYProgess } = useScroll({
    target: mainDivRef,
    offset: ["0.5 1", "1 1"],
  });
  const spring = useSpring(mainDivYProgess);
  const mainDivTrans = useTransform(spring, [0, 1], ["0deg", "180deg"]);
  return (
    <div className="relative h-[300vh] bg-black">
      <div className="sticky top- flex h-screen w-full items-center justify-center overflow-hidden bg-stone-950">
       
      </div>
    </div>
  );
};

export default Se;
