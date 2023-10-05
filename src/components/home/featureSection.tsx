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
import { useAtom } from "jotai";
import { keyHolder } from "@/jotai/atom";
const FeatureSection = () => {
  const mainDivRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: mainDivYProgess } = useScroll({
    target: mainDivRef,
    offset: ["0 0", "1 1"],
  });
  const spring = useSpring(mainDivYProgess);
  const mainDivTrans = useTransform(spring, [0, 1], ["0%", "-300%"]);
  const mainDivTrans2 = useTransform(spring, [0, 1], ["0%", "300%"]);
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
        "Our platform introduces a revolutionary password-less authentication system that leverages OTP (One-Time Password) technology. Say goodbye to the hassles of remembering complex passwords and the security risks they entail. With our system, users receive a unique OTP on their registered device, ensuring a highly secure login process.",
      path: "./features/passwordless.svg",
    },
    {
      id: 2,
      text: "CSV Processing Unit",
      description:
        "Discover our powerful CSV file processing system, designed to seamlessly parse and import data that perfectly aligns with your database schema. Say goodbye to manual data manipulation and let our system automate the data integration process for you, saving time and ensuring data accuracy.",
      path: "./features/csv.svg",
    },
    {
      id: 3,
      text: "Type Safe Database",
      description:
        "Experience the future of data management with our type-safe database solution. Eliminate the risk of data inconsistencies and errors by enforcing strict data typing and schema adherence, guaranteeing a reliable and robust database environment for your business needs.",
      path: "./features/db.svg",
    },
    {
      id: 4,
      text: "Blockchain Powered",
      description:
        "Revolutionize your data management with our Ethereum blockchain-powered system. Enjoy the benefits of transparency, security, and decentralized control as our platform harnesses the Ethereum network to empower your data-driven operations, ensuring trust and reliability at every step.",
      path: "./features/bitcoin.svg",
    },
    {
      id: 5,
      text: "RESTful API",
      description:
        "Access your data effortlessly through our user-friendly system, equipped with a RESTful API for seamless data retrieval. Our platform not only ensures the security of your information on the Ethereum blockchain but also provides a convenient and standardized way to access it, putting the power of your data in your hands.",
      path: "./features/api.svg",
    },
    {
      id: 6,
      text: "256-Bit Encryption",
      description:
        "Security is paramount in our system. Every single data row is fortified with robust 256-bit encryption, providing an impenetrable layer of protection for your sensitive information, guaranteeing the highest level of data security available.",
      path: "./features/encrypt.svg",
    },
  ];
  const [key, setKey] = useAtom(keyHolder);

  return (
    <div
      ref={mainDivRef}
      className="relative flex justify-center bg-gradient-to-b from-stone-900 to-stone-950 lg:h-[400vh]"
    >
      <div className="flex h-full w-full max-w-6xl">
        {/* left */}
        <div className="flex h-full w-full flex-col items-center space-y-10 bg-gradient-to-b from-stone-900 to-stone-950 px-[5vw] py-10 lg:justify-between lg:space-y-0 lg:px-8 lg:py-[50vh]">
          {lust.map((el) => {
            return (
              <LeftItem
                text={el.text}
                description={el.description}
                id={el.id}
                key={el.id}
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

export default FeatureSection;

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

const RightItem = ({ path, id }: { path: string; id: number }) => {
  const eleRef = useRef(null);
  return (
    <AnimatePresence>
      <motion.div
        key={id}
        initial={{
          // scale: 0,
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
          type: "spring"
        }}
        exit={{
          // scale: 0,
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
