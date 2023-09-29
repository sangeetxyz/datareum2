import React from "react";
import waves from "../../../public/waves.png";
import hero from "../../../public/hero.svg";
import av1 from "../../../public/avatar-1.png";
import av3 from "../../../public/avatar-3.png";
import av4 from "../../../public/avatar-4.png";
import av5 from "../../../public/avatar-5.png";
import av6 from "../../../public/avatar-6.png";
import s from "../../../public/Blood test-bro.svg";
import { AiOutlineArrowRight, AiOutlineDown } from "react-icons/ai";
import { motion } from "framer-motion";
import Magnetic from "../containers/magnetic";
import Particles from "react-particles";
import {
  TbBrandFirebase,
  TbBrandNextjs,
  TbBrandPrisma,
  TbBrandSupabase,
  TbBrandTailwind,
} from "react-icons/tb";
import { Inknut_Antiqua } from "next/font/google";
import { cn } from "@/lib/utils";
import {
  SiFirebase,
  SiNextdotjs,
  SiPrisma,
  SiSupabase,
  SiTailwindcss,
} from "react-icons/si";
import { BsMouse } from "react-icons/bs";
import { useAuth } from "@/context/context";
import { useRouter } from "next/navigation";
const Inknut = Inknut_Antiqua({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const HeroSection = (props: { setVariant: (data: string) => void }) => {
  const user = useAuth();
  const router = useRouter();
  return (
    <div className="via-stone-95 relative flex h-screen w-full justify-center  bg-gradient-to-l from-stone-900 to-stone-950 pt-20 text-white xl:pt-10">
      <div className="bg-neutral-70 flex h-full w-full max-w-[94rem] flex-col justify-center xl:flex-row">
        <div className="bg-red-95 lg justify-cente flex w-full items-center justify-center md:mt-10 xl:ml-8 xl:mt-0 2xl:ml-0">
          <div className="mt-8 flex flex-col items-center md:mt-0 xl:items-start">
            <div className="lg:text-md mb-2 ml-1 text-sm uppercase 2xl:text-xl">
              keep your data safe{" "}
              <span className="text-2xl font-extrabold text-acc">!</span>
            </div>
            <div className="flex flex-col items-center space-y-4 xl:items-start">
              <div
                className={cn(
                  "xs:text-4x whitespace-nowrap bg-gradient-to-r from-gray-200 via-gray-300 to-gray-500 bg-clip-text text-3xl font-bold capitalize text-transparent sm:text-5xl lg:text-6xl 2xl:text-7xl",
                  Inknut.className,
                )}
                onMouseEnter={() => {
                  props.setVariant("hero");
                }}
                onMouseLeave={() => {
                  props.setVariant("default");
                }}
              >
                Blockchain powered
              </div>
              <div
                className={cn(
                  "my-2 text-3xl font-bold capitalize text-acc xs:text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl",
                  Inknut.className,
                )}
                onMouseEnter={() => {
                  props.setVariant("hero");
                }}
                onMouseLeave={() => {
                  props.setVariant("default");
                }}
              >
                data exchange
              </div>
              <div
                className={cn(
                  "xs:text-4x bg-gradient-to-l from-gray-200 via-gray-300 to-gray-500 bg-clip-text text-center text-3xl font-bold capitalize text-transparent sm:text-5xl lg:text-6xl 2xl:text-7xl",
                  Inknut.className,
                )}
                onMouseEnter={() => {
                  props.setVariant("hero");
                }}
                onMouseLeave={() => {
                  props.setVariant("default");
                }}
              >
                for the healthcare
              </div>
            </div>
            <div className="mt-4 hidden xl:block">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum est
              quisquam voluptas itaque deserunt soluta impedit recusandae culpa
              ipsam hic. Odio cumque provident minima molestiae cupiditate fuga
              et porro maiores?
            </div>
            <div className="mt-4 flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
              <motion.div
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                onClick={() => {
                  if (!user) {
                    router.push("/signin");
                  } else {
                    router.push("/dashboard");
                  }
                }}
                className="cursor-pointer rounded-lg bg-acc px-5 py-3 text-center font-bold uppercase text-stone-950"
              >
                get started
              </motion.div>
              <motion.div
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="hidden cursor-pointer rounded-lg px-5 py-3 text-center font-bold uppercase text-stone-50 outline outline-2 outline-acc md:block"
              >
                explore now
              </motion.div>
            </div>
            {/* 2nd page */}
            <div className="mt-7 hidden flex-col items-center space-y-4 xl:flex">
              <div className="h-[2px] w-[30rem] bg-gradient-radial from-acc xl:bg-gradient-to-l xl:from-transparent xl:to-acc"></div>
              <div className="flex w-full justify-center">
                <div className="flex w-full justify-around">
                  <div className="h-full">
                    <TbBrandNextjs size={80} color={"#d6d3d1"} />
                  </div>
                  <div>
                    <TbBrandSupabase size={80} color={"#d6d3d1"} />
                  </div>
                  <div>
                    <TbBrandTailwind size={80} color={"#d6d3d1"} />
                  </div>
                  <div>
                    <TbBrandPrisma size={80} color={"#d6d3d1"} />
                  </div>
                  <div>
                    <TbBrandFirebase size={80} color={"#d6d3d1"} />
                  </div>
                </div>
              </div>
              <div className="h-[2px] w-[30rem] bg-gradient-radial from-acc to-transparent xl:bg-gradient-to-l xl:from-transparent xl:to-acc"></div>
            </div>
          </div>
        </div>
        <div className="bg-red-90 flex w-full items-center justify-center overflow-hidden ">
          <img src={s.src} alt="" className="xl:-scale-x-11 h-full w-full" />
        </div>
      </div>
      <div className="absolute bottom-10 hidden flex-col items-center justify-center xl:flex">
        <div>
          <BsMouse size={40} color={"#d6d3d1"} />
        </div>
        <div>
          <AiOutlineDown size={30} color={"#d6d3d1"} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
