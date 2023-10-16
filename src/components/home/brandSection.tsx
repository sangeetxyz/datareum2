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
import { useAtom } from "jotai";
import { cursorVariant } from "@/jotai/atom";
import { useRouter } from "next/navigation";
const BrandSection = () => {
  const mainDivRef = useRef<HTMLDivElement>(null);
  const [variant, setVariant] = useAtom(cursorVariant);
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const brandList = [
    {
      id: 1,
      brand: "nextjs",
      icon: () => <TbBrandNextjs className="h-full w-full" color="#facc15" />,
      link: "https://nextjs.org/",
    },
    {
      id: 2,
      brand: "supabase",
      icon: () => <TbBrandSupabase className="h-full w-full" color="#facc15" />,
      link: "https://supabase.com/",
    },
    {
      id: 3,
      brand: "prisma",
      icon: () => <TbBrandPrisma className="h-full w-full" color="#facc15" />,
      link: "https://www.prisma.io/",
    },
    {
      id: 4,
      brand: "tailwind",
      icon: () => <TbBrandTailwind className="h-full w-full" color="#facc15" />,
      link: "https://tailwindcss.com/",
    },
    {
      id: 5,
      brand: "firebase",
      icon: () => <TbBrandFirebase className="h-full w-full" color="#facc15" />,
      link: "https://firebase.google.com/",
    },
    {
      id: 6,
      brand: "framer motion",
      icon: () => (
        <TbBrandFramerMotion className="h-full w-full" color="#facc15" />
      ),
      link: "https://www.framer.com/motion/",
    },
    {
      id: 7,
      brand: "vercel",
      icon: () => <TbBrandVercel className="h-full w-full" color="#facc15" />,
      link: "https://vercel.com/",
    },
    {
      id: 8,
      brand: "react",
      icon: () => <TbBrandReact className="h-full w-full" color="#facc15" />,
      link: "",
    },
    {
      id: 9,
      brand: "threejs",
      icon: () => <TbBrandThreejs className="h-full w-full" color="#facc15" />,
      link: "https://threejs.org/",
    },
    {
      id: 10,
      brand: "figma",
      icon: () => <TbBrandFigma className="h-full w-full" color="#facc15" />,
      link: "https://www.figma.com/",
    },
    {
      id: 11,
      brand: "radixui",
      icon: () => <TbBrandRadixUi className="h-full w-full" color="#facc15" />,
      link: "https://www.radix-ui.com/",
    },
    {
      id: 12,
      brand: "valorant",
      icon: () => <TbBrandValorant className="h-full w-full" color="#facc15" />,
      link: "https://playvalorant.com/en-gb/",
    },
  ];

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
