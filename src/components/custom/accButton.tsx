import React from "react";
import { motion } from "framer-motion";

const AccButton = (props: {
  title: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  outline?: boolean;
}) => {
  let buttonClasses;
  if (!props.outline) {
    buttonClasses = `cursor-pointer text-zinc-50 text-center rounded-lg bg-gradient-to-tr from-violet-500 to-teal-500 px-3 py-2 text-sm uppercase xl:mt-0 ${
      props.disabled ? "opacity-50 pointer-events-none" : ""
    } ${props.className || ""}`;
  } else {
    buttonClasses = `cursor-pointer rounded-lg px-5 py-3 text-center font-bold uppercase text-stone-50 outline outline-2 outline-acc ${
      props.disabled ? "opacity-50 pointer-events-none" : ""
    } ${props.className || ""}`;
  }
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
      }}
      whileTap={{
        scale: 0.95,
      }}
      className={buttonClasses}
      onClick={props.onClick}
    >
      {props.title}
    </motion.div>
  );
};

export default AccButton;

<motion.div
  whileHover={{
    scale: 1.05,
  }}
  whileTap={{
    scale: 0.95,
  }}
  className="cursor-pointer rounded-lg bg-acc px-5 py-3 text-center font-bold uppercase text-stone-950"
>
  get started
</motion.div>;
