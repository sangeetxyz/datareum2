import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import {
  TbBrandFigma,
  TbBrandFirebase,
  TbBrandFramerMotion,
  TbBrandNextjs,
  TbBrandPrisma,
  TbBrandRadixUi,
  TbBrandReact,
  TbBrandSupabase,
  TbBrandTailwind,
  TbBrandThreejs,
  TbBrandValorant,
  TbBrandVercel,
} from "react-icons/tb";
import Scrollbars from "react-scrollbars-custom";
import { Carousel } from "antd";
const BrandSection = () => {
  const mainDivRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: mainDivYProgess } = useScroll({
    target: mainDivRef,
    offset: ["0 0", "0 1"],
  });
  const spring = useSpring(mainDivYProgess);
  const mainDivTrans = useTransform(mainDivYProgess, [0, 1], ["0%", "-100%"]);
  const mainDivTrans2 = useTransform(mainDivYProgess, [0, 1], ["0%", "300%"]);
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);
  useEffect(() => {
    setWidth(carousel.current?.scrollWidth! - carousel.current?.offsetWidth!);
    console.log(
      carousel.current?.scrollWidth! - carousel.current?.offsetWidth!,
    );
  }, [carousel.current]);

  return (
    <div ref={mainDivRef} className="relative">
      <div
        ref={carousel}
        className="stone-900 flex h-full w-full items-center overflow-hidden bg-gradient-to-t from-stone-900 to-stone-950"
      >
        <motion.div
          drag="x"
          dragConstraints={{
            right: 0,
            left: -width - 32,
          }}
          whileHover={{
            cursor: "grabbing",
          }}
          className="overflow-hidde flex h-full w-full items-center space-x-8 p-8"
        >
          <div className="h-48 w-48 shrink-0 rounded-xl bg-gradient-to-bl from-stone-800 to-stone-950 p-8 outline outline-1 outline-stone-500">
            <TbBrandNextjs className="h-full w-full" color="#facc15" />
          </div>
          <div className="h-48 w-48 shrink-0 rounded-xl bg-gradient-to-bl from-stone-800 to-stone-950 p-8 outline outline-1 outline-stone-500">
            <TbBrandSupabase className="h-full w-full" color="#facc15" />
          </div>
          <div className="h-48 w-48 shrink-0 rounded-xl bg-gradient-to-bl from-stone-800 to-stone-950 p-8 outline outline-1 outline-stone-500">
            <TbBrandPrisma className="h-full w-full" color="#facc15" />
          </div>
          <div className="h-48 w-48 shrink-0 rounded-xl bg-gradient-to-bl from-stone-800 to-stone-950 p-8 outline outline-1 outline-stone-500">
            <TbBrandTailwind className="h-full w-full" color="#facc15" />
          </div>
          <div className="h-48 w-48 shrink-0 rounded-xl bg-gradient-to-bl from-stone-800 to-stone-950 p-8 outline outline-1 outline-stone-500">
            <TbBrandFirebase className="h-full w-full" color="#facc15" />
          </div>
          <div className="h-48 w-48 shrink-0 rounded-xl bg-gradient-to-bl from-stone-800 to-stone-950 p-8 outline outline-1 outline-stone-500">
            <TbBrandFramerMotion className="h-full w-full" color="#facc15" />
          </div>
          <div className="h-48 w-48 shrink-0 rounded-xl bg-gradient-to-bl from-stone-800 to-stone-950 p-8 outline outline-1 outline-stone-500">
            <TbBrandVercel className="h-full w-full" color="#facc15" />
          </div>
          <div className="h-48 w-48 shrink-0 rounded-xl bg-gradient-to-bl from-stone-800 to-stone-950 p-8 outline outline-1 outline-stone-500">
            <TbBrandReact className="h-full w-full" color="#facc15" />
          </div>
          <div className="h-48 w-48 shrink-0 rounded-xl bg-gradient-to-bl from-stone-800 to-stone-950 p-8 outline outline-1 outline-stone-500">
            <TbBrandThreejs className="h-full w-full" color="#facc15" />
          </div>
          <div className="h-48 w-48 shrink-0 rounded-xl bg-gradient-to-bl from-stone-800 to-stone-950 p-8 outline outline-1 outline-stone-500">
            <TbBrandFigma className="h-full w-full" color="#facc15" />
          </div>
          <div className="h-48 w-48 shrink-0 rounded-xl bg-gradient-to-bl from-stone-800 to-stone-950 p-8 outline outline-1 outline-stone-500">
            <TbBrandRadixUi className="h-full w-full" color="#facc15" />
          </div>
          <div className="h-48 w-48 shrink-0 rounded-xl bg-gradient-to-bl from-stone-800 to-stone-950 p-8 outline outline-1 outline-stone-500">
            <TbBrandValorant className="h-full w-full" color="#facc15" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BrandSection;
