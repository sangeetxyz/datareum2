import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
const A = () => {
  const mainDivRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: mainDivYProgess } = useScroll({
    target: mainDivRef,
    offset: ["0 0", "1 1"],
  });
  const spring = useSpring(mainDivYProgess);
  const mainDivTrans = useTransform(mainDivYProgess, [0, 1], ["0%", "-300%"]);
  const mainDivTrans2 = useTransform(mainDivYProgess, [0, 1], ["0%", "300%"]);

  console.log(mainDivTrans);
  return (
    <div ref={mainDivRef} className="relative h-[400vh] bg-black">
      <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden bg-stone-950 pt-20">
        <div className="h-full w-full p-[4vw]">
          <div>asdas</div>
        </div>
      </div>
    </div>
  );
};

export default A;