"use client";
import {
  AnimatePresence,
  AnimationProps,
  motion,
  useTransform,
} from "framer-motion";
import useMousePosition from "./useMousePosition";
import { useAtom } from "jotai";
import { cursorVariant } from "@/jotai/atom";
import { HiOutlineCursorClick } from "react-icons/hi";

const Cursor = () => {
  const cursor = useMousePosition();
  const [variant, setVariant] = useAtom(cursorVariant);
  const cursorVariants: AnimationProps["variants"] = {
    default: {
      x: cursor.x - 8,
      y: cursor.y - 8,
      height: 16,
      width: 16,
      borderRadius: `9999px`,
      backgroundColor: "#fff",
    },
    hero: {
      x: cursor.x - 150,
      y: cursor.y - 150,
      borderRadius: `9999px`,
      height: 300,
      width: 300,
      backgroundColor: "#facc50",
      mixBlendMode: "difference",
    },
    text: {
      x: cursor.x - 20,
      y: cursor.y - 20,
      borderRadius: `9999px`,
      height: 40,
      width: 40,
      backgroundColor: "#facc15",
      mixBlendMode: "difference",
    },
    button: {
      x: cursor.x - 25,
      y: cursor.y - 25,
      display: `flex`,
      height: 50,
      width: 50,
      backgroundColor: "black",
      color: "#facc15",
    },
    reverse: {
      x: cursor.x - 50,
      y: cursor.y - 50,
      display: `flex`,
      height: 100,
      width: 100,
      backgroundColor: "transparent",
      color: "#facc15",
    },
    brand: {
      x: cursor.x - 30,
      y: cursor.y - 30,
      display: `flex`,
      height: 60,
      width: 60,
      backgroundColor: "#facc15",
      mixBlendMode: "difference",
      color: "black",
    },
    features: {
      x: cursor.x - 50,
      y: cursor.y - 50,
      display: `flex`,
      height: 100,
      width: 100,
      backgroundColor: "transparent",
      color: "#facc15",
    },
    three: {
      x: cursor.x - 50,
      y: cursor.y - 50,
      display: `flex`,
      height: 100,
      width: 100,
      backgroundColor: "transparent",
      color: "#facc15",
      mixBlendMode: "difference",
    },
    hide: {
      opacity: "0%",
    },
  };
  return (
    <>
      {variant === "button" ? (
        <motion.div
          variants={cursorVariants}
          animate={variant}
          className="pointer-events-none fixed left-0 top-0 z-50 flex items-center justify-center outline outline-2 outline-acc md:block"
        >
          <div className="whitespace-nowrap text-xs font-bold capitalize">
            click
          </div>
        </motion.div>
      ) : variant === "reverse" ? (
        <motion.div
          variants={cursorVariants}
          animate={variant}
          className="pointer-events-none fixed left-0 top-0 z-50 flex items-center justify-center outline outline-2 outline-stone-100 md:block"
        >
          <div className="whitespace-nowrap text-sm font-bold capitalize">
            we provide
          </div>
        </motion.div>
      ) : variant === "brand" ? (
        <motion.div
          variants={cursorVariants}
          animate={variant}
          className="pointer-events-none fixed left-0 top-0 z-50 flex items-center justify-center md:block"
        >
          <div className="text-center text-sm font-bold capitalize">
            <HiOutlineCursorClick size={40} />
          </div>
        </motion.div>
      ) : variant === "features" ? (
        <motion.div
          variants={cursorVariants}
          animate={variant}
          className="pointer-events-none fixed left-0 top-0 z-50 flex items-center justify-center outline outline-2 outline-stone-100 md:block"
        >
          <div className="whitespace-nowrap text-sm font-bold capitalize">
            features
          </div>
        </motion.div>
      ) : variant === "three" ? (
        <motion.div
          variants={cursorVariants}
          animate={variant}
          className="pointer-events-none fixed left-0 top-0 z-50 flex items-center justify-center outline outline-2 outline-stone-100 md:block"
        >
          <div className="whitespace-nowrap text-sm font-bold capitalize">
            explore
          </div>
        </motion.div>
      ) : (
        <motion.div
          variants={cursorVariants}
          animate={variant}
          className="pointer-events-none fixed left-0 top-0 z-50 h-4 w-4 rounded-full bg-white md:block"
        ></motion.div>
      )}
    </>
  );
};

export default Cursor;
