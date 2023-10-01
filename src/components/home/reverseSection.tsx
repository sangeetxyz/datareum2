import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
const ReverseSection = () => {
  const mainDivRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: mainDivYProgess } = useScroll({
    target: mainDivRef,
    offset: ["0 0", "1 1"],
  });
  const spring = useSpring(mainDivYProgess);
  const mainDivTrans = useTransform(mainDivYProgess, [0, 1], ["0%", "-300%"]);
  const mainDivTrans2 = useTransform(mainDivYProgess, [0, 1], ["0%", "300%"]);

  return (
    <div ref={mainDivRef} className="relative h-[400vh] bg-black">
      <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden bg-stone-950 pt-20">
        <div className="h-full w-full p-[4vw]">
          <div className="relative flex h-full w-full overflow-hidden rounded-2xl outline  outline-1 outline-acc">
            <motion.div
              style={{ x: mainDivTrans }}
              className="flex h-full w-full"
            >
              <img
                src="./world.png"
                alt=""
                className="h-full w-full shrink-0 object-cover opacity-50"
              />
              <img
                src="./cctv.png"
                alt=""
                className="h-full w-full shrink-0 object-cover opacity-50"
              />
              <motion.img
                src="./world.png"
                alt=""
                className="h-full w-full shrink-0 object-cover opacity-50"
              />
              <motion.img
                src="./world.png"
                alt=""
                className="h-full w-full shrink-0 object-cover opacity-50"
              />
            </motion.div>
            <motion.div
              style={{
                x: mainDivTrans2,
              }}
              className="absolute left-0 top-0 flex h-full w-full items-center justify-end text-9xl text-acc"
            >
              <div className="w-full shrink-0 text-center font-bold">one</div>
              <div className="w-full shrink-0 text-center font-bold">You!</div>
              <div className="w-full shrink-0 text-center font-bold">
                Privacy is everything
              </div>
              <div className="w-full shrink-0 text-center font-bold">
                In this world
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReverseSection;
