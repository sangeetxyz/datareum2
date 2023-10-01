import React, { useEffect, useRef } from "react";
import { Lora } from "next/font/google";
const lora = Lora({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });
import {
  AnimatePresence,
  motion,
  useInView,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { cn } from "@/lib/utils";
import { Scale } from "lucide-react";
import { list } from "firebase/storage";
import { useAtom } from "jotai";
import { keyHolder } from "@/jotai/atom";
const A = () => {
  const mainDivRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: mainDivYProgess } = useScroll({
    target: mainDivRef,
    offset: ["0 0", "1 1"],
  });
  const spring = useSpring(mainDivYProgess);
  const mainDivTrans = useTransform(mainDivYProgess, [0, 1], ["0%", "-300%"]);
  const mainDivTrans2 = useTransform(mainDivYProgess, [0, 1], ["0%", "300%"]);
  const lust: {
    path: string;
    description: string;
    id: number;
    text: string;
  }[] = [
    {
      id: 1,
      text: "Passwordless authentication",
      description:
        "Passwordless authentication and OTPs enhance security by replacing traditional passwords with temporary, one-time codes for user access.",
      path: "./features/passwordless.svg",
    },
    {
      id: 2,
      text: "CSV Processing Unit",
      description:
        "Passwordless authentication and OTPs enhance security by replacing traditional passwords with temporary, one-time codes for user access.",
      path: "./features/csv.svg",
    },
    {
      id: 3,
      text: "Passwordless authentication",
      description:
        "Passwordless authentication and OTPs enhance security by replacing traditional passwords with temporary, one-time codes for user access.",
      path: "./Documents-bro.svg",
    },
    {
      id: 4,
      text: "Passwordless authentication",
      description:
        "Passwordless authentication and OTPs enhance security by replacing traditional passwords with temporary, one-time codes for user access.",
      path: "./Documents-bro.svg",
    },
    {
      id: 5,
      text: "Passwordless authentication",
      description:
        "Passwordless authentication and OTPs enhance security by replacing traditional passwords with temporary, one-time codes for user access.",
      path: "./Documents-bro.svg",
    },
    {
      id: 6,
      text: "Passwordless authentication",
      description:
        "Passwordless authentication and OTPs enhance security by replacing traditional passwords with temporary, one-time codes for user access.",
      path: "./Documents-bro.svg",
    },
  ];
  console.log(mainDivTrans);
  const [key, setKey] = useAtom(keyHolder);

  return (
    <div
      ref={mainDivRef}
      className="relative flex justify-center bg-gradient-to-b from-stone-900 to-stone-950 lg:h-[400vh]"
    >
      <div className="flex h-full w-full max-w-6xl">
        {/* left */}
        <div className="flex h-full w-full flex-col items-center space-y-10 bg-gradient-to-b from-stone-900 to-stone-950 px-[5vw] lg:px-8 py-10 lg:justify-between lg:space-y-0 lg:py-[50vh]">
          {lust.map((el) => {
            return (
              <LeftItem
                text={el.text}
                description={el.description}
                id={el.id}
              />
            );
          })}
        </div>
        {/* right */}
        <div className="bg-stone-90 sticky top-0 hidden h-screen w-full flex-col items-center justify-center overflow-hidden pt-20 lg:flex">
          <div className="bg-red-95 relative flex aspect-square w-full items-center justify-center">
            <RightItem path={lust[key - 1].path} id={lust[key - 1].id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default A;

const LeftItem = ({
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
  }, [isInMiddle]);

  return (
    <div
      ref={eleRef}
      className="w- mx-4 flex flex-col space-y-4 rounded-xl bg-gradient-to-b from-stone-800 to-stone-950 p-8 shadow-xl shadow-stone-950 outline outline-2 outline-stone-700"
    >
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: isInView && isInMiddle ? 1 : isInView ? 1 : 0,
        }}
        className={cn(
          "text-center text-3xl font-bold capitalize transition-colors md:text-4xl lg:text-5xl",
          isInMiddle ? "text-acc" : "text-stone-100",
          lora.className,
        )}
      >
        {text}
      </motion.div>
      <div className="text-center">{description}</div>
    </div>
  );
};

const RightItem = ({ path, id }: { path: string; id: number }) => {
  const [key, setKey] = useAtom(keyHolder);
  const eleRef = useRef(null);
  const isInView = useInView(eleRef, {});
  return (
    <AnimatePresence>
      <motion.div
        key={id}
        initial={{
          scale: 0,
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.3,
        }}
        exit={{
          scale: 0,
          opacity: 0,
        }}
        className="absolute left-0 top-0 h-full w-full p-8"
      >
        <div className="rounded-full bg-gradient-to-b from-stone-800 to-stone-950 p-16 shadow-xl shadow-stone-950 outline outline-2 outline-stone-700">
          <img src={path} alt="" />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
