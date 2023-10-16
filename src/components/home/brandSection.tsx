import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useAtom } from "jotai";
import { cursorVariant } from "@/jotai/atom";
import { useRouter } from "next/navigation";
import { brandList } from "@/utils/helper/listHolders";

const BrandSection = () => {
  const mainDivRef = useRef<HTMLDivElement>(null);
  const [variant, setVariant] = useAtom(cursorVariant);
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    setWidth(carousel.current?.scrollWidth! - carousel.current?.offsetWidth!);
    console.log(
      carousel.current?.scrollWidth! - carousel.current?.offsetWidth!,
    );
  }, []);

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
          className="overflow-hidde flex h-full w-full items-center space-x-8 p-8"
        >
          {brandList.map((brand) => {
            return (
              <motion.div
                key={brand.id}
                whileHover={{
                  scale: 1.2,
                  rotate: 5,
                }}
                whileTap={{
                  scale: 0.8,
                  rotate: -5,
                }}
                onMouseEnter={() => {
                  setVariant("brand");
                }}
                onMouseLeave={() => {
                  setVariant("default");
                }}
                onClick={(event) => {
                  event.preventDefault();
                  event.stopPropagation();
                  router.replace(brand.link);
                }}
                className="h-48 w-48 shrink-0 rounded-xl bg-gradient-to-bl from-stone-800 to-stone-950 p-8 outline outline-1 outline-stone-500"
              >
                <brand.icon />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default BrandSection;
