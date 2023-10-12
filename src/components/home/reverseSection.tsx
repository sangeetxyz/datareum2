import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
const ReverseSection = () => {
  const mainDivRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: mainDivYProgess } = useScroll({
    target: mainDivRef,
    offset: ["0 0", "1 1"],
  });
  const spring = useSpring(mainDivYProgess);
  const mainDivTrans = useTransform(mainDivYProgess, [0, 1], ["0%", "-300%"]);
  const mainDivTrans2 = useTransform(mainDivYProgess, [0, 1], ["0%", "300%"]);
  const itemList = [
    {
      id: 1,
      path: "/privacy.jpg",
      text: "privacy?",
    },
    {
      id: 2,
      path: "/research.jpg",
      text: "research?",
    },
    {
      id: 3,
      path: "/safety.jpg",
      text: "safety?",
    },
    {
      id: 4,
      path: "/data.jpg",
      text: "datareum.",
    },
  ];
  return (
    <div ref={mainDivRef} className="relative h-[400vh] bg-black">
      <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden bg-stone-950 pt-20">
        <div className="h-full w-full p-[4vw]">
          <div className="relative flex h-full w-full overflow-hidden rounded-2xl outline  outline-1 outline-acc">
            <motion.div
              style={{ x: mainDivTrans }}
              className="relative flex h-full w-full"
            >
              {itemList.map((item) => {
                return (
                  <Image
                    key={item.id}
                    className="h-full w-full shrink-0 object-cover opacity-50"
                    height={1000}
                    width={1000}
                    // quality={1}
                    alt={item.text}
                    src={`/reverse${item.path}`}
                  />
                );
              })}
            </motion.div>
            <motion.div
              style={{
                x: mainDivTrans2,
              }}
              className="absolute left-0 top-0 flex h-full w-full items-center justify-end text-9xl text-acc"
            >
              {itemList
                .slice()
                .reverse()
                .map((item) => {
                  return (
                    <div
                      key={item.id}
                      className="w-full shrink-0 text-center font-bold capitalize"
                    >
                      {item.text}
                    </div>
                  );
                })}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReverseSection;
