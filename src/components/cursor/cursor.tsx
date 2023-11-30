"use client";
import { motion } from "framer-motion";
import useMousePosition from "./useMousePosition";
import { useAtom } from "jotai";
import { cursorVariant } from "@/jotai/atom";
import { HiOutlineCursorClick } from "react-icons/hi";
import { cursorVariants } from "@/utils/helper/listHolders";
import { useEffect } from "react";

const Cursor = () => {
  const cursor = useMousePosition();
  const [variant, setVariant] = useAtom(cursorVariant);
  const cursorVariantsPrivate: any = cursorVariants(cursor);

  useEffect(() => {
    setVariant("default");
  }, []);

  return (
    <div className="hidden md:block">
      {variant === "button" ? (
        <motion.div
          variants={cursorVariantsPrivate}
          animate={variant}
          className="pointer-events-none fixed left-0 top-0 z-50 flex items-center justify-center outline outline-2 outline-acc md:block"
        >
          <div className="whitespace-nowrap text-xs font-bold capitalize">
            click
          </div>
        </motion.div>
      ) : variant === "reverse" ? (
        <motion.div
          variants={cursorVariantsPrivate}
          animate={variant}
          className="pointer-events-none fixed left-0 top-0 z-50 flex items-center justify-center outline outline-2 outline-stone-100 md:block"
        >
          <div className="whitespace-nowrap text-sm font-bold capitalize">
            we provide
          </div>
        </motion.div>
      ) : variant === "brand" ? (
        <motion.div
          variants={cursorVariantsPrivate}
          animate={variant}
          className="pointer-events-none fixed left-0 top-0 z-50 flex items-center justify-center md:block"
        >
          <div className="text-center text-sm font-bold capitalize">
            <HiOutlineCursorClick size={40} />
          </div>
        </motion.div>
      ) : variant === "features" ? (
        <motion.div
          variants={cursorVariantsPrivate}
          animate={variant}
          className="pointer-events-none fixed left-0 top-0 z-50 flex items-center justify-center outline outline-2 outline-stone-100 md:block"
        >
          <div className="whitespace-nowrap text-sm font-bold capitalize">
            features
          </div>
        </motion.div>
      ) : variant === "three" ? (
        <motion.div
          variants={cursorVariantsPrivate}
          animate={variant}
          className="pointer-events-none fixed left-0 top-0 z-50 flex items-center justify-center outline outline-2 outline-stone-100 md:block"
        >
          <div className="whitespace-nowrap text-sm font-bold capitalize">
            explore
          </div>
        </motion.div>
      ) : (
        <motion.div
          variants={cursorVariantsPrivate}
          animate={variant}
          className="pointer-events-none fixed left-0 top-0 z-50 h-4 w-4 rounded-full bg-white md:block"
        ></motion.div>
      )}
    </div>
  );
};

export default Cursor;
